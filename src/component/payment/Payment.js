import React, { useEffect, useState } from 'react';
import { getBasketTotal } from '../../stateProvider/reducer';
import { useStateValue } from '../../stateProvider/StateProvider';
import CheckoutItem from '../checkout/CheckoutItem';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import CurrencyFormat from 'react-currency-format';
import './Payment.css'
import axios from './Axios.js';
import { useHistory } from 'react-router-dom';
function Payment(){
    const history = useHistory();
    const [{basket,user}, dispatch] = useStateValue();

    const stripe = useStripe();
    const elements = useElements();

    const [succeeded, setSucceeded] = useState(false)
    const [processing, setProcessing] = useState('')
    const [error, setError] = useState(null)
    const [disabled,setDisabled] = useState(false)
    const [clientSecret,setClientSecret] = useState(true)
     useEffect(() =>{
         const getClientSecret = async () =>{
             const response = await axios({
                 method: 'post',
                 url: `/payment/create?total=${getBasketTotal(basket)}`
             })
            //  console.log('req success')
            //  console.log(response.data)
             setClientSecret(response.data.clientSecret)
            
         }
         getClientSecret();
     },[basket]);
     console.log('this is secretKey====>' +clientSecret)

    const handleSubmit = async (e) =>{
        e.preventDefault();
        setProcessing(true)
        const payload = await stripe.confirmCardPayment(clientSecret,{
            payment_method: {
                card: elements.getElement(CardElement)
            }
        }).then(({paymentIntent})=>{
            //add db
            setProcessing(false)
            setSucceeded(true)
            setError(null)

            history.replace('/paymentSuccess');
        })

    }
    const handleChange= (e)=>{
        setDisabled(e.empty)
        setError(e.error && e.error.message)

    }

    return(
        <div className='payment'>
        <div className="payment__container">
            {/* info guest  */}
            <div className="payment__section">
                <div className="payment__title">
                    <h3>Delivery Address</h3>
                </div>
                <div className="payment__address">
                    <p>{user?.email}</p>
                    <p>Ap trung,daiminh</p>
                    <p>Dai Loc,QN</p>
                </div>
            </div>
            {/* list product  */}
            <div className="payment__section">
                <div className="payment__title">
                    <h2>Review items and delivery</h2>
                </div>
                <div className="payment__items">
                    <table>
                        <tr>
                            <th>All Product</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Total</th>
                            <th></th>
                        </tr>
                    {basket?.map(item=>(
                        <CheckoutItem
                            title={item.title}
                            image={item.image}
                            rating={item.rating}
                            price={item.price}
                            id={item.id}
                            quantity={item.quantity}
                        />

                    ))}
                    </table>
                </div>
            </div>
            {/* payment method */}
            <div className="payment__section">
                <div className="payment__title">
                    <h3>Payment Method</h3>
                </div>
                <div className="payment__details">
                    <form action="" onSubmit={handleSubmit}>
                        <CardElement onChange={handleChange}/>
                        <div className="payment__priceContainer">
                            <CurrencyFormat
                                renderText={(value)=>(
                                <h3>Order Total:  <span>{value}</span></h3>
                                )}
                                decimalScale={2}
                                value={getBasketTotal(basket)}
                                displayType={'text'}
                                thousandSeparator={true}
                                prefix={'$'}
                            />
                            <button disabled={processing || disabled||succeeded}>
                                <span>{processing? <p>processing</p>: "Buy now"}</span>
                            </button>
                            
                        </div>
                            {error && <div>{error}</div>}
                    </form>
                </div>
            </div>
        </div>
    </div>
    )
}
export default Payment;
import React, { useEffect, useState } from 'react';
import CurrencyFormat from 'react-currency-format'
import { Link, useHistory } from 'react-router-dom';
import {getBasketTotal} from '../../reducer/baskets'
import { useStateValue } from '../../stateProvider/StateProvider';
import PropTypes from 'prop-types'
import { getPostDB } from '../../actions/post';
import { connect } from 'react-redux'
function Subtotal({baskets}){
    const history = useHistory();
    const [basketTotal,setBasketTotal] = useState();
    useEffect(()=>{
        setBasketTotal(getBasketTotal(baskets?.baskets))
    },[baskets])
    const handleCheckout = () =>{
        // dispatch({
        //     type:'REMOVE_BASKET',
        //     id : id
        // })
    }
    return(
        
        <div class="subtotal">
            <div className="subtotal__trai">
                <div class="subtotal__trai-tren">
                    <div class="shoping__cart__btns">
                        <a href="#" class="primary-btn cart-btn">CONTINUE SHOPPING</a>
                    </div>
                </div>
                <div class="subtotal__trai-duoi">
                    <div class="shoping__continue">
                        <div class="shoping__discount">
                            <h5>Discount Codes</h5>
                            <form action="#">
                                <input type="text" placeholder="Enter your coupon code"/>
                                <button type="submit" class="site-btn">APPLY COUPON</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
                <div class="subtotal__phai">
                    <div class="shoping__checkout">
                        <h5>Cart Total</h5>
                        <CurrencyFormat
                            renderText={value=>(
                                <>
                                <p>Subtotal {baskets?.baskets.length}: <span>{value}</span></p>
                                </>
                            )}
                            decimalScale={2}
                            value={basketTotal}
                            prefix={'$'}
                            displayType={'text'}
                            ThousandSeparator={true}
                        >

                        </CurrencyFormat>
                        <a href="#" class="primary-btn" onClick={e=> history.push('/paymentAddress')}>PROCEED TO CHECKOUT</a>
                    </div>
                </div>
            </div>
    )
}
Subtotal.propTypes= ({
    auth: PropTypes.object.isRequired,
    baskets: PropTypes.object.isRequired,
})
const mapStateToProps = state =>({
    auth: state.auth,
    baskets: state.baskets
})
export default connect(mapStateToProps)(Subtotal);
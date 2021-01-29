import React from 'react';
import './Checkout.css'
import Subtotal from './Subtotal'
import CheckoutItem from './CheckoutItem'
import { useStateValue } from '../../stateProvider/StateProvider';
// import ProductItem from './ProductItem';
// import product from '../../../reducer/product';
import PropTypes from 'prop-types'
import { getPostDB } from '../../actions/post';
import { getBasket } from '../../actions/basket';
import { connect } from 'react-redux'
import { useEffect } from 'react';


function Checkout({product,baskets,getBasket}){
    useEffect(() => {
        getBasket()
    }, [])
    // const [{basket},dispatch] = useStateValue();
    return(
        <div className='checkout'>
            <div className='checkoutItem'>
            <table>
                <tr>
                    <th>All Product</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total</th>
                    <th></th>
                </tr>
                {baskets?.baskets.map(item=>(
                    <CheckoutItem
                        item={item}
                />
                ))}

             </table>
        </div>
            <Subtotal/>
        </div>
    )
}
Checkout.propTypes= ({
    auth: PropTypes.object.isRequired,
    product: PropTypes.object.isRequired,
    getBasket: PropTypes.func.isRequired,
    getPostDB: PropTypes.func.isRequired,
    baskets: PropTypes.object.isRequired,
})
const mapStateToProps = state =>({
    auth: state.auth,
    baskets: state.baskets,
    product: state.product
})
export default connect(mapStateToProps,{getPostDB,getBasket})(Checkout);
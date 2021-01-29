import React, { useEffect } from 'react';
import { useStateValue } from '../../../stateProvider/StateProvider';
import './Product.css'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import {db} from '../../../module/firebase'
import { Link } from 'react-router-dom';
import axios from '../../../axios/axios'
import product from '../../../reducer/product';
import { getProductItem } from '../../../actions/post';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
function ProductItem({product:{_id,name,idCategory,price,sales,quantity,state,imgName},getProductItem}){
    const getProduct = ()=>{
        getProductItem(_id)
        console.log('active')
    }
    const addToBasket = () =>{
        //  dispatch({
        //     type:'ADD_BASKET',
        //     basket: {
        //         id: id,
        //         title: title,
        //         price: price,
        //         rating: rating,
        //         image: image,
        //         quantity: 1,
        //     }
        // })
        // db.collection('user')
        //     .doc(user?.uid)
        //     .collection('basket')
        //     .add({
        //         basket: {
        //             id: id,
        //             title: title,
        //             price: price,
        //             rating: rating,
        //             image: image,
        //         }
        // }).then(() => console.log('insert db success'))
    }
    return(
        
            <div className='product' >
                <Link to={`/productDetail/${_id}`}>
                <img 
                onClick={getProduct}
                src={`https://nongsan-viet.herokuapp.com/api/product/retrieve/image/single?name=${imgName}`} alt=""
                 className='product__image'/>
                </Link>
                <div className="product__sale">
                    <p>{sales}</p>
                </div>
                <div className="product__notification">
                    <p>{state}</p>
                </div>
                <div className="product__info">
                    <p className="product__title">{name}</p>
                    <div className='product__price'>
                        <p className='product__price__goc'><small>$</small><strong>{price}</strong></p>
                        <p className='product__price__sale'><small>$</small><strong></strong></p>
                    </div>
                </div>
                <div className="product__rating">
                    <div className="product__rating-heart">
                        <FavoriteBorderIcon/>
                    </div>
                    <div className="product__rating-rating">
                        {/*{Array(rating).fill().map((_,i)=>( */}
                        <img src="https://laz-img-cdn.alicdn.com/tfs/TB19ZvEgfDH8KJjy1XcXXcpdXXa-64-64.png" alt=""/>
                        <img src="https://laz-img-cdn.alicdn.com/tfs/TB19ZvEgfDH8KJjy1XcXXcpdXXa-64-64.png" alt=""/>
                        <img src="https://laz-img-cdn.alicdn.com/tfs/TB19ZvEgfDH8KJjy1XcXXcpdXXa-64-64.png" alt=""/>
                        <img src="https://laz-img-cdn.alicdn.com/tfs/TB19ZvEgfDH8KJjy1XcXXcpdXXa-64-64.png" alt=""/>
                        <img src="https://laz-img-cdn.alicdn.com/tfs/TB19ZvEgfDH8KJjy1XcXXcpdXXa-64-64.png" alt=""/>
                        {/* ))} */}
                    </div>
                    <div className="product-buyer">
                        <p>da ban: {quantity}</p>
                    </div>
                </div>
                {/* <button onClick={addToBasket}>Add Cart</button> */}
            </div>
    )
}
ProductItem.propTypes = ({
    getProductItem: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
})
const mapStateToProps = state => ({
    auth: state.auth
}) 
export default connect(mapStateToProps,{getProductItem})(ProductItem);
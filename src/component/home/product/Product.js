import React, { useEffect } from 'react';
import { useStateValue } from '../../../stateProvider/StateProvider';
import './Product.css'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import {db} from '../../../module/firebase'
import { connect } from 'react-redux'
import ProductItem from './ProductItem';
import product from '../../../reducer/product';
import PropTypes from 'prop-types'
import { getPostDB } from '../../../actions/post';
// import {abc} from '../../../js/script'
function Product({title,product,getPostDB}){
    const [{basket,user} ,dispatch ] = useStateValue();
    useEffect(()=>{
        getPostDB()
    },[])

    return(
        <fieldset>
            <legend className='home__sp__1-title'>{title}</legend>
            <div className="home__sp__1-product">
            
                {product&&
                product.products.map((item)=>(
                    <ProductItem product={item}/>
                ))}
                
              
               
                
            </div>
        </fieldset>
    )
}
Product.propTypes= ({
    auth: PropTypes.object.isRequired,
    product: PropTypes.object.isRequired,
    getPostDB: PropTypes.func.isRequired,
})
const mapStateToProps = state =>({
    auth: state.auth,
    product: state.product
})
export default connect(mapStateToProps,{getPostDB})(Product);
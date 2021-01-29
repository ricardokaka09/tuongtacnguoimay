import React, { useState,useEffect } from 'react';
import './CheckoutItem.css'
import CloseIcon from '@material-ui/icons/Close';
import { useStateValue } from '../../stateProvider/StateProvider';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import { getTotalItem } from '../../reducer/baskets'
import PropTypes from 'prop-types'
import { getPostDB } from '../../actions/post';
import { connect } from 'react-redux'
import { PUT_BASKET } from '../../actions/types';
import { putQuantity } from '../../actions/basket'
import { removeQuantity } from '../../actions/basket'
function CheckoutItem({item: {name,idProduct,imgName,price,quantity},putQuantity,removeQuantity}) {
    const [{basket,user},dispatch] = useStateValue();
    const [count,setCount] = useState(parseInt(quantity))
    const [priceTotal,setPriceTotal] = useState(price);

    useEffect(()=>{
        setPriceTotal(getTotalItem(price,count))
       
    })
    const handleAdd = async(e) =>{ 
        e.preventDefault();
        await setCount(count + 1);
        // console.log(idProduct);
        putQuantity(idProduct)
    }
    
    
    const handleRemove = (e) =>{
        e.preventDefault();
        removeQuantity(idProduct)
        {count>1 && setCount(count -1)}
    }
    const handleRemoveItem = () =>{
        
    }
    return(
            <>
                {/* {basket?.map(item=>( */}
                    <tr>
                    <td>
                        {/* <p className='checkoutItem__id'>{item.id}</p> */}
                        <a href="#"><img className='checkoutItem__image' src={`https://nongsan-viet.herokuapp.com/api/product/retrieve/image/single?name=${imgName}`} alt=""/>{name}</a>
                    </td>
                    <td>
                        <p className="checkoutItem__price">$ {price}</p>
                    </td>
                    <td className='checkoutItem__quantity'>
                    
                        <p><RemoveIcon onClick={handleRemove}/></p>
                        <input type="text" value={count} onChange={e=> setCount(e.target.value)}/>
                        <p id='add'><AddIcon onClick={handleAdd}/></p>
                    </td>
                    <td>
                        $ {priceTotal}
                    </td>
                    <td>
                        <CloseIcon onClick={handleRemoveItem}/> 
                    </td>
                </tr>
                {/* ))} */}

            </>
           
    )
}
CheckoutItem.propTypes= ({
    auth: PropTypes.object.isRequired,
    basket: PropTypes.object.isRequired,
    removeQuantity: PropTypes.func.isRequired,
    putQuantity: PropTypes.func.isRequired,
    getPostDB: PropTypes.func.isRequired,
})
const mapStateToProps = state =>({
    auth: state.auth,
    basket: state.basket
})
export default connect(mapStateToProps,{getPostDB,putQuantity,removeQuantity})(CheckoutItem);
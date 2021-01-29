import React from 'react'
import CloseIcon from '@material-ui/icons/Close';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import CheckIcon from '@material-ui/icons/Check';

const handleAdd = async(e) =>{ 
    e.preventDefault();
    console.log('close');
}


const handleRemove = (e) =>{
    e.preventDefault();
    
    console.log('close');
}
const handleRemoveItem = () =>{
    console.log('close');
}
const AccountNotiItem = () => {
    return (
        <>
            <tr>
                    <td>
                        {/* <p className='checkoutItem__id'>{item.id}</p> */}
                        <a href="#"><img className='checkoutItem__image' src='https://vn-test-11.slatic.net/p/7c9365befc1dcf3bce58882ad29ed8a2.jpg_200x200Q100.jpg_.webp' alt=""/>sp demo</a>
                    </td>
                    <td>
                        <p className="checkoutItem__price">Da nhan hang</p>
                    </td>
                    <td>
                        <CheckIcon onClick={handleRemoveItem}/> 
                    </td>
                    <td>
                        <CloseIcon onClick={handleRemoveItem}/> 
                    </td>
                </tr>
        </>
    )
}

export default AccountNotiItem

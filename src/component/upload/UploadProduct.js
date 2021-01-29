import React from 'react'
import FormData from 'form-data'
import PropTypes from 'prop-types'
import {connect } from 'react-redux'
import { createPost } from '../../actions/post'
import { getPostDB } from '../../actions/post'
import { useState } from 'react'
import { Input } from '@material-ui/core'
import './UploadProduct.css'

const UploadProduct = ({createPost}) => {
    
    const [formData,setFormData] = useState({
        idCategory:'seafood',
        name:'',
        price: '',
        quantity: '',
        sales: '',
        state: ''
    })
    const [image,setImage]= useState(null);
    const {idCategory,name,price,quantity,sales,state} = formData;
    const onChanges = (e) => 
        setFormData({...formData, [e.target.name]: e.target.value});

    const onChange = (e) => 
        setFormData({...formData, idCategory: e.target.value});
    const handleChange = (e) =>{
        if (e.target.files[0]) {
            setImage(e.target.files[0])
        }
    }
    const handleSubmit = async (e) =>{
        e.preventDefault()
        console.log(formData)
        if(image){
            const imgForm = new FormData();
            imgForm.append('file', image,image.name);
            console.log(imgForm);
            console.log(formData)
            await createPost(imgForm,formData);
        }else{
            alert('chon hinh anh product')
        }

        setFormData({
            idCategory:'seafood',
            name:'',
            price: '',
            quantity: '',
            sales: '',
            state: '',
        })
        setImage('')
    }
    return (
        <>
        <div className="upload">

            <form class="form" onSubmit={e=> handleSubmit(e)}>
            <select value={idCategory} onChange={(e)=> onChange(e)}>
                <option  value="meat">Meat</option>
                <option  value="seafood">seafood</option>
                <option  value="vegetables">Vegetables</option>
                {/* <option value="mango">Mango</option> */}
          </select>
            {/* <input type="text"
                className='messageSender__input'
                placeholder= 'loai sp'
                name="idCategory"
                value={idCategory}
                onChange={e => onChanges(e)}
            /> */}
            <input type="text"
                className='messageSender__input'
                placeholder= 'product name'
                name="name"
                value={name}
                onChange={e => onChanges(e)}
            />
            <input type="text"
                className='messageSender__input'
                placeholder= 'price'
                name= 'price'
                value={price}
                onChange={e => onChanges(e)}
            />
            <input type="text"
                className='messageSender__input'
                placeholder= 'quantity'
                name= 'quantity'
                value={quantity}
                onChange={e => onChanges(e)}
            />
            <input type="text"
                className='messageSender__input'
                placeholder= 'sales'
                name= 'sales'
                value={sales}
                onChange={e => onChanges(e)}
            />
            <input type="text"
                className='messageSender__input'
                placeholder= 'trang thai'
                name='state'
                value={state}
                onChange={e => onChanges(e)}
            />
            <Input type='file' className='messageSender__file'
            onChange={handleChange}/>
            <input type='submit' value="Post"/>
            </form>
        </div>
        </>
    )
}
UploadProduct.propTypes = {
    createPost : PropTypes.func.isRequired,
    getPostDB : PropTypes.func.isRequired,
    post: PropTypes.object.isRequired,
    sockets: PropTypes.object.isRequired,
}
const mapStateToProps = state =>({
    post: state.post,
    sockets: state.sockets
})

export default connect(mapStateToProps, {createPost,getPostDB})(UploadProduct)

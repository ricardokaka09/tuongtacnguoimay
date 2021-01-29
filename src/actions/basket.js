
import axios from '../axios/axios'
import {CREATE_PRODUCT,GET_PRODUCT,GET_POST_USER,
     CREATE_POST, GET_POST,POST_ERROR,UPDATE_COMMENT,
     UPDATE_LIKES,DELETE_POST, GET_PRODUCT_ITEM, ADD_BASKET,
        GET_BASKET,
        PUT_BASKET
    } from './types'



export const createBasket = ({_id,name,imgName,price,soluong}) => async dispatch => {
    try {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const body = JSON.stringify({_id,name,imgName,price,soluong})
        const res = await axios.post('/api/basket/upload/basket',body,config)
        if (res) {
            dispatch({
                type: ADD_BASKET,
                payload: res.data
            })
        }
            getBasket()
            alert('upload xong')
    
    } catch (err) {
        alert('ko upload dc')
        // dispatch({
        //     type: POST_ERROR,
        //     payload: { msg: err.response.statusText, status: err.response.status }
        // })
    }
}

export const getBasket = ()=> async dispatch =>{
    try {
        const res = await axios.get('/api/basket/retrieve/basket')
        dispatch({
            type: GET_BASKET,
            payload: res.data
        })
    } catch (err) {
        // dispatch({
        //         type: POST_ERROR,
        //         payload: { msg: err.response.statusText, status: err.response.status }
        //     })
    }
    
    
}
export const getPostDB = ()=> async dispatch =>{
    try {
        const res = await axios.get('/api/product/retrieve/products')
        dispatch({
            type: GET_PRODUCT,
            payload: res.data
        })
    } catch (err) {
        console.log(err);
        // dispatch({
        //         type: POST_ERROR,
        //         payload: { msg: err.response.statusText, status: err.response.status }
        //     })
    }
    
    
}
export const getProductItem = (id)=> async dispatch =>{
    try {
  
        const res = await axios.get(`/api/product/retrieve/product/${id}`);
            dispatch({
                type: GET_PRODUCT_ITEM,
                payload: res.data
            })
    } catch (err) {
        console.log(err);

    }   
}
export const putQuantity = (idProduct)=> async dispatch =>{
    try {
        const config = {
            headers: {
                'Content-Type': 'application/json',
            }
        }
        const body = JSON.stringify({idProduct});
        console.log(body)
        const res = await axios.put('/api/basket/quantity/',body, config);
        console.log(res.data)
            dispatch({
                type: PUT_BASKET,
                payload: {idProduct, quantity: res.data.quantity}
            })
    } catch (err) {
        console.log(err);
        // dispatch({
        //         type: POST_ERROR,
        //         payload: { msg: err.response.statusText, status: err.response.status }
        //     })
    }
    
    
}
export const removeQuantity = (idProduct)=> async dispatch =>{
    try {
        const config = {
            headers: {
                'Content-Type': 'application/json',
            }
        }
        const body = JSON.stringify({idProduct});
        console.log(body)
        const res = await axios.put('/api/basket/quantity/remove',body, config);
        console.log(res.data)
            dispatch({
                type: PUT_BASKET,
                payload: {idProduct, quantity: res.data.quantity}
            })
    } catch (err) {
        console.log(err);
        // dispatch({
        //         type: POST_ERROR,
        //         payload: { msg: err.response.statusText, status: err.response.status }
        //     })
    }
    
    
}

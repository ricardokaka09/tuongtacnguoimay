import { resolve } from 'path'
import axios from '../axios/axios'
import { setAlert  } from './alert'
import {CREATE_PRODUCT,GET_PRODUCT,GET_POST_USER, CREATE_POST, GET_POST,POST_ERROR,UPDATE_COMMENT,UPDATE_LIKES,DELETE_POST, GET_PRODUCT_ITEM} from './types'

export const createPost = (imgForm,formData) => async dispatch => {
    try {
        const config = {
            headers: {
                'accept': 'application/json',
                'Accept-Language': 'en-US.en;q=0.8',
                'Content-Type': `multipart/form-data; boundary=${imgForm._boundary} `
            }
        }
        const config__2 = {
            headers: {
                'Content-Type': 'application/json',
            }
        }
        
        
        const res = await axios.post('/api/product/upload/image',imgForm,config)
            console.log(res.data);
        const body = JSON.stringify({...formData,imgName: res.data.filename})
        console.log(body);
        //     res.data?
        //     ( 
         const resUpload = await axios.post('/api/product/upload/product',body,config__2)
         console.log(resUpload.data);
                // .then((res)=>{
                //     console.log(res.data);
                //     dispatch({
                //         type: CREATE_PRODUCT,
                //         payload: res.data
                //     })
                // })
        //     ):
        //     (
        //         await axios.post('/api/posts/upload/post',({
        //             description: input,
        //             timestamp: Date.now()
        //         }))
        //         .then((res)=>{
        //             console.log(res.data);
        //             dispatch({
        //                 type: CREATE_POST,
        //                 payload: res.data
        //             })
        //         })
                
        //     )
            getPostDB()
            alert('upload thanh cong')
    
    } catch (err) {
        alert({mess: 'ko upload dc'})
        // dispatch({
        //     type: POST_ERROR,
        //     payload: { msg: err.response.statusText, status: err.response.status }
        // })
    }
}

export const delPost = (id)=> async dispatch =>{
    try {
        const res = await axios.delete(`/api/posts/del/${id}`)
        dispatch({
            type: DELETE_POST,
            payload: id
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
        // console.log('hung dn');
        const res = await axios.get(`/api/product/retrieve/product/${id}`);
            dispatch({
                type: GET_PRODUCT_ITEM,
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
export const putLikePost = (id) =>async dispatch => {
    try {
        const res = await axios.put(`/api/posts/like/${id}`)
        console.log(res.data);
        dispatch({
            type: UPDATE_LIKES,
            payload: {id,likes: res.data}
        })
    } catch (err) {
            // dispatch({
            //     type: POST_ERROR,
            //     payload: { msg: err.response.statusText, status: err.response.status }
            // })
    }
}
export const putCommentPost = (id,comment) =>async dispatch => {
    try {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        const body = JSON.stringify({comment})
        console.log(body);
        const res = await axios.put(`/api/posts/comment/${id}`,body,config)
        console.log(res.data);
        dispatch({
            type: UPDATE_COMMENT,
            payload: {id,comments: res.data}
        })
    } catch (err) {
        console.log(err);
            // dispatch({
            //     type: POST_ERROR,
            //     payload: { msg: err.response.statusText, status: err.response.status }
            // })
    }
}
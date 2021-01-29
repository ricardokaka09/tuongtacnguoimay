import axios from '../axios/axios'
import { setAlert  } from './alert'
import { GET_PROFILE,PROFILE_ERROR } from './types'

export const getCurrentProfile = () => async dispatch => {
    try {
        const res = await axios.get('/api/auth/me')
        dispatch({
            type: GET_PROFILE,
            payload: res.data,
        })
    } catch (err) {
        dispatch({
            type: PROFILE_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        })
    }
}

// create or update Profile

export const createProfile = (formData,history, edit=false) => async dispatch => {
    try {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        // const body = JSON.stringify(formData)
        const res = await axios.post('/api/profile',formData,config)
        dispatch({
            type: GET_PROFILE,
            payload: res.data
        })
        dispatch(setAlert(edit? 'Profile Updated': 'Profile Created'))
        if (!edit) {
            history.push('/dashboard')
        }
    } catch (err) {
        dispatch({
            type: PROFILE_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        })
    }
}
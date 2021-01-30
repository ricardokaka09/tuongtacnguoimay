import {  REGISTER_SUCCESS,REGISTER_FAIL,AUTH_ERROR,AUTH_LOADED,LOGIN_FAIL,LOGIN_SUCCESS, LOGOUT, FRIEND,ACCEPT__FRIEND } from '../actions/types.js'
const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    loading:true,
    user: null
}

export default function(state = initialState,action){
    const {type,payload} = action
    switch(type){
        case AUTH_LOADED:
            return {
                ...state,
                isAuthenticated: true,
                loading: false,
                user: payload
            }
        case REGISTER_SUCCESS:
        case LOGIN_SUCCESS:
            localStorage.setItem('token', payload.token)
            return {
                ...state,
                ...payload,
                isAuthenticated: true,
                loading: false
            }
        case FRIEND:
            return {
                ...state,
                user: state.user.friends.map(friend => friend.user === payload.idUser? {...friend, friends: payload.friends }: {friends:friend}),
                isAuthenticated: true,
                loading: false
            }
        case ACCEPT__FRIEND:
            return {
                ...state,
                user: {...state.user,friendList: payload.friendList,friends: state.friends.filter(friend => friend.user !== payload.idUser)},
                isAuthenticated: true,
                loading: false
            }
        case REGISTER_FAIL:
        case AUTH_ERROR:
        case LOGIN_FAIL:
        case LOGOUT:
            localStorage.removeItem('token')
            return {
                ...state,
                token: null,
                isAuthenticated: false,
                loading: false,
                user: null
            }
        default :
            return state;
    }
}
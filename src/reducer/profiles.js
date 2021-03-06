import { PROFILE_ERROR,GET_PROFILE,CLEAR_PROFILE } from "../actions/types";

const initialState = {
    profile : null,
    profiles: [],
    repos: [],
    loading: true,
    error: {}
}

export default function(state = initialState,action){
    const {type,payload} = action
    switch (type) {
        case GET_PROFILE:
            return {
                ...state,
                profile: payload
            }
        case PROFILE_ERROR:
            return {
                ...state,
                error: payload,
                loading: false
            }
        case CLEAR_PROFILE:
            return{
                profile: null,
                repos: [],
                loading: false,
                error: {}
            }
        default:
            return state
    }
}
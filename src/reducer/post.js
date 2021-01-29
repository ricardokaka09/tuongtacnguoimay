import { GET_POST_USER, GET_POST,POST_ERROR,UPDATE_LIKES,UPDATE_COMMENT ,CREATE_POST, DELETE_POST} from '../actions/types.js'
const initialState = {
    posts: [],
    postUser:[],
    post: null,
    loading:true,
    error: {}
}

export default function(state = initialState,action){
    const {type,payload} = action
    switch(type){
        case CREATE_POST:
            return {
                ...state,
                posts: [payload,...state.posts],
                loading: false,
            }
        case DELETE_POST:
            return {
                ...state,
                posts: state.posts.filter(post => post._id !== payload),
                postUser: state.postUser.filter(post => post._id !== payload),
                loading: false,
            }
        case GET_POST:
            return {
                ...state,
                posts: payload,
                loading: false,
            }
        case GET_POST_USER:
            return {
                ...state,
                postUser: payload,
                loading: false,
            }
        case POST_ERROR:
            return {
                ...state,
                error: payload,
                loading: false
            }
        case UPDATE_LIKES:
            return {
                ...state,
                posts: state.posts.map(post => post._id === payload.id? {...post, likes: payload.likes }: post),
                postUser: state.postUser.map(post => post._id === payload.id? {...post, likes: payload.likes }: post),
                loading: false
            }
        case UPDATE_COMMENT:
            return {
                ...state,
                posts: state.posts.map(post => post._id === payload.id? {...post, comments: payload.comments }: post),
                postUser: state.postUser.map(post => post._id === payload.id? {...post, comments: payload.comments }: post),
                loading: false
            }
        default :
            return state;
    }
}
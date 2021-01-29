import { ADD_BASKET, CREATE_PRODUCT,GET_BASKET,GET_PRODUCT, GET_PRODUCT_ITEM} from '../actions/types.js'
const initialState = {
    products: [],
    baskets:[],
    productItem: {},
    loading:true,
    error: {}
}

export default function(state = initialState,action){
    const {type,payload} = action
    switch(type){
        case CREATE_PRODUCT:
            return {
                ...state,
                products: [...state.products,payload],
                loading: false,
            }
        case GET_PRODUCT:
            return {
                ...state,
                products: payload,
                loading: false,
            }
        case GET_PRODUCT_ITEM:
            return {
                ...state,
                productItem: payload,
                loading: false,
            }
        case ADD_BASKET:
            return {
                ...state,
                baskets: [...state.baskets,payload],
                loading: false,
            }
        case GET_BASKET:
            return {
                ...state,
                baskets: payload,
                loading: false,
            }
        default :
            return state;
    }
}
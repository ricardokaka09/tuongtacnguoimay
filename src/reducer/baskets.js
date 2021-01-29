import { PUT_BASKET } from "../actions/types";

const initialState = {
    baskets: [],
 }
export const getBasketTotal = (basket)=> basket?.reduce((amount ,item) => item.price*item.quantity + amount, 0);
export const getTotalItem = (price,index) => price*index;
 export default function(state = initialState,action){
     const {type,payload} = action
     switch(type){
         case "GET_BASKET":
             return {
                 ...state,
                 baskets: payload
             }
         case "ADD_BASKET":
             return {
                 ...state,
                baskets: [...state.baskets,payload]
             }
         case PUT_BASKET:
             return {
                 ...state,
                baskets: state.baskets.map(basket=>basket.idProduct == payload.idProduct? {...basket,quantity : payload.quantity}: basket)
             }
         default :
             return state;
     }
 }
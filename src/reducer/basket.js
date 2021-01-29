// const initialState = {
//    baskets: [],
// }

// export default function(state = initialState,action){
//     const {type,payload} = action
//     switch(type){
//         case "GET_BASKET":
//             return {
//                 ...state,
//                 baskets: payload
//             }
//         case "ADD_BASKET":
//             return {
//                 ...state,
//                baskets: [...state.baskets,payload]
//             }
//         default :
//             return state;
//     }
// }
export const initialState = {
    basket: [],
    user: null
}
//reduce : tính từng phần tử trong mang basket từ trái sang phải
export const getBasketTotal = (basket)=> basket?.reduce((amount ,item) => item.price*item.quantity + amount, 0);
export const getTotalItem = (price,index) => price*index;
 const reducer = (state,action) =>{
    switch (action.type) {
        case 'SET_USER':
            return{
                ...state,
                user: action.user
            }
        
        case 'ADD_BASKET':
            return {
                ...state,
                basket: [...state.basket,action.basket]
            }
        case 'SET_PRICE_BASKET':
            const index1 = state.basket.findIndex(basketItem=>(
                basketItem.id === action.id
            ));
            let newBasket1 = [...state.basket]
            if (index1>=0) {
                newBasket1[index1].quantity = action.quantity
                // newBasket1[index1].push(action.quantity)
                console.log(newBasket1[index1].quantity)
            }
            return{
                ...state,
                basket : newBasket1
            }
            
        case 'REMOVE_BASKET':
            const index = state.basket.findIndex(basketItem=>(
                basketItem.id === action.id
                ));
                // console.log(action.id)
            // console.log(index)
            let newBasket =[...state.basket];
            if(index>=0){
                newBasket.splice(index,1)
            }else{
                console.log('khong the xoa')
            }
            return {
                ...state,
                basket: newBasket,

            }
        default:
            return state;
    }
}

export default reducer;

const initialState ={
    socket: null,
}
export default function(state=initialState,action){
    const {type,payload} = action;
    switch (type) {
        case "AJAX":
            return{
                ...state,
                socket: payload
            }
        default:
            return state;
    }
}
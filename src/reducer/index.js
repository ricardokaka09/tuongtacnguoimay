import { combineReducers  } from "redux"
import alert from './alert'
import auth from './auth'
import profile from './profiles'
import post from './post'
import sockets from './socketIo'
import product from './product'
import baskets from './baskets'
export default combineReducers({
    alert,
    auth,
    profile,
    post,
    sockets,
    product,
    baskets
});
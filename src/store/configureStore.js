import {createStore,combineReducers,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import customerReducer from '../reducers/customerReducer'
import userReducer from '../reducers/usersReducer'
const configureStore=()=>{
    const store=createStore(combineReducers({
        customer:customerReducer,
        users:userReducer
    }),applyMiddleware(thunk))
    return store
}
export default configureStore
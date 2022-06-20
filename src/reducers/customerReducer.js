const initialCustomerState=[ ]

const customerReducer=(state=initialCustomerState,action)=>{
    switch(action.type){
        case 'GET_CUSTOMERS': {
            return [...state, action.payload]
        }
        case 'ADD_CUSTOMER': {
            
            return [...state,action.payload]
        }
        default:{
            return state
        }
    }
}
export default customerReducer
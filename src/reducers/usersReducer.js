const initialUserState=[]

const userReducer=((state=initialUserState,action)=>{
    switch(action.type){
        case 'GET_USERS':{
            return action.payload
        }
        default:
            return [...state]
    }
})

export default userReducer
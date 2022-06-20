import axios from '../selectors/axios'
export const startGettingCustomers=()=>{
    return (dispatch)=>{
        axios.get('/customers',{
            headers:{
            Authorization: `Bearer ${localStorage.getItem('Authorization')}`
            }
        })

            .then((response)=>{
                console.log(response)
                const result=response.data
                //console.log(result)
                if(result.hasOwnProperty('errors')){
                    alert(result.message)
                }else{
                    dispatch(getCustomers(result))
                }

            })
            .catch((err)=>{
                alert(err.message)
            })
        
    }
}

export const getCustomers=(customers)=>{
    return {
        type: 'GET_CUSTOMERS',
        payload: customers
    }
}

export const startAddingCustomer=(formData)=>{
    return (dispatch)=>{
        axios.post('/customers',formData,{ 
            headers:{
                Authorization: `Bearer ${localStorage.getItem('Authorization')}`
                }
        })
        .then((response)=>{
            const result=response.data
            console.log(result,"result")
            dispatch(addCustomer(result))
        })
    }
}

export const addCustomer=(result)=>{
    return {
        type:'ADD_CUSTOMER',
        payload:result
    }
}

export const startDeletingCustomer=(id)=>{
    console.log(id,"promise")
    return (dispatch)=>{
        axios.delete(`/customers/${id}`,{
            headers:{
                Authorization: `Bearer ${localStorage.getItem('Authorization')}`
                }
        })
        .then((response)=>{
            console.log(response)
            const result=response.data
            console.log(result)
            if(result.hasOwnProperty('errors')){
                alert(result.message)
            }else{
                dispatch(removeCustomer(result._id))
            }

        })
        .catch((err)=>{
            alert(err.message)
        })
    
    }
}

export const removeCustomer=(id)=>{
    return {
        type:"REMOVE_CUSTOMER",
        payload:id
    }
}
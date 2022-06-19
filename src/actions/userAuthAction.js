import axios from "../selectors/axios"

export const registerUser=(data)=>{
    return (dispatch)=>{
        axios.post('/users/register',data)
            .then((response)=>{
                const result=response.data
                if(result.hasOwnProperty('errors')){
                    alert(result.message)
                }else{
                    alert('account registered successfully.')
                }
            })
            .catch((err)=>{
                alert(err.message)
            })
    }
}

export const loginUser=(data,successLogin)=>{
    return (dispatch)=>{
        axios.post('users/login',data)
        .then((response)=>{
            const result=response.data
            if(result.hasOwnProperty('errors')){
                alert(result.errors)
            }
            else{
                alert('logged in successfully')
                successLogin()
                localStorage.setItem("Authorization",response.data.token)

            }
        })
        .catch((err)=>{
            alert(err.message)
        })
    }
}

export const startgettingUser=(Authorization)=>{
    return (dispatch)=>{
        axios.get('users/account', { headers : {
            Authorization : `Bearer ${Authorization}`
            }
        } )
            .then((response)=>{
                const result=response.data
                if(result.hasOwnProperty('errors')){
                    alert(result.errors)
                }else{
                    // console.log(result)
                    dispatch(getUsers(result))
                }
            })
    }
}

export const getUsers=(result)=>{
    return {
        type:'GET_USERS',
        payload : result
    }
}
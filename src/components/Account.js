import React,{useEffect} from "react";
import { getUsers, startgettingUser } from "../actions/userAuthAction";
import {useDispatch,useSelector} from 'react-redux'

const Account=(props)=>{

    const dispatch=useDispatch()
    // useEffect(()=>{
    // dispatch(getUsers())
    // },[])
    const users=useSelector((state)=>{
        return state.users
    })

    const storedToken = localStorage.getItem('Authorization')

    dispatch(startgettingUser(storedToken))

    // console.log('Account',user)
    return (
        <div>
            <h1>User Account</h1>
            {/* { users.map(e => {
                return <h1> {e.userName} </h1>
            })} */}

            {users.username} <br/>
            {users.businessName} <br/>
            {users.address}
        </div>
    )
}

export default Account
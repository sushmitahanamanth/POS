// import React from "react";
// import {Formik, Form} from 'formik'
// import TextField from "./TextField";
// import * as Yup from 'yup'
// const Login=(props)=>{
//     const validate=Yup.object({
//         username:Yup.string()
//             .required("Required"),
//         email:Yup.string()
//             .email("email is invalid")
//             .required("Required"),
//         password:Yup.string()
//             .required("Required")
//     })
//     return (
//         <Formik
//         initialValues={{
//             username:'',
//             email:'',
//             password:'',
    
//     }}
//         >
//             {
//                 formik=>(
//                     <div>
//                         <h1>Login</h1>
//                         {console.log(formik.values)}
//                         <Form>
//                             <TextField label='username' name='username' type='text'/>
//                             <TextField label='email' name='email' type='email'/>
//                             <TextField label='password' name='password' type='password'/>

//                             <button type='submit'>Register</button>
//                         </Form>
//                     </div>
//                 )
//             }
//         </Formik>

//     )
// }
// export default Login

import React,{useState} from "react";
import { loginUser } from "../actions/userAuthAction";
import { useDispatch } from "react-redux";
const Login=(props)=>{
    const {handleAuth}=props
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const dispatch=useDispatch()
    const handleSubmit=(e)=>{
        e.preventDefault()
        const formData={
            email:email,
            password:password
        }
        dispatch(loginUser(formData,successLogin))

    }

    const successLogin=()=>{
        props.history.push('/')
        handleAuth()
    }
    const changeHandle=(e)=>{
        if(e.target.name==='email'){
            setEmail(e.target.value)
        }else if(e.target.name==='password'){
            setPassword(e.target.value)
        }
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Email</label>
                <input type='text' value={email} onChange={changeHandle} name='email'/>

                <label>password</label>
                <input type='text' value={password} onChange={changeHandle} name='password'/>

                <input type='submit' value='Login'/>
            </form>
        </div>
    )
}
export default Login
// import React from "react";
// import {Formik, Form} from 'formik'
// import TextField from "./TextField";
// import * as Yup from 'yup'
// import axios from "../selectors/axios";

// const Register=(props)=>{
//     const validate=Yup.object({
//         username:Yup.string()
//         .max(15,'must be 15 or less')
//             .required("Required"),
//         email:Yup.string()
//             .email("email is invalid")
//             .required("Required"),
//         password:Yup.string()
//             .min(6,'password must be atleast 6 character')
//             .matches(
//                 "^(?=.*[A-Za-z])(?=.*d)(?=.*[@$!%*#?&])[A-Za-zd@$!%*#?&]{8,}$",
//                 "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
//               )
//             .required("Required"),
//         businessName:Yup.string()
//             .max(15,'business can be 15 or less than 15 characters'),

//         address:Yup.string()
//             .max(15,'business can be 15 or less than 15 characters'),
//     })
//     return (
//         <Formik
//         initialValues={{
//             username:'',
//             email:'',
//             password:'',
//             businessName:'',
//             address:''
//     }}
//     validationSchema={validate}
//     onSubmit={values=>{
//         console.log(values)
//     }}
//         >
//             {
//                 formik=>(
//                     <div>
//                         <h1>Register</h1>
//                         <Form>
//                             <TextField label='username' name='username' type='text'/>
//                             <TextField label='email' name='email' type='email'/>
//                             <TextField label='password' name='password' type='password'/>
//                             <TextField label='businessName' name='businessName' type='text'/>
//                             <TextField label='address' name='address' type='text'/>

//                             <button type='submit'>Register</button>
//                         </Form>
//                     </div>
//                 )
//             }
//         </Formik>

//     )
// }
// export default Register


import React,{useState} from "react";
import axios from '../selectors/axios'
import { registerUser } from "../actions/userAuthAction";
import {useDispatch } from "react-redux";

const Register=(props)=>{
    const [username,setUsername]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [businessName,setBusinessName]=useState('')
    const [address,setAddress]=useState('')
    const dispatch=useDispatch()

    const handleSubmit=(e)=>{
        e.preventDefault()
        const formData={
            username:username,
            email:email,
            password:password,
            businessName:businessName,
            address:address
        }

        dispatch(registerUser(formData))
        props.history.push('/login')
    }

    const handleChange=(e)=>{
        if(e.target.name==='username'){
            setUsername(e.target.value)
        }else if(e.target.name==='email'){
            setEmail(e.target.value)
        }else if(e.target.name==='password'){
            setPassword(e.target.value)
        }else if(e.target.name==='businessName'){
            setBusinessName(e.target.value)
        }else if(e.target.name==='address'){
            setAddress(e.target.value)
        }

    }
    return (
        <div>
            <h1>Register with us</h1>
            <form onSubmit={handleSubmit}>
                <label>Username</label> <br/>
                <input 
                type='text'
                value={username}
                name='username'
                placeholder="Enter Username"
                onChange={handleChange}/> <br/>

                <label>Email</label> <br/>
                <input 
                type='text'
                value={email}
                name='email'
                placeholder="Enter mail"
                onChange={handleChange} /> <br/>

                <label>Password</label> <br/>
                <input 
                type='password'
                value={password}
                name='password'
                placeholder="Enter password"
                onChange={handleChange}
                /> <br/>

                <label>Businessname</label> <br/>
                <input 
                type='text'
                value={businessName}
                name='businessName'
                placeholder="Enter a business name"
                onChange={handleChange}
                /> <br/>

                <label>Address</label> <br/>
                <input 
                type='text'
                value={address}
                name='address'
                placeholder="Enter a address"
                onChange={handleChange}
                /> <br/>   

                <input type='submit' value='register'/>
            </form>
        </div>
    )
}
export default Register
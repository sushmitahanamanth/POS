import React,{useState} from 'react'
import { startAddingCustomer } from '../../actions/customerAction'
import { useDispatch } from 'react-redux'
const AddCustomer=()=>{
    const dispatch=useDispatch()
    const [name,setName]=useState('')
    const [mobile,setMobile]=useState('')
    const [email,setEmail]=useState('')
    
    const handleChange=(e)=>{
        if(e.target.name=='name'){
            setName(e.target.value)
        }else if(e.target.name=='mobile'){
            setMobile(e.target.value)
        }else if(e.target.name=='email'){
            setEmail(e.target.value)
        }
    }
    const handleSubmit=(e)=>{
        e.preventDefault()

        const formData={
            name:name,
            mobile:mobile,
            email:email
        }
        console.log(formData)
        dispatch(startAddingCustomer(formData))
        setName("")
        setMobile("")
        setEmail("")
    }
    return (
        <div>
            <h2>Add Customer</h2>
            <form onSubmit={handleSubmit}>
                <label>Name</label> <br/>
                <input type='text' name='name' value={name} onChange={handleChange}/> <br/>

                <label>Mobile</label> <br/>
                <input type='text' name='mobile' value={mobile} onChange={handleChange}/> <br/>

                <label>Email</label><br/>
                <input type='text' name='email' value={email} onChange={handleChange}/> <br/>

                <input type='submit' name='save'/>
            </form>
        </div>
    )
}
export default AddCustomer
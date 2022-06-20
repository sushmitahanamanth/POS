import react,{useState} from 'react'
import { useDispatch } from 'react-redux'
import { startDeletingCustomer } from '../../actions/customerAction'
const CustomerItem=(props)=>{

    const {customer}=props
    const [toggle,setToggle]=useState(false)

    const dispatch=useDispatch()

    const handleToggle=()=>{
        setToggle(!toggle)
    }
    
    const handleDelete=()=>{
        console.log(customer._id,"handleDelete")
        dispatch(startDeletingCustomer(customer._id))
    }
    return (
        <div>
            <b>{customer.name}</b>
            <p>{customer.mobile}</p>
            <p>{customer.email}</p>
            <button onClick={handleToggle}>Edit</button>
            <button onClick={handleDelete}>Delete</button>
        </div>
    )
}
export default CustomerItem
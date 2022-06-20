import React,{useEffect,useState} from "react";
import { useDispatch ,useSelector} from "react-redux";
import { startGettingCustomers } from "../../actions/customerAction";
import CustomerItem from "./CustomerItem";

const CustomersList=(props)=>{
   // const [search,setSearch]=useState('')
    const customers=useSelector((state)=>console.log(state,"consolelog"))
    console.log(customers)
   return (
        <div>
            <h2>Customers List</h2>

        </div>
    )
}
export default CustomersList
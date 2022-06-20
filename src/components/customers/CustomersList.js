import React,{useEffect,useState} from "react";
import { useDispatch ,useSelector} from "react-redux";
import { startGettingCustomers } from "../../actions/customerAction";
import CustomerItem from "./CustomerItem";

const CustomersList=(props)=>{
    const [search,setSearch]=useState('')
    const customers=useSelector((state)=>state.customer)
    //console.log(customers)

    const filteredCustomers=()=>{
        const result=customers.filter((ele)=>{
            //console.log(search)
            return ele.name.toLowerCase().includes(search)||ele.name.toUpperCase().includes(search)
        })
        return result
    }
    //console.log(filteredCustomers(),"filter")
    const handleChange=(e)=>{
        setSearch(e.target.value)
    }
   return (
        <div>
            <input type="text" value={search} onChange={handleChange}/>
            <h2>Customers List</h2>
            <ul>
            {
                search ?(
                filteredCustomers().length>0?(
                    filteredCustomers().map((ele)=>{
                        return <CustomerItem  key={ele._id} customer={ele}/>
                    })
                ):(
                    <p>No customers Found</p>
                )):(
                    customers.map((ele)=>{
                        return <CustomerItem  key={ele._id} customer={ele}/>
                    })
                )
            }
            </ul>
        </div>
    )
}
export default CustomersList
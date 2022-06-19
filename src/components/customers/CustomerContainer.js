import React from "react";

import AddCustomer from "./AddCustomer";
import CustomersList from "./CustomersList";

const CustomerContainer=()=>{

    return(
        <div>
            <h2>customers</h2>
            <CustomersList/>
            <AddCustomer/>
            
        </div>
    )
}
export default CustomerContainer
const CustomerItem=(props)=>{
    const {customer}=props
    return (
        <div>
            <h3>{customer.name}</h3>
        </div>
    )
}
export default CustomerItem
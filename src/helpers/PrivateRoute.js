import { Route, Redirect } from "react-router-dom"

//Higher order component
//the component should have first letter as capital hence taking alias for component which is a prop in PrivateRoute in navbar
const PrivateRoute=({component:Component, ...rest})=>{
    return(
        <Route
         {...rest}
         render={(props)=>{
             return (
                localStorage.getItem('Authorization') ? <Component {...props}/>
                : <Redirect to={{pathname:'/login'}}/>
                )
         }}
        />
    )
}
export default PrivateRoute
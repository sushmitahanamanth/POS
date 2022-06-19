import React from "react";
import { Link,Route, withRouter } from "react-router-dom";
import Login from "../components/Login";
import Register from "../components/Register";
import Home from "../components/Home";
import Account from "../components/Account";
import CustomerContainer from "../components/customers/CustomerContainer";
import PrivateRoute from "../helpers/PrivateRoute";

const Navbar=(props)=>{
    const {handleAuth, isUserLoggedIn}=props
    return (
        <div>
            <ul>
                <li><Link to='/' >Home</Link></li>
            {
              isUserLoggedIn ?(
                <div>
                  {/* <li><Link to='/account'>Account</Link></li>  */}
                  <li> <Link to='/account'>Account</Link></li>
                  <li><Link to='/customers'>Customers</Link></li>
                  <li><Link to='/' onClick={()=>{
                    localStorage.removeItem('Authorization')
                    alert('successfully logged out')
                    handleAuth()
                    props.history.push('/')
                }}>Logout</Link></li>
                </div>
              ):(
                  <div>
                   <li> <Link to='/login'>Login</Link></li>
                   <li><Link to='/register'>Register</Link></li>
                  </div>
              )
            }
            </ul>
 

        <Route path='/' component={Home} exact/>   
        <Route path='/register' component={Register} exact />
        <Route path='/login' render={(props)=>{
          return <Login {...props} 
          handleAuth={handleAuth}
          exact/>
        }} />
   
        {/* <Route path="/account" component={Account} /> */}

    <PrivateRoute path='/account' component={Account} />
    <PrivateRoute path='/customers' component={CustomerContainer}/>
        </div>

    )
}
export default withRouter(Navbar)
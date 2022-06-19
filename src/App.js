import react,{useEffect, useState} from 'react'
import './App.css';
import Navbar from './navbar/Navbar';
function App() {
  const [isUserLoggedIn,setIsUserLoggedIn]=useState(false)
  const handleAuth=()=>{
    setIsUserLoggedIn(!isUserLoggedIn)
  }
  useEffect(()=>{
    if(localStorage.getItem('Authorization')){
      handleAuth()
    }
  },[])
  return (
    <div>
      <Navbar handleAuth={handleAuth} isUserLoggedIn={isUserLoggedIn}/>
    </div>

  );
}

export default App;

import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';


const useAuth=()=>{
    const auth=localStorage.getItem('detail')
  if(auth){
      return true
  }
  else{
      return false
  }
}

const PrivateRoute = () => {
    
     // determine if authorized, from context or however you're doing it
   // alert(auth.isAuthenticated())
   
    return useAuth() ? <Outlet /> : <Navigate to="/login" />;
}
export default PrivateRoute
import { Navigate } from "react-router";

function PrivateRoute({component:RouteComponent}) {
    
    const checkToken=()=>{

        let token=localStorage.getItem('token');
         if(token===null)
         {
             token= false
         } 
         else{  
             token= true
         }
        
         return token
    }
  
    if (checkToken()) {
      return <RouteComponent  />;
    }
    else{
        return <Navigate to="/login"/>
    }
  
    
  }
  
 
export default PrivateRoute;
import { useState } from "react/cjs/react.development";
import { user_Login } from "../../Network/CustomerRequests";
import { useNavigate } from "react-router-dom";
const Login = () => {

   const navigation=useNavigate()
  const [username,setUsername]=useState()
  const [password,setPassword]=useState()

   const handleLogin=(e)=>{
     e.preventDefault() 
      user_Login('/login',{username}).then(function (response) {
        localStorage.setItem("token", response.data.token);
        navigation('/')
      })

   }

  return (
    <div className="container mt-5">
      <div className="d-flex justify-content-center">
        <div className="card">
          <div className="card-header bg-gray">
            <h4>Login</h4>
          </div>
          <div className="card-body">
            <form onSubmit={handleLogin}>
            <div className="row px-3">
              <div className="form-group">
                <label htmlFor >Username</label>
                <input
                  type="text"
                  onChange={(e)=>setUsername(e.target.value)}
                  className="form-control"
                  name
                  id
                  aria-describedby="helpId"
                  placeholder="Username"
                />
              </div>
            </div>
            <div className="row px-3">
              <div className="form-group">
                <label htmlFor >Password</label>
                <input
                  type="password"
                  onChange={(e)=>setPassword(e.target.value)}
                  className="form-control"
                  name
                  id
                  aria-describedby="helpId"
                  placeholder="password"
                />
              </div>
            </div>
            <div className="row px-3">
               <button type="submit" name="" id="" className="btn btn-success p-2 btn-sm btn-block">Login</button>
            </div>
            </form>
            
            </div>
          </div>
        </div>
      </div>
   
  );
};

export default Login;

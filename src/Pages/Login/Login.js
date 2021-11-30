const Login = () => {
  return (
    <div className="container mt-5">
      <div className="d-flex justify-content-center">
        <div className="card">
          <div className="card-header bg-gray">
            <h4>Login</h4>
          </div>
          <div className="card-body">
            <div className="row px-3">
              <div className="form-group">
                <label htmlFor >Username</label>
                <input
                  type="text"
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
                  className="form-control"
                  name
                  id
                  aria-describedby="helpId"
                  placeholder="password"
                />
              </div>
            </div>
            <div className="row px-3">
               <button type="button" name="" id="" className="btn btn-success p-2 btn-sm btn-block">Login</button>
            </div>
            </div>
          </div>
        </div>
      </div>
   
  );
};

export default Login;

import { useState } from "react/cjs/react.development";

const SingleInfo = ({user_id,user,current_balance}) => {

     const [deposite,setDeposite]=useState(0)
    const newBalance=(e)=>{
           setDeposite(e.target.value)
    }

  return (
    <>
      <div className="container mt-5">
      <div className="card">
        <div className="card-header bg-dark text-white">Welcome - {user}</div>
        <div className="card-body">
          <h4 className="card-title">Current Balance</h4>
          <p className="card-text">${current_balance}</p>
          <h4 className="card-title">New Deposite Amount</h4>
          <p className="card-text">${deposite}</p>
            <div className="container">
            <div className="row px-3">
               <div className="col-md-3 offset-md-9">
               <div className="form-group">
                <label htmlFor >Enter Amount</label>
                <input
                  type="number"
                  className="form-control"
                  name
                  id
                  aria-describedby="helpId"
                  placeholder="Deposite Amount"
                  onKeyUp={newBalance}
                />
              </div>
               </div>
            </div>
            </div>
         
        </div>
        <div className="card-footer text-muted">
            <div className="float-right">
                 <button type="button" className="btn btn-primary btn-sm">Back</button>  
            </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default SingleInfo;

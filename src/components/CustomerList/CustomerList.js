import { useEffect, useState } from "react";
import { getContacts } from "../../Network/CustomerRequests";
import TableDataTable from "../Datatable/TableDataTable";
import { useNavigate } from "react-router-dom";
import List from "./List";

const CustomerList = () => {
    

    const navigation=useNavigate();

    const [user,setUser]=useState();
    

    const handleDeposite=(event)=>{
         
        navigation("/Deposite/"+event.target.id);

    }
    const handleWithDraw=(event)=>{
        console.log(event.target.id);
    }

   useEffect(()=>{
       getContacts('/users').then((res)=>{
          setUser(res.data)
     })  
   },[])
    
   const columns = [
    {
        name: 'sno',
        selector: row => row.user_id,
        sortable: true,
        
    },
    {
        name: 'Username',
        selector: row => row.user,
        sortable: true,
        
    },
    {
        name: 'Balance',
        selector: row => row.current_balance,
        sortable: true,
       
    },
    {
        name: 'Action',
        selector: row => row.id,
        cell:(row)=>(<>
        <button onClick={handleDeposite} className="btn btn-sm btn-success" id={row.user_id}>Deposite</button>
        <div className="px-1"></div>
        <button onClick={handleWithDraw} className="btn btn-sm btn-danger" id={row.user_id}>Withdraw</button>
        </>)

        
    }
];
 
    return (

        <div className="container mt-5">
            <div className="card p-2">
                <div className="card-header">
                    <h2>SS Bank</h2>
                </div>
                <div className="card-body">
                    <TableDataTable columns={columns} data={user} />
                </div>
            </div>
            
        </div>
 );
}
 
export default CustomerList;
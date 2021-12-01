import { useEffect, useState } from "react";
import { useParams } from "react-router";
import SingleInfo from "../../components/SingleInfo/SingleInfo";
import { getContacts } from "../../Network/CustomerRequests";

const Deposite = () => {

    const {id}=useParams()
    const [info,setInfo]=useState();
    const [fetching,setFetching]=useState(true);
    useEffect(()=>{ 
      setTimeout(()=>{
        getContacts(`/users/${id}`).then(res=>{
          setInfo(res.data)
             setFetching(false)    
        }).catch((error)=>{
          console.log(error);
        })
      },0)
    },[id])
  
    return ( 
        <>
        {fetching && <>Loading.....</>}
        {info && <SingleInfo {...info} />}
        </>
     );
}
 
export default Deposite;
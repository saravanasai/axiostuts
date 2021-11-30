import { useParams } from "react-router";

const Deposite = () => {

    const {id}=useParams()
   
    return ( 
        <>
          Deposite Page For ID-{id}
        </>
     );
}
 
export default Deposite;
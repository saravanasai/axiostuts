import { useEffect, useState } from "react";
import { getContacts } from "../../Network/ContactRequests";
import List from "./List";

const ContactList = () => {
    
    const [user,setUser]=useState();

   useEffect(()=>{
       getContacts('/users').then((res)=>{
          setUser(res.data)
     })  
   },[])

    return (
        <div className="container">
            <div className="card card-default" id="card_contacts">
                <div id="contacts" className="panel-collapse collapse show" aria-expanded="true" style={{}}>
                <ul className="list-group pull-down" id="contact-list">
                    <List userInfo={ user} />
                </ul>
                </div>
            </div>
        </div>
 );
}
 
export default ContactList;
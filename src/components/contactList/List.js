const List = ({ userInfo}) => {

     const userList=(userInfo)=>
     {
         console.log(userInfo);
        userInfo.map(({id,name,username,email})=>{
            return (
               <li className="list-group-item" key={id}>
               <div className="row w-100">
                   <div className="col-12 col-sm-6 col-md-3 px-0">
                   <img src="https://picsum.photos/200" alt="Mike Anamendolla" className="rounded-circle mx-auto d-block img-fluid" />
                   </div>
                   <div className="col-12 col-sm-6 col-md-9 text-center text-sm-left">
                   <span className="fa fa-mobile fa-2x text-success float-right pulse" title="online now" />
                   <label className="name lead">{name}</label>
                   <br /> 
                   <span className="fa fa-map-marker fa-fw text-muted" data-toggle="tooltip" title data-original-title="5842 Hillcrest Rd" />
                   <span className="text-muted">{username}</span>
                   <br />
                   <span className="fa fa-phone fa-fw text-muted" data-toggle="tooltip" title data-original-title="(870) 288-4149" />
                   <span className="text-muted small">(870) 288-4149</span>
                   <br />
                   <span className="fa fa-envelope fa-fw text-muted" data-toggle="tooltip" data-original-title title />
                   <span className="text-muted small text-truncate">{email}</span>
                   </div>
               </div>
               </li>
            )
        })
     }
     

    return ( 
       <>
       {userList}
       </>
     );
}
 
export default List;
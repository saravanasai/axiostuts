import { Link } from "react-router-dom";

const NavBar = ({heading}) => {

      
    return ( 
    <nav className="navbar navbar-expand-sm navbar-dark" style={{backgroundColor: '#131214'}}>
      <Link className="navbar-brand" to="/"><h3>SS Bank</h3></Link>
      <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation" />
      <div className="collapse navbar-collapse" id="collapsibleNavId">
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
          <li className="nav-item">
            <Link className="nav-link" to="/login">Login</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/login">Logout</Link>
          </li> 
        </ul>
        <div className="">
        <h2 className="text-white" >{heading}</h2>
      </div>
      </div>   
    </nav>
     );
}
 
export default NavBar;
import { NavLink } from "react-router-dom"

const Navbar=()=>{
    return(
        <>

        <nav className="navbar navbar-expand-lg navbar-dark  " style={{backgroundColor:"rgba(19, 46, 71, 0.78)"}}>
            <div className="container">
                <NavLink to="/" className="navbar-brand fw-bold text-dark" style={{fontSize:"24px"}}>KNK Tour & Travels</NavLink>

                <button className="navbar-toggler-icon" type="button" data-bs-toggle="collapse" data-bs-target="#navmenu">
                    <span className="navbar-toggle-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navmenu">
                    <ul className="navbar-nav ms-auto fw-bold fs-5 " style={{gap:"10px"}}>
                        <li className="nav-item "><NavLink  to="/" classname="nav-link" style={{color:"white"}} >Home</NavLink></li>
                        <li className="nav-item"><NavLink to="/about" classname="nav-link"  style={{color:"white"}}>About</NavLink></li>
                        <li className="nav-item"><NavLink to="/destination" classname="nav-link"  style={{color:"white"}}>Destination</NavLink></li>
                        <li className="nav-item"><NavLink to="/tours" classname="nav-link"  style={{color:"white"}}>Tours</NavLink></li>
                         <li className="nav-item"><NavLink to="/contact" classname="nav-link"  style={{color:"white"}}>Contact</NavLink></li>

                       
                    </ul>
                </div>

            </div>
        </nav>

        
        
        </>
    )
}

export default Navbar
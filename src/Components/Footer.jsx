import {NavLink} from 'react-router-dom'
import Home from './Home';
import About from './About'
import Contact from './Contact';
import Destination from './Destination';
import Tours from './Tours';

const Footer = () => {
  return (
   <>

   <footer className="footer-bg text-light  pt-4 pb-2 " style={{backgroundColor:"rgba(17, 17, 19, 0.78)"}}>
    <div className="container">
      <div className="row">
        <div className="col-md-3">
          <h3 className="footer-title">Tour</h3>
          <p>A108 Paud Road,Kothrud</p>
          <p>Pune, IND</p>
          <p><strong>Phone :</strong> +91 722662351</p>
           <p><strong>Email :</strong> travel@gmail.com</p>
        </div>
        <div className="col-md-3">
          <h3 className="footer-title">Useful Links</h3>
          <ul className="footer-links">
            <li>
          <NavLink to="/" className={<Home/>}>Home</NavLink> </li>
          <li>
          <NavLink to="/about" className={<About/>}>About</NavLink> </li>
           <li>
          <NavLink to="/destination" className={<Destination/>}>Destination</NavLink> </li>
           <li>
          <NavLink to="/tours" className={<Tours/>}>Tours</NavLink> </li>
          <li>
          <NavLink to="/contact" className={<Contact/>}>Contact</NavLink> </li>
          </ul>
        </div>

        <div className="col-md-3">
          <h3 className="footer-title">Our Branches</h3>
          <ol className="footer-web"  type='1'>
            <li>Mumbai,Maharashtra</li>
            <li>Jaipur, Rajasthan</li>
            <li>Noida, Delhi</li>
            <li> Jabalpur, MP</li>
            <li> Ooty, TN</li>
            <li>Pune,Maharashtra</li>
          </ol>
        </div>
        <div className="col-md-3">
          <h3 className="footer-title">Follow Us</h3>
          <p>-- knktour&travels.com --</p>

          </div>
      </div>
    </div>
   </footer>
   </>
  );
};

export default Footer;
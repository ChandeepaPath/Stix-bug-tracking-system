import React from 'react';
// import { Navbar } from 'react-bootstrap';
// import { NavLink} from 'react-bootstrap';


function Footer(){
    return (
        <div className="mt-4">
        <div className="main-footer bg-dark pb-1 pt-4">
            <div className="footer-bottom">
            <div className="container">
                <div className="row">
                        {/* <Navbar>
                        <NavLink className="d-inline p-2 bg-dark text-white" to="/Help">Help</NavLink>
              <NavLink className="d-inline p-2 bg-dark text-white" to="/Aboutus"><i class="fa fa-fw fa-envelope"></i>  About Us </NavLink>
              
                        </Navbar> */}
                </div>
                {/* Foort Bottom */}
                <div classname="footer-bottom">
                <p className="text-xs-center text-white">
                    &copy;{new Date().getFullYear()} Strix -All Rights Reserved
                    </p>   
                </div>
            </div>
            </div>
            </div>
        </div>
    );
}

export default Footer;


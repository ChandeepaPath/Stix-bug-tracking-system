import React from 'react';
import {Button} from 'react-bootstrap';
import { BrowserRouter as Router,Link,} from 'react-router-dom';
//import DashboardBCL from './DashboardBCL';

function Buttons(){
    return(

        <div >
       <Router>
           <Link to="../Components/LoginForm/LoginForm">
           <Button className="btn btn-light" >Log in</Button>
           </Link>
           <Link to="/DashboardBCL">
           <Button className="btn btn-light" >BCL</Button>
           </Link>
           <Link to="">
           <Button className="btn btn-light">BMS</Button>
           </Link>
           <Link to="">
           <Button className="btn btn-light" >BSP</Button>
           </Link>
           <Link to="../Components/Report2/RGateway2">
           <Button className="btn btn-light" >Reporting</Button>
           </Link>
       </Router>
         </div>
    )
}

export default Buttons;
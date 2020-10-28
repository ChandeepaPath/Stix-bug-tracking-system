import React from 'react';
import {Row,Col,NavLink} from 'react-bootstrap';

function RSideBar() {
    
        return (
            <div>
                   <div className=" bg-dark">
                <Row>
             
                <Col  className=" text-white  ">
          
          <Row> 
              <NavLink className="d-inline p-2 bg-dark text-white" to="/"> LOGO</NavLink>
         </Row>
         <Row> 
             <NavLink className="d-inline p-2 bg-dark text-white" to="/"> Dash</NavLink>
         </Row>
         <Row> 
             <NavLink className="d-inline p-2 bg-dark text-white" to="/"> Projects</NavLink>
         </Row>
         <Row>
              <NavLink className="d-inline p-2 bg-dark text-white" to="/"> Issues</NavLink>
         </Row>
         <Row>
              <NavLink className="d-inline p-2 bg-dark text-white" to="/"> Timesheet</NavLink>
         </Row>
         <Row>
              <NavLink className="d-inline p-2 bg-dark text-white" to="/"> Settings</NavLink>
         </Row>

         
          
          </Col>
          
            </Row>
            </div>
            </div>
     )
    
}
export default RSideBar;

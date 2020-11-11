
import React from 'react'
import {Row,Col,NavLink} from 'react-bootstrap';


function ReportSideBar() {
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
                    <NavLink className="d-inline p-2 bg-dark text-white" to="/"> Developer Timesheet</NavLink>
                    </Row>
                    <Row>
                    <NavLink className="d-inline p-2 bg-dark text-white" to="/"> Project Timesheet</NavLink>
                    </Row>
                    <Row>
                    <NavLink className="d-inline p-2 bg-dark text-white" to="/"> Sprint Summary</NavLink>
                    </Row>
                    <Row>
                    <NavLink className="d-inline p-2 bg-dark text-white" to="/"> Full Bug Summary</NavLink>
                    </Row>
               </Col>

          </Row>
          </div>
     </div>
    )
}

export default ReportSideBar

import React from 'react';
import { BrowserRouter as Router, Route,Switch } from 'react-router-dom';
import LoginForm from '../Components/LoginForm/LoginForm';
import Error from '../Components/Common/Error';
import Buttons from './Buttons';
import DashboardBCL from './DashboardBCL'; 
import { Button, Navbar } from 'react-bootstrap';
import RGateway from '../Components/Report/RGateway'

function Combine(){
   
        return (
            <div>
                 <React.Fragment>
                <Navbar bg="secondary">               
                 <Buttons/>
                 </Navbar>
 
          <Router>
        
           <Switch>
                 
                 <Route exact path="/DashboardBCL" component={DashboardBCL}  />
                 
                  <Route path="/Components/LoginForm/LoginForm" component={LoginForm}  /> 
                  <Route path="/Components/Report/RGateway" component={RGateway}  /> 
                
                   <Route component={Error}  />
                 
               </Switch>
      
        
        </Router>
         </React.Fragment>
            </div>
        )
    }
export default Combine;

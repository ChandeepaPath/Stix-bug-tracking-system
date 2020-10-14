import React, { Component } from 'react';
import NavigationBar from '../Components/Common/Navbar/NavigationBar';
import Projectlist from '../Components/BCL/Project/Projectlist';
import ProjectIssues from '../Components/BCL/Project/ProjectIssues'
import Aboutus from '../Components/Common/Aboutus/Aboutus';
import Help from '../Components/Common/Help/Help';
import Error from '../Components/Common/Error';
import Footer from  '../Components/Common/Footer/Footer';
import { BrowserRouter as Router } from "react-router-dom";
import {Switch, Route} from 'react-router-dom';
import Newsfeed from '../Components/BCL/Project/Newsfeed';
import Buttons from './Buttons'

 function Dashboard(){
    
  return (
<div id="dashboard">
   <React.Fragment>
     <Router>
    <div>

  <div className="sticky-top">
  <NavigationBar/>
  </div>




    
          <Switch>
            
            <Route exact path="/Projectlist" component={Projectlist}  />
            <Route exact path="/DashboardBCL" component={Projectlist}  />
            <Route exact path="/" component={Projectlist}  />
           
            <Route path="/Aboutus" component={Aboutus}  /> 
            <Route path="/Help" component={Help}  />      
             <Route path="/ProjectIssues" component={ProjectIssues}  /> 
             <Route path="/Newsfeed" component={Newsfeed}  />    
           
              <Route component={Error}  />
            
          </Switch>
   <div className="fixed-bottom">    
   <Footer/>
  </div>
   </div>
   </Router>
    </React.Fragment>
    </div>
    
    
      
  )
}
export default Dashboard;
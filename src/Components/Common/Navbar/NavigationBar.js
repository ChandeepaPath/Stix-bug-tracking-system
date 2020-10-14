
import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import {Navbar, NavDropdown} from 'react-bootstrap';
import {Button , Form, FormControl} from 'react-bootstrap';

function NavigationBar() {
  
    return(
        <Navbar bg="dark" expand="lg">
          <Navbar.Toggle aria-control="basic-navbar-nav"/>
          <Navbar.Collapse id ="basic-navbar-nav" >
         
      
          <NavLink className="d-inline p-2 bg-dark text-white" to="/Projectlist">   <span class="badge badge-secondary">Strix</span></NavLink>
  
              <NavLink className="d-inline p-2 bg-dark text-white" to="/Projectlist" ><i class="fa fa-fw fa-home"></i> Home </NavLink>
  
              <NavLink className="d-inline p-2 bg-dark text-white" to="/Help">Help</NavLink>
              <NavLink className="d-inline p-2 bg-dark text-white" to="/Aboutus"><i class="fa fa-fw fa-envelope"></i>  About Us </NavLink>
              
              </Navbar.Collapse>
          <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" /> {/* Margin right(Padding , Small and up by 2) */}
                 <Button variant="outline-primary text-white"><i class="fa fa-fw fa-search"></i>  Search..</Button>
     
      <NavDropdown title="Log Out"  className=" " id="basic-nav-dropdown">

        <NavDropdown.Item href="#">My Profile</NavDropdown.Item>
        <NavDropdown.Item href="#"><i class="fa fa-fw fa-user"></i>Log Out</NavDropdown.Item>
       
      </NavDropdown>
      
      </Form>
     
        </Navbar>
        
    )
  }
export default NavigationBar;

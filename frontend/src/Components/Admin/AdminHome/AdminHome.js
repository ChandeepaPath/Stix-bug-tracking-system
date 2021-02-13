import React from 'react';
import { NavLink } from 'react-router-dom';
import  './AdminHome.scss'


function AdminHome(){
  return (
    <div class="container h-100">
        <div class="row">

            <div class="col-md-6 col-lg-4 column">
                <div class="cardF gr-1">
                    <div class="txt">
                        <h1>External User Creation</h1>
                        <p>Creating external users to the system</p>
                    </div>
                    <NavLink to={'/Admin/ExternalUsers'}>
                        <i class="fa fa-plus-circle"></i>
                    </NavLink>
                </div>
            </div>

            <div class="col-md-6 col-lg-4 column">
                <div class="cardF gr-1">
                    <div class="txt">
                        <h1>Internal User Creation</h1>
                        <p>Creating Managers, Developers and QAs</p>
                    </div>
                    <NavLink to={'/Admin/InternalUsers'}>
                        <i class="fa fa-plus-circle"></i>
                    </NavLink>
                </div>
            </div>

            <div class="col-md-6 col-lg-4 column">
                <div class="cardF gr-1">
                    <div class="txt">
                        <h1>Project Creation</h1>
                        <p>Creating projects</p>
                    </div>
                    <NavLink to={'/Admin/Projects'}>
                        <i class="fa fa-plus-circle"></i>
                    </NavLink>
                </div>
            </div>

            <div class="col-md-6 col-lg-4 column">
                <div class="cardF gr-1">
                    <div class="txt">
                        <h1>Access Control</h1>
                        <p>Assigning users to their respective projects</p>
                    </div>
                    <NavLink to={'/Admin/Permissions'}>
                        <i class="fa fa-plus-circle"></i>
                    </NavLink>
                </div>
            </div>

        </div>
    </div>
  )
}

export default AdminHome;
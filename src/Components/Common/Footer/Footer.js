import React from 'react';
import './Footer.css';


function Footer(){
    return (
        <div className="">
            <div className="footer">
                <div classname="footer-bottom" >
                    <p className="text-xs-center text-white">
                        &copy;{new Date().getFullYear()} Strix -All Rights Reserved
                    </p>   
                </div>
            </div>
        </div>
    );
}

export default Footer;


import React from 'react'
import NavigationBar from '../Components/Common/Navbar/NavigationBar';
import Footer from '../Components/Common/Footer/Footer'
import RSideBar from '../Components/Report/Manager/RSideBar';
import SelectionBar from '../Components/Report/Manager/SelectionBar';
import SortedTable from '../Components/Report/Manager/SortedTable'
function DashReportManager() {
    
        return (
            <div>
                <NavigationBar/>
                    <div className="container-fluid">
                        <div className="row">
                            <div className=" col-md-2">
                        
                                <RSideBar/>
                            </div>
                            <div className="col-md-10">
                                <div className="row"> 
                                    <SelectionBar/>
                                 </div>
                            
                                <div className="row"> 
                                    <SortedTable/>
                                </div>
                            </div>
                        </div>
                    </div>
                  
                <Footer/>
            </div>
     )
    
}
export default DashReportManager;

import React from 'react'
import {Card} from 'react-bootstrap';
import NavigationBar from '../Components/Common/Navbar/NavigationBar';
import Footer from '../Components/Common/Footer/Footer'
import TotalHours from '../Components/Report2/Manager/TotalHours';
import TotalIssuesPieCharts from '../Components/Report2/Manager/Charts/TotalIssuesPieCharts';
import ActiveWeekdaysBar from '../Components/Report2/Manager/Charts/ActiveWeekdaysBar';
import IssuesWeekdays from '../Components/Report2/Manager/Charts/IssuesWeekdays';
import ReportSideBar from '../Components/Report2/ReportSideBar';
import CalendarDate from '../Components/Report2/Manager/Calendar';
import TProjDEvQA from '../Components/Report2/Manager/TProjDevQA'
import SolvedRatio from '../Components/Report2/Manager/Charts/SolvedRatio';

function DashReportManager2() {
    
        return (
            <div>
                <NavigationBar/>
                    <div className="container-fluid">
                        <div className="row">
                            <div className=" col-md-2 bg-dark" >
                        
                                <ReportSideBar/>
                            </div>
                            <div className="col-md-10">
                                <div className="row" style={{paddingTop:5}}>
                                   <div className="col-md-6">
                                   <Card.Title>Bug Report DashBoard - Overall Summary</Card.Title>
                                    </div>
                                    <div className="col-md-6"> 
                                  
                                    <Card className="shadow-lg p-2 mb-1 bg-white rounded">
                                    <div className="row">
                                            
                                            <div className="col" style={{}}>
                                            
                                                To
                                        <small><CalendarDate /> </small>    
                                            
                                            </div>
                                            <div className="col">
                                            
                                                From
                                        <small><CalendarDate /> </small>    
                                            
                                            </div>
                                        <div className="col"syle={{}}>
                                               
                                        <button className="btn btn-success">Filter by Date</button>
                                            
                                        </div>
                                        
                                    </div>
                                    </Card>
                                    </div>
                                </div>
                                    <div className="row">
                                    
                                <div className="col-md-7">
                                    <div className="row" style ={{paddingTop:5}}>
                                        <div className="col-md-6"  >
                                              <Card   className="shadow-lg p-1 mb-2 bg-white rounded" style={{height:240}}> 
                                                  <TProjDEvQA/>
                                                    </Card>
                                        </div>
                                        <div className="col-md-6"  >
                                                 <div className="col"  >
                                                 <Card  className="shadow-lg p-1 mb-1 bg-white rounded" >
                                                <center><b>Total Hours</b></center>
                                            <TotalHours/>
                                            </Card>
                                            <Card className="shadow-lg p-1 mb-1 bg-white rounded">
                                            <SolvedRatio/>
                                               
                                            </Card>
                                                </div>
                                                
                                            </div>
                                            
                                    </div>
                                  
                                </div>
                                <div className="col-md-5" style={{paddingTop:5}}>
                                            <Card  className="shadow-lg p-2 mb-1 bg-white rounded" style={{height:240}} >
                                                <div className="">
                                                    <center>
                                                 <IssuesWeekdays/>
                                                 </center>
                                              
                                                </div>
                                            </Card>
                                </div>
            
                            </div>
                            <div className="row">
                                        <div className="col-md-7">
                                            <Card  className="shadow-lg p-2 mb-1 bg-white rounded" style={{height:280,  width:545}}>
                                               <div className=""
                                                style={{
                                            
                                                    alignItems: "center",
                                                    
                                                    justifyContent: "center",
                                                    
                                                    }}>
                            
                                                    <center>   
                                                         <TotalIssuesPieCharts/>
                                                    </center> 
                                                </div>
                                            </Card>
                                        </div>
                                        <div className="col-md-5">
                                            
                                            <Card  className="shadow-lg p-2 mb-1 bg-white rounded" style={{height:280}}> 
                                                <div className=""  style={{  width:350}}>
                                                    <center> <ActiveWeekdaysBar/></center>
                                                </div>
                                            </Card>
                                             
                                            
                                        </div>

                                    </div>
                            </div>
                        </div>
                    </div>
                  
              <Footer/>
            </div>
     )
    
}
export default DashReportManager2;




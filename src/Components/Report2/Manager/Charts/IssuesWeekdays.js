
import React, { useState,useEffect} from 'react'
import { Bar} from 'react-chartjs-2'
import axios from 'axios';

function IssuesWeekdays() {
    const [issues, setIssues] = useState({})

    useEffect( () =>{
         const fetchIssues = async () =>{
             let IssuesOpened =[];
             let IssuesClosed =[];
             axios.get('  http://localhost:3333/IssuesOpened_Closed')
             .then (res => {
                 for(let dObj of res.data){
                     console.log(dObj);
                     IssuesClosed.push(parseInt(dObj.NoIClose));
                     IssuesOpened.push(parseInt(dObj.NoIOpen));
                
                 }
                 console.log(IssuesClosed)
                 setIssues({
                    labels:['Mon','Tues','Wed', 'Thurs','Fri'],
                    datasets:[
                        {
                           label:'Issues Opened',
                           data: IssuesOpened,
                           borderColor: ['rgba(255,206,86,0.2)'],
                           backgroundColor:'rgb(92, 184, 92)',
                           pointBorderColor:'rgb(41, 43, 44)'    
                        },
                        {
                           label:'Issues Closed',
                           data: IssuesClosed,
                           borderColor: ['rgb(217, 83, 79)'],
                           backgroundColor:'rgb(217, 83, 79)',
                           pointBorderColor:'rgb(217, 83, 79)'  
                        }
                       ]
                });
             });
           
         }
         fetchIssues();
    }, []);
    // const data ={
    //     labels:['Mon','Tues','Wed', 'Thurs','Fri'],
    //     datasets: [
    //         {
    //         label: 'Issues Opened ',
    //         data: [3,5,10,11,16],
    //       },{
    //         label: 'Issues Closed ',
    //         data: [2,4,7,9,13],
    //    }
    const options={
        title:{
            display:true,
            text:'Issues Opened and Closed'
        },
        scales:{
            yAxes:[
                {
                    ticks: {
                        min:0,
                        max: 10,
                        stepSize:2
                    }
                }
            ]
        }
    }
    return (
        <div>
            <Bar data={issues}
            options={options}
            height={130}/>
            
        </div>
    )
}

export default IssuesWeekdays


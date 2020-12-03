import React, {useState, useEffect} from 'react'
import {Bar} from 'react-chartjs-2';
import axios from 'axios'

function ActiveWeekdaysBar() {
     const [hrs, setHrs] = useState([])

     useEffect(() => {
        const fetchHrs = async ()=>{
        
            axios.get(' http://localhost:3333/ActiveHoursWeekDays')
             .then ( res =>{
                 console.log(res.data)
                    setHrs(
                     {
                        labels:['Mon','Tues','Wed','Thurs','Fri'],
                        datasets: [
                            {
                            label: 'Active Week Days ',
                            data: res.data,
                            borderColor: [
                                'rgba(255,206,86,0.2)',
                                'rgba(255,206,86,0.2)',
                                'rgba(255,206,86,0.2)',
                                'rgba(255,206,86,0.2)',
                                'rgba(255,206,86,0.2)'
                        ],
                            backgroundColor:[
                                'rgba(54,162,235,1)',
                                'rgba(54,162,235,1)',
                                'rgba(54,162,235,1)',
                                'rgba(54,162,235,1)',
                                'rgba(54,162,235,1)',
                        
                        ],
                            pointBorderColor:'rgba(255,206,86,0.2)'    
                        },
                       
                        ]
                
                     }
                 )
             })
             
         }
    fetchHrs();
     }, [])

    //     labels:['Mon','Tues','Wed','Thurs','Fri'],
    //     datasets: [
    //         {
    //         label: 'Active Week Days ',
    //         data: [20,42,23,31,34],
   
    const options={
        title:{
            display:true,
            text:'Active Week days (Total Hours Worked)'
        },
        scales:{
            yAxes:[
                {
                    ticks: {
                        min:0,
                        max: 50,
                        stepSize:10
                    }
                }
            ]
        }
    }
    return (
        <div>
            <Bar data={hrs}
            options={options}
            height={200}
            />
        </div>
        
    )
}

export default ActiveWeekdaysBar

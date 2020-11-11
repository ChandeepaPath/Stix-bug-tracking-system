import React, {useState,useEffect} from 'react'
import {Pie} from 'react-chartjs-2'; 
import axios from 'axios'

function TotalIssuesPieCharts() {
const [issues, setIssues] = useState({})

    useEffect(() => {
        const fetchratio =  async() => {
              let result = null;
              let id =[]
              let proj =[]
              let iss =[]
            axios.get(' http://localhost:3333/NoIssuesProj')
            .then( res => {
                for(let obj of res.data ){
                  console.log(obj)
                    iss.push(parseInt(obj.NoIssues))
                    id.push(parseInt(obj.pID))
                    proj.push(parseInt(obj.Pname))
  
                }
                   console.log(result)
            setIssues(
                {
                    labels:proj,
                    datasets: [
                        {
                        label: 'No of Issues projects',
                        data: iss,
                        // Total issues along with project
                        backgroundColor:[
                            'rgba(255,99,132,1)',
                            'rgba(255,206,90,1)',
                            'rgba(54,162,235,1)',
                            'rgba(25,159,64,1)',
                            'rgba(153,102,255,1)',
                    
                    ],
                        pointBorderColor:'rgba(255,206,86,0.2)'    
                }
                   
                    ]
                }
            )
          })
        }
          fetchratio();
      }, [])
   
    const options={
        title:{
            display:true,
            text: "Number of Issues along with Projects"
        },
       
    }
    return (
        <div>
            <Pie data={issues}
            options={options}/>
        </div>
    )
}

export default TotalIssuesPieCharts

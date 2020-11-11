import React ,{useState, useEffect } from 'react'
import axios from 'axios'
import {Card} from 'react-bootstrap'



function TProjDevQA() {
    const [project, setProject] = useState([]);

    useEffect(()=>{
        axios.get('http://localhost:3333/TotalEmp')
         .then(res=> {
              console.log(res)
               setProject(res.data)
           })
           .catch(err =>{
               console.log(err)
            }) 
    },[])
    
    return (
        <div>

            {project.map(t=>{
                return(
                    <div key={t.Totalprojects}>
                    <center><b>Total Projects</b> <h1 className="text-primary">{t.Totalprojects}</h1></center>
                        <div className="col">
                            <Card  className="shadow-lg p-2 mb-3 bg-white rounded"><center> <h6 className="">Total No of Dev: {t.TotalDev}</h6></center></Card>
                </div>
                <div className="col">
                    <Card  className="shadow-lg p-2 mb-2 bg-white rounded"><center><h6> Total No of QA: {t.TotalQA}</h6></center></Card>
                </div>
                                                       
                </div>     
                );
            })}
               
        </div>
    );
}
export default TProjDevQA

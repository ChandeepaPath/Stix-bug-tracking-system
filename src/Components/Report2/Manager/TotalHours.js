import React,{useState, useEffect} from 'react'
import axios from 'axios';

function TotalHours(){
    
  const [totalhrs, setTotalhrs] = useState([]);

  
 useEffect(()=>{
    axios.get('http://localhost:3333/TotalHrs')
     .then(res=> {
          console.log(res)
           setTotalhrs(res.data)
       })
       .catch(err =>{
           console.log(err)
        }) },[])
    
//Code for API
//{totalhrs.map(x=><div key={x.id}>{x.title}</div>)}
                                   
        return (
            <div>
                                
            {totalhrs.map(t=>{
                return(
                   <div key={t.totalHours}>
                      <center> <h3 className="text-primary">{t.totalHours}</h3></center>
                      <center> <p>DEV <b>{t.Devhrs}</b> | QA <b>{t.QAhrs} </b></p> </center>
                      
                     <p></p>
                   </div>     
                );
            })}
        </div>
   
        );

}export default TotalHours;

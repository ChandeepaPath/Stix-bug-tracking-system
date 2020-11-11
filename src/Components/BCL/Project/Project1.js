import React ,{useEffect, useState}from 'react';
import {Link} from 'react-router-dom';
import {Nav} from 'react-bootstrap';
import {Card , Button} from 'react-bootstrap';
import {getProject} from "../../../Services/Projects/project.js"
import axios from 'axios';

function Project1() {
    
    const [projview, setProjview] = useState([])

      useEffect(() => {
        axios.get(' http://localhost:3333/Project')
        .then(res=> {
          console.log(res)
          setProjview(res.data)
      })
      .catch(err =>{
          console.log(err)
        }) },[]);
  //    let mount  =true;
  //   //getProject()
  //  axios.get(' http://localhost:3333/Project')
  //   .then(res=>{
  
  //     setProj(res.data)
  //    }
  //   }
  //   )
  //   //  return () => mount = false;
  //  }, [])

  return(
    <div className="col">
      {projview.map(t=> {
        return(
           <div className="col" key={t.id} >
              <div>
                <Card style={{padding:10}}>
                    <div className="shadow-lg p-2 mb-2 bg-white rounded">
                        <Card.Header>
                          <Card.Title>
                            <h3 className="text-primary"> {t.PName}</h3>
                          </Card.Title>
                        </Card.Header>               

                        <Card.Body>
                          <Card.Text>
                            <h8 className="text-dark">   {t.Pdesc}</h8>
                          </Card.Text>
                              <Link to={t.link}>   
                                 <button className="btn btn-dark"> Current Progress</button>
                              </Link>
                        </Card.Body>
          
                    </div>
          
                </Card> 
              </div>
            </div>    
          )})   
      }
    </div>
  );

}
export default Project1;

import React, { useState } from 'react'
import {Card} from 'react-bootstrap'
import Select from 'react-select'


function DropDownQA() {
    const qaDetails =[
        {
            value: "QA001",
            label: "Gal Gadot"
        },
        {
            value: "QA002",
            label: "Kriti Sanon"
        },
        {
            value: "QA003",
            label: "Holly Earl"
        },
        {
            value: "QA004",
            label: "Hardik Pandya"
        },
        {
            value: "QA005",
            label: "Jofra Archer"
        }
    ]
    const [qa,setQa] = useState([]);

    const handleChange = (e) => {
        setQa(Array.isArray(e) ? e.map(x => x.value) : []);
    }


        return (
           
            <div className="">
            <p><b>Quality Assurance</b></p>
       
            <Select
              className="dropdown"
              placeholder="Select QA ID"
              value={qaDetails.filter(obj => qa.includes(obj.value))} 
              // set selected values
              options={qaDetails} // set list of the data
              onChange={handleChange} // assign onChange function
              isMulti
              isClearable
            />
       
            {qa && <div style={{ marginTop:5, lineHeight: '25px' }}>
               {/* //stringify transforms js object to json string */}
               {/* no replacer arugmnet is here (null)and add 2 spaces */}
              <div>Selected:  {JSON.stringify(qa, null, 2)}</div>
             
            </div>}
          </div>
            // <div>
            //     <p><b>Quality Assurence</b></p>
            //     <Card>
            //     <select className="form-control">
            //        {items.map(item => (
            //            <option 
            //            key={item.value} value={item.value}>
            //                {item.qa} 
            //             </option>
            //       ))}
            //     </select>
            //     </Card>
            // </div>
        )
    
}
export default DropDownQA;

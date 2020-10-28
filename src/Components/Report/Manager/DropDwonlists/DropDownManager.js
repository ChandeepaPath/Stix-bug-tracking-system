import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import Select from 'react-select';

 
function DropDwonManager() {
  const projDetails = [
    {
      value: "P001",
      label: "Project A"
    },
    {
      value: "P002",
      label: "Project B"
    },
    {
      value: "P003",
      label: "Project C"
    },
    {
      value: "P004",
      label: "Project D"
    },
    {
      value: "P005",
      label: "Project E"
    }
  ];
 
  // set value for default selection
  const [proj, setProj] = useState([]);
 
  // handle onChange event of the dropdown
  const handleChange = (e) => {
    setProj(Array.isArray(e) ? e.map(x => x.value) : []);
  }
 
  return (
    <div className="">
      <p><b>Project</b></p>
 
      <Select
        className="dropdown"
        placeholder="Select Project ID"
        value={projDetails.filter(obj => proj.includes(obj.value))} 
        // set selected values
        options={projDetails} // set list of the data
        onChange={handleChange} // assign onChange function
        isMulti
        isClearable
      />
 
      {proj && <div style={{ marginTop:5, lineHeight: '25px' }}>
         {/* //stringify transforms js object to json string */}
         {/* no replacer arugmnet is here (null)and add 2 spaces */}
        <div>Selected:  {JSON.stringify(proj, null, 2)}</div>
       
      </div>}
    </div>
  );
}
 
export default DropDwonManager;

import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import Select from 'react-select';

 
function DropDwonDev() {
  const devDetails = [
    {
      value: "DEV001",
      label: "Dinithi"
    },
    {
      value: "DEV002",
      label: "Dilshani"
    },
    {
      value: "DEV003",
      label: "Yashith"
    },
    {
      value: "DEV004",
      label: "Dilumika"
    },
    {
      value: "DEV005",
      label: "Chandeepa"
    }
  ];
 
  // set value for default selection
  const [dev, setDev] = useState([]);
 
  // handle onChange event of the dropdown
  const handleChange = (e) => {
    setDev(Array.isArray(e) ? e.map(x => x.value) : []);
  }
 
  return (
    <div className="">
      <p><b>Developer</b></p>
 
      <Select
        className="dropdown"
        placeholder="Select Dev ID"
        value={devDetails.filter(obj => dev.includes(obj.value))} 
        // set selected values
        options={devDetails} // set list of the data
        onChange={handleChange} // assign onChange function
        isMulti
        isClearable
      />
 
      {dev && <div style={{ marginTop:5, lineHeight: '25px' }}>
         {/* //stringify transforms js object to json string */}
         {/* no replacer arugmnet is here (null)and add 2 spaces */}
        <div>Selected:  {JSON.stringify(dev, null, 2)}</div>
       
      </div>}
    </div>
  );
}
 
export default DropDwonDev;


// function DropDwonDev(){
 
//   // set value for default selection
// const [selectedValue, setSelectedValue] = useState([]);

 
// // handle onChange event of the dropdown
// const handleChange = (e) => {
//   setSelectedValue(Array.isArray(e) ? e.map(x => x.value) : []);
// }

//   return(
  
//   <div className="container">
//     <Card></Card>
//     <select
//      options={optionsize} 
//      className="mb-3" 
//      placeholder="Develop"
//      isMulti
//      isClearable
//     />
    

//     </div>
//   )
// } export default DropDwonDev;
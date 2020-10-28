import React, { useState, useEffect} from 'react';
import {useForm} from './useForm';
import {Hello} from './Hello';
import {useFetch} from './useFetchHook';

const Help =() => {
  const [values, handleChange]  = useForm({email: "",password: "", firstname: ""});

useFetch("numbersapi.com/43/trivia")
        return (
            <div>
             <br></br>
             {/* <button onClick={()=> setShowHello(!showHello)}>Toggle</button> */}
             {/* { showHello && <Hello/>} */}
                 <input name ='email' value ={values.email} 
                 onChange={handleChange}>
                     

                 </input>
                 <input name ='firstname'  placeholder="FirstName" value ={values.firstname} 
                 onChange={handleChange}/>
                 <input type="password" name="password"
                 value={values.password }
                 onChange={handleChange}
                 />
               
            </div>
        );
    };
export default Help;

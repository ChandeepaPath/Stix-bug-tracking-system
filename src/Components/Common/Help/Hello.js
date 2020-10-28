import React from 'react';
import useEffect from 'react'

export const Hello =() =>{

    React.useEffect(() => {
        console.log("render");
        return () => {
            console.log("Unmount");
        };
  
    },[]);

    return (
        <div>Hello</div>
    );
}
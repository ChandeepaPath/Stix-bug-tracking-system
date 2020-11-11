import React from 'react'
import DropDwonDev from './DropDwonlists/DropDownDev';
import {Card} from 'react-bootstrap';
import DropDwonQA from './DropDwonlists/DropDownQA';
import DropDownManager from "./DropDwonlists/DropDownManager";
import DropDwonManager from './DropDwonlists/DropDownManager';

function SelectionBar() {
            return (
            <div className="container-fluid">
                <Card>
                <div className="row">
                    <div className="col">
                        <DropDwonManager/>
                    </div>
                    <div className="col">
                    <DropDwonDev/>
                    </div>
                    <div className="col ">
                    <DropDwonQA/>
                    </div>
                    <div className="col">
                        Date
                    </div>
                   
                </div>
               
                </Card>    
            </div>
        )
    }

export default SelectionBar;
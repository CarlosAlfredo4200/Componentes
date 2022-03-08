import React from 'react';
 
import './App.css';
import Checkbox from './components/CheckBox/Checkbox';
import CheckboxV2 from './components/CheckBox/CheckBoxV2'
 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faCheckSquare } from '@fortawesome/free-solid-svg-icons';
import Card from './components/Card/Card' 
import Bloque from './components/Bloque/Bloque';
import BloqueTabs from './components/Tabs/BloqueTabs.js';

 


function App() {
  return (
    <>
    
    <div className="App">
     
     <BloqueTabs />
    
    </div>

       
    </>
  );
}

export default App;

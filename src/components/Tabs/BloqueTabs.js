import React, { useState, useEffect } from "react";
import Tab from "./Tab";
import TabContenido from "./TabContenido";
//mport TabContenido from "./TabContenido";

const BloqueTabs = () => {

  const [valorIndex, setValorIndex] = useState(1)
  

  const handleIndex = (e) => {
    setValorIndex(e)
    console.log(valorIndex);
  };
    
  
   

  return (
    <div className="">
      <div className="flex flex-row justify-center text-center">
        <Tab handleIndex={handleIndex} index={1} titulo="Acceso a vivienda"  />
        <Tab handleIndex={handleIndex} index={2} titulo="Mejoramiento de vivienda"  />
        <Tab handleIndex={handleIndex} index={3} titulo="Vivir en comunidad"  />
        
      </div>

   
      <div className="mt-10 mx-5">
      <TabContenido  
    index={valorIndex} 
     
    />
      </div>
    </div>
  );
};

export default BloqueTabs;

import React, { useState } from "react";
import CheckIcon from "@mui/icons-material/Check";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { faBiking } from "@fortawesome/free-solid-svg-icons";
import { faCheckSquare } from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames";
import { type } from "os";
import { icon } from "@fortawesome/fontawesome-svg-core";



const Checkbox = () => {
  const [checkSelect, setCheckSelect] = useState(true);

  let opacidad = "";
  const acepto = "Acepto las condiciones y términos de uso para el tratamiento de datos."
  //Determinar estado
  const handelChange = (e:any) => {
    
    
   setCheckSelect(e.target.checked)
   
  };
  //Determinar opacidad
  checkSelect === true ? (opacidad = "0") : (opacidad = "100");

  let classComp = classNames(
    "absolute  left-0 pl-0.5  pr-1 top-0.5   text-[#ff277e]     ",
    `text-opacity-${opacidad}`
  );

  return (
    <>
      <label htmlFor="check-box-1" className="cursor-pointer relative ">
        <input
          type="checkbox"
          id="check-box-1"
          className=" appearance-none h-3.5 w-3.5 border border-[#ff277e]
          font-medium
          rounded-sm
          hover:bg-transparent  
          hover:bg-[#ff277e]
          hover:bg-rose-200 transition-colors duration-400 
          "
          onClick={handelChange}

        />
         <span className="ml-2 ">{acepto}</span>
        <FontAwesomeIcon
          // icon={(checkSelect === true)?faCheck : faBiking}
          icon={faCheck}
          
          //  className="text-xl   text-[#ff277e] absolute left-1   -top-1 text-opacity-0 check-1 transition"
          className={classComp}
         
        />

 
      </label>

      
    </>
  );
};

export default Checkbox;

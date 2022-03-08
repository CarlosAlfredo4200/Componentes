 
import classNames from "classnames";

const Tab = ({handleIndex, index, titulo} ) => {

 
  
  let classComp = classNames(
    "align-middle border-b-4 border-[#ff277e] m-2 mb-2 p-2 text-base text-gray-400 font-bold"
  );

  return (
    <div>
      <div className="flex flex-row justify-center text-center">
        <div className={classComp} onClick={() => handleIndex(index)}>
          {" "}
          {titulo}
        </div>
      </div>

     

    </div>
  );
};

export default Tab;

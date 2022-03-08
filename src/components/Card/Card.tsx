import React from "react";
import Button from '../Button/Button';

const Card = () => {
  return (
    <>
      <div className="justify-center   border border-black rounded  shadow-2xl   p-2 m-2">
        <header className="  bg-gray-200 rounded-t-lg py-5  text-gray-800 text-xl  font-bold  ">
        Afiliarse al Sistema de Seguridad Social: el primer paso de Ventola Coffee
        </header>
        <div className="p-2     justify-center">
          <p className="m">Conoce la historia de esta microempresa que se dedica a generar empleo y progreso en el Suroeste antioqueño.</p>
        </div>
           <Button   />
          <footer className="bg-gray-200 rounded-b-lg text-right px-8 py-3 text-gray-500"> Updated 3 days ago</footer>
      </div>
    </>
  );
};

export default Card;

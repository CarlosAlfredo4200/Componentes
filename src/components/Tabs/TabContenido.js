import React from 'react';

const TabContenido = ({index }) => {


const titulos = {
  1: 'Acceso a vivienda',
  2: 'Mejoramiento de vivienda',
  3: 'Vivir en comunidad'
}

const parrafos = {
  1: 'El acceso a la vivienda es un derecho fundamental universal que responde a una necesidad cuya vulneración atenta directamente  contra nuestra dignidad como personas. ... Las mujeres, las familias monoparentales, las personas pensionistas o las inmigrantes también tienen que hacer lo imposible para conseguir una vivienda.  ',

  2: 'Este programa responde a la política de Gobierno Nacional “Casa Digna, Vida Digna” una iniciativa que cuenta además con la participación del Ministerio de Vivienda y el Ministerio de Agricultura. Para este fin, el DPS aporta 325 mil de los 600 mil mejoramientos que hacen parte de esta política, que atenderá las necesidades básicas habitacionales de la población más vulnerable del país en zona rural y urbana.  ',

  3: 'Cuando se habla de vivir en comunidad se entiende que un conjunto de personas vive en una misma estructura, bajo ciertas reglas de comportamiento social. Esta definición toma una forma más tangible en los residenciales donde diferentes parejas o familias conviven entre sí.'
}


const imagenes = {
  1:' https://e00-expansion.uecdn.es/assets/multimedia/imagenes/2020/07/16/15949283359006.jpg',
  2:'https://www.lanacion.com.co/wp-content/uploads/2020/08/Mejoramiento-Vivienda-1.jpg',
  3:'https://crianzaysalud.com.co/wp-content/uploads/2017/09/prevencion1.jpg'
}

const indexDefault = 1

const titulo = titulos[index] || indexDefault
const parrafo = parrafos[index] || indexDefault
const imagen = imagenes[index] || indexDefault
console.log(titulo);
  
console.log();
 // console.log('valor del index desde tabcontenido :'+index);

  return <div >
       <div className='flex'>
        <div className="w-1/2"> 
            <h2 className="text-xl font-bold">{titulo}: </h2>
            <p>{parrafo}
            </p>
        </div>
        <div className="w-1/2"><img src={imagen}   alt="imagen"/></div>
      </div>
  </div>;
};

export default TabContenido;

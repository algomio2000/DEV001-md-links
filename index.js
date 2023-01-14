const fs = require('fs');

const mdLinks = (path, options) => {
 return new Promise((resolve, reject) => {
      //identifica si la ruta existe
    if (fs.existsSync(path)){
      //¿es una ruta absoluta?
      // convertir a una ruta absoluta
      // averiguar si la ruta es un archivo
      //averiguar si es un archivo md


    }else{
       //si no existe la ruta rechaza la promesa
      reject('La ruta no es valida');
    }
      //identifica si la ruta existe
     
  });

}

module.exports =  {
mdLinks
};
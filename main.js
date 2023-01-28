
const fs = require ('fs');
const path = require ('path');
/*const marked = require('marked');*/

// comprobando si la ruta es valida
const isValidRoute = (path) => {
  if (fs.existsSync(path)) {
    return true;
  } else {
    return false;
  }
};
 console.log(isValidRoute);
//comprobando si es una ruta absoluta

const getAbsoluteRoute = (path) => {
  if (path.isAbsolute(path)) {
    return path;
    //si no es absoluta con resolve la convierto en absoluta
  } else {
    return path.resolve(path);
  }
};


//averiguar si es archivo o directorio
/*const pathIsDirectory = (ruta) => {
  return fs.lstatSync(ruta).isDirectory()
}// payhIsDirectorio es true de volver un cacth, por ahora no estamos leyendo directorios
//averiguar si es archivo

const pathIsFile = function (ruta){
  return fs.statSync(ruta).isFile()
}*/ 
module.exports={
  isValidRoute,
  getAbsoluteRoute,
  pathIsDirectory,
  pathIsFile,
};
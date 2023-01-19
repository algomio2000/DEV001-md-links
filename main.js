
const fs = require ('fs');
const path = require ('path'); 
// comprobando si la ruta es valida
const isValidRoute = (route) => {
  if (fs.existsSync(route)) {
    return true;
  } else {
    return false;
  }
};
 
//comprobando si es una ruta absoluta
const getAbsoluteRoute = (route) => {
  if (path.isAbsolute(route)) {
    return route;
    //si no es absoluta con resolve la convierto en absoluta
  } else {
    return path.resolve(route);
  }
};

//averiguar si es archivo
const pathIsDirectory = (ruta) => {
  return fs.lstatSync(ruta).isDirectory()
}
//averiguar si es archivo
const pathIsFile = function (ruta){
  return fs.statSync(ruta).isFile()
}

console.log (pathIsFile);

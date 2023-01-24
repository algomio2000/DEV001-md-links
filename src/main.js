
const fs = require ('fs');
const path = require ('path');
const marked = require('marked'); 


// comprobando si la ruta es valida
const isValidRoute = (route) => {
  if (fs.existsSync(route)) {
    return true;
  } else {
    return false;
  }
};
/*const isValidRoute = (route) => fs.existsSync(route);*/
 
//comprobando si es una ruta absoluta
const getAbsoluteRoute = (route) => {
  if (path.isAbsolute(route)) {
    return route;
    //si no es absoluta con resolve la convierto en absoluta
  } else {
    return path.resolve(route);
  }
};


//averiguar si es archivo o directorio
const pathIsDirectory = (ruta) => {
  return fs.lstatSync(ruta).isDirectory()
}// payhIsDirectorio es true de volver un cacth, por ahora no estamos leyendo directorios
//averiguar si es archivo
const pathIsFile = function (ruta){
  return fs.statSync(ruta).isFile()
} 

// si pathIsFile es true averiguo si es un archivo md, si es false debo crear un catch
const isMdFile = (route) => (path.extname(route) === '.md');

const getMdFiles = (routeFile) => {
  let arrayMdFile = [];
  // Utilizo la función getAbsoluteRoute() para obtener la ruta absoluta de la ruta dada.
  const route = getAbsoluteRoute(routeFile);
  // Luego usa la función pathIsFile() para verificar si la ruta es un archivo. Si es un archivo, 
  //se verifica si es un archivo Markdown usando la función isMdFile
  if (pathIsFile(route)) {
    if (isMdFile(route)) {
      //Si es un archivo Markdown, se agrega al array de archivos Markdown
      arrayMdFile.push(route);
    }
  } else {
    console.error('Error: no es un archivo');
    
    };
    return arrayMdFile;
  }
  //leer archivos y extraer los links
 
  /*debo tener un array vacio para llenar con los links, debo tener el array de archivos md, 
  la funcion o metodo parfa extarer los links*/
  const getLinksMd = (route) => {
    const arrayMdFiles = getMdFiles(route);
    const renderer = new marked.Renderer();
    const arrayofLinks = [];
    arrayMdFiles.forEach((filePath) => {
      const file = fs.readFileSync(filePath, 'utf8');
      renderer.link = (urlFile, _, urlText) => {
        arrayofLinks.push({
          href: urlFile,
          text: urlText,
          path: filePath,
        });
      };
      marked(file, { renderer });
      // debug('File', marked(file.toString(), { renderer }));
    });
    return arrayofLinks;
  };

  module.exports = {
    isValidRoute,
    pathIsFile,
    isMdFile,
    getMdFiles,
    getLinksMd,
  };
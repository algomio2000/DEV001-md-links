const fs = require('fs');
const path = require('path');
const marked = require('marked');


//averiguar si la ruta es absoluta o no
//convertir ruta en absoluta
const getAbsoluteRoute = (inputpath) => {
  if (path.isAbsolute(inputpath)) {
    return (inputpath);
  } else {
    return path.resolve(inputpath);
  }
};

//averiguar si es un archivo
const pathIsFile = (inputpath) => fs.statSync(inputpath).isFile();
//console.log(pathIsFile('index.js'));

// FUNCION PARA SABER SI ES UN ARCHIVO .MD
const isMdFile = (route) => (path.extname(route) === '.md');
//console.log(isMdFile('test\exampleFiles\example.md'));

//los archivos Md ponerlos en un array
const getMdFiles = (routeFile) => {
  let arrayMdFile = [];
  const route = getAbsoluteRoute(routeFile);
  if (pathIsFile(route)) {
    if (isMdFile(route)) {
      arrayMdFile.push(route);

    }
    else {
      return (route);
    }
    return arrayMdFile;
  };
};
//console.log(getMdFiles('test\\exampleFiles\\ejemplo2.md')); 

// FUNCION PARA RUTAS ABSOLUTAS DE LOS ARCHIVOS ENCONTRADOS
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
    marked.marked(file, { renderer });
  });
  return arrayofLinks;
};


console.log(getLinksMd('test\\exampleFiles\\ejemplo2.md'));

module.exports = {
  getAbsoluteRoute,

  pathIsFile,
  isMdFile,
  getMdFiles,
  getLinksMd,
};



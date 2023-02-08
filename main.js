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
//console.log(getAbsoluteRoute('C:Users\\TecnoBot\\Desktop\\md links\\DEV001-md-links\\test\\exampleFiles\\ejemplo2.md'));


//averiguar si es archivo

//averiguar si es un archivo
const pathIsFile = (inputpath) => fs.statSync(inputpath).isFile();
//console.log(pathIsFile('index.js'));

// FUNCION PARA SABER SI ES UN ARCHIVO .MD
const isMdFile = (route) => (path.extname(route) === '.md');
//console.log(isMdFile('test\exampleFiles\example.md'));

//
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
/*const getLinksMd = (route) => {
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
  });
  return arrayofLinks;
};*/
const getLinksMd = (route) => {
  const arrayMdFiles = getMdFiles(route);
  const file = fs.readFileSync(filePath, 'utf8');
  const renderer = new marked.Renderer();
  const arrayofLinks = [];

  renderer.link = (urlFile, _, urlText) => {
    arrayofLinks.push({
      href: urlFile,
      text: urlText,
      path: filePath
    });
  };

  marked(file, { renderer });

  return arrayofLinks;
};
console.log(getLinksMd('test\\exampleFiles\\ejemplo2.md'));

//console.log(getLinksMd('\DEV001-md-links\\exampleFiles\\exampleFile.md'));

module.exports = {
  getAbsoluteRoute,

  pathIsFile,
  isMdFile,
  getMdFiles,
  getLinksMd,
};



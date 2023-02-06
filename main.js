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
  const pathIsFile = (inputpath)=>{
    const statsObj = fs.statSync(inputpath); 
    if(statsObj.isFile()){
        return true;
    }else{
        return false;
    }
  };
console.log(pathIsFile('DEV001-md-links\test\exampleFiles\ejemplo2.md'));
  
// FUNCION PARA SABER SI ES UN ARCHIVO .MD
  const isMdFile = (route) => (path.extname(route) === '.md');   
//
  const getMdFiles = (routeFile) => {
    let arrayMdFile = [];
    const route = getAbsoluteRoute(routeFile);
    if (pathIsFile(route)) {
      if (isMdFile(route)) {
        arrayMdFile.push(route);
      }
       };
      };
  //console.log(getMdFiles('C:\Users\TecnoBot\Desktop\md links\DEV001-md-links\test\exampleFiles\ejemplo2.md')); 
  // FUNCION PARA RUTAS ABSOLUTAS DE LOS ARCHIVOS ENCONTRADOS
const getLinksMd = (inputpath )=> {
  const arrayMdFiles = getMdFiles(inputpath);
  //console.log(arrayMdFiles);
  const renderer = new marked.Renderer();
  //console.log('esto retorna',renderer);
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
};
//console.log(getLinksMd('C:Users\\TecnoBot\\Desktop\\md links\\DEV001-md-links\\test\\exampleFiles\\ejemplo2.md'));

  //console.log(getLinksMd('\DEV001-md-links\\exampleFiles\\exampleFile.md'));

  module.exports = {
    getAbsoluteRoute,
   
    pathIsFile,
    isMdFile,
    getMdFiles,
    getLinksMd,
};



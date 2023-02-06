const fs = require('fs');
const path = require('path');
const marked = require('marked');


//averiguar si la ruta es absoluta o no
const getAbsoluteRoute = (inputpath) => {
    if (path.isAbsolute(inputpath)) {
        return true;
    }else{
        return false;
    }
   };
//convertir ruta en absoluta
   const changefAbsoluteRoute = (inputpath)=>{
   return path.resolve(inputpath);
   }
   //.log(changefAbsoluteRoute('./exampleFiles/exampleFile.md'));

//console.log(getAbsoluteRoute('./exampleFiles/exampleFile.md'));


  //averiguar si es archivo
  const pathIsFile = (inputpath)=>{
    const statsObj = fs.statSync(inputpath); 
    if(statsObj.isFile()){
        return true;
    }else{
        return false;
    }
  };

  // FUNCION PARA SABER SI ES UN ARCHIVO .MD
const  isMdFile  =  ( inputpath )  =>  ( inputpath . extname ( inputpath)  ===  '.md' ) ;
   
//
  const getMdFiles = (routeFile) => {
    let arrayMdFile = [];
    const route = changefAbsoluteRoute(routeFile);
    if (pathIsFile(route)) {
      if (isMdFile(route)) {
        arrayMdFile.push(route);
      }
      else {
        const arrayOfFiles = fs.readdirSync(route);
        arrayOfFiles.forEach((file) => {
          const arrayMd = getMdFiles(path.join(route, file));
          arrayMdFile = arrayMdFile.concat(arrayMd);
        });
      }
    } 
    
  };
  console.log(getMdFiles('C:\Users\TecnoBot\Desktop\md links\DEV001-md-links\test\exampleFiles\example.md')); 
  // FUNCION PARA RUTAS ABSOLUTAS DE LOS ARCHIVOS ENCONTRADOS
/*const getLinksMd = (inputpath )=> {
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
console.log(getLinksMd('./exampleFiles/exampleFile.md'));

  //console.log(getLinksMd('\DEV001-md-links\\exampleFiles\\exampleFile.md'));*/

  module.exports = {
    getAbsoluteRoute,
    changefAbsoluteRoute,
    pathIsFile,
    isMdFile,
    getMdFiles,
    getLinksMd,
};


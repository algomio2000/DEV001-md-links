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
   //console.log(changefAbsoluteRoute('./exampleFiles/exampleFile.md'));

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
const  isMdFile  =  ( ruta )  =>  ( ruta . extname ( ruta )  ===  '.md' ) ;
   //
  const getMdFiles = (routeFile) => {
    let arrayMdFile = [];
    const route = getAbsoluteRoute(routeFile);
    if (pathIsFile(route)) {
      if (isMdFile(route)) {
        arrayMdFile.push(route);
      }
    } else {
      const arrayOfFiles = fs.readdirSync(route);
      arrayOfFiles.forEach((file) => {
        const arrayMd = getMdFiles(path.join(route, file));
        arrayMdFile = arrayMdFile.concat(arrayMd);
      });
    }
    return arrayMdFile;
  };
  console.log(getMdFiles('\DEV001-md-links\\exampleFiles\\exampleFile.md'));

  module.exports = {
    getAbsoluteRoute,
    changefAbsoluteRoute,
    pathIsFile,
    isMdFile,
    getMdFiles,
};


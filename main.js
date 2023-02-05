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
  }
  console.log(pathIsFile('\DEV001-md-links\\exampleFiles\\exampleFile.md'));
  
  //buscar archivos md
  const getMdFiles = (pathFile) => {
    let arrayMdFile = [];
    const route = getAbsoluteRoute(pathFile);
    if (isFile(inputpath)) {
      if (isMdFile(inputpath)) {
        arrayMdFile.push(inputpath);
      }
    } else {
      const arrayOfFiles = fs.readdirSync(inputpath);
      arrayOfFiles.forEach((file) => {
        const arrayMd = getMdFiles(path.join(inputpath, file));
        arrayMdFile = arrayMdFile.concat(arrayMd);
      });
    }
    return arrayMdFile;
  };
console.log(arrayMdFile('./test_example/file1.md'));
module.exports = {
    getAbsoluteRoute,
    changefAbsoluteRoute,
    pathIsFile,
    getLinksMd,
};


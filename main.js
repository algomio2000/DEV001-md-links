const fs = require('fs');
const path = require('path');
const marked = require('marked');

// comprobando si la ruta es valida
const isValidRoute = (inputpath) => {
    if (fs.existsSync(inputpath)) {
        //console.log("Funciona carajo");
        return true;
    } else {
        //console.log("Pailangas");
        return false;
    }
}; console.log(isValidRoute('C:\\Users\\balry\\OneDrive\\Documentos\\Laboratoria\\Proyecto4-MDLinks\\DEV001-md-links\\exampleFiles\\exampleFile.md'));

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
//console.log(getAbsoluteRoute('C:\\Users\\balry\\OneDrive\\Documentos\\Laboratoria\\Proyecto4-MDLinks\\DEV001-md-links\\exampleFiles\\exampleFile.md'));

const pathIsDirectory = (inputpath) => {
    return fs.lstatSync(inputpath).isDirectory()
}
//console.log(pathIsDirectory('\DEV001-md-links\\exampleFiles\\exampleFile.md'));
// payhIsDirectorio es true de volver un cacth, por ahora no estamos leyendo directorios
  //averiguar si es archivo
  const pathIsFile = function (inputpath){
    return fs.statSync(inputpath).isFile()
  }
  //console.log(pathIsFile('C:\Users\TecnoBot Academia\Desktop\md-links\DEV001-md-links-1\index.js'));
  
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
    isValidRoute,
    getAbsoluteRoute,
    changefAbsoluteRoute
};


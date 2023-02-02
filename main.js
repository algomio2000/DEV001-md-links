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

  // FUNCION PARA SABER SI ES UN ARCHIVO .MD
const isMdFile = (route) => (path.extname(route) === '.md');

  //console.log(pathIsFile('C:/Users/TecnoBot/Downloads/Recibo de matricula.pdf'));
  // FUNCION QUE BUSCA LOS ARCHIVOS MD
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
    marked(file, { renderer });
  });
}
console.log(getLinksMd('C:\Users\TecnoBot\Desktop\md links\DEV001-md-links\test\exampleFiles\example.md'));
  

module.exports = {
    getAbsoluteRoute,
    changefAbsoluteRoute,
    pathIsFile,
    getLinksMd,
};


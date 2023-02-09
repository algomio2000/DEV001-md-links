const fs = require('fs');
const path = require('path');
const marked = require('marked');
const fetch = require ('node-fetch');


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
//console.log(pathIsFile('C:\\Users\\TecnoBot Academia\\Desktop\\md-links\\DEV001-md-links-1\\coverage'));

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

// FUNCION para extraer los links de los archivos md
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
/*const arrayofLinks = [{
href: 'https://www.digitalocean.com/community/tutorials/introduction-to-programming-with-python',
text: 'Introducción a la programación',
path: 'C:\\Users\\TecnoBot\\Desktop\\md links\\DEV001-md-links\\test\\exampleFiles\\ejemplo2.md'
},
{
href: 'https://www.digitalocean.com/community/tutorials/what-is-a-programming-language',
text: '¿Qué es un lenguaje de programación?',
path: 'C:\\Users\\TecnoBot\\Desktop\\md links\\DEV001-md-links\\test\\exampleFiles\\ejemplo2.md'
},
{
href: 'https://www.digitalocean.com/community/tutorials/types-of-programming-languages',
text: 'Tipos de lenguajes de programación',
path: 'C:\\Users\\TecnoBot\\Desktop\\md links\\DEV001-md-links\\test\\exampleFiles\\ejemplo2.md'
},
{
href: 'https://www.digitalocean.com/community/tutorials/what-is-git-and-how-to-use-it',
text: 'Git',
path: 'C:\\Users\\TecnoBot\\Desktop\\md links\\DEV001-md-links\\test\\exampleFiles\\ejemplo2.md'
},
{
href: 'https://www.digitalocean.com/community/tutorials/command-line-tools-for-developers',
text: 'Herramientas de línea de comandos',
path: 'C:\\Users\\TecnoBot\\Desktop\\md links\\DEV001-md-links\\test\\exampleFiles\\ejemplo2.md'
},
{
href: 'https://www.digitalocean.com/',
text: 'Editores de código',
path: 'C:\\Users\\TecnoBot\\Desktop\\md links\\DEV001-md-links\\test\\exampleFiles\\ejemplo2.md'
}
]*/
//funcion para revisar el stados de los enlaces y devuelva el codigo correcto
//y ok o mensaje de error
const getStatus = (arrayofLinks) => {
  let promises = arrayofLinks.map((link) => fetch(link.href)

  .then((response) => {
      if (response.status >= 200 && response.status < 400){
        
          return {
              ...link,
              status: response.status,
              message: response.statusText,
          }
      }else {return {
        ...link,
        status: 'FAIL',
        message: 'NOT FOUND'
    }}   
  })
  .catch(() => {
      return "Error"
          
  })) 
  return Promise.all(promises);
}
/*getStatus(arrayofLinks)
.then((response) => console.log(response))
.catch(error => console.log(error));*/






module.exports = {
  getAbsoluteRoute,
  pathIsFile,
  isMdFile,
  getMdFiles,
  getLinksMd,
  getStatus,
};



const fs = require('fs');
const path = require('path');
const {
  getAbsoluteRoute,
  pathIsFile,
  isMdFile,
  getMdFiles,
  getLinksMd,
  getStatus,
} = require('./main.js')

const mdLinks = (path, options) => {
  return new Promise((resolve, reject) => {
    //identifica si la ruta existe
    if (fs.existsSync(path)) {
      const absoluteRoute = getAbsoluteRoute(path)
      const mdArray = getMdFiles(absoluteRoute)
      if (options.validate) {
        const arrayLinks = getLinksMd(mdArray);
        resolve(getStatus(arrayLinks))
      } else {
        resolve(getLinksMd(mdArray))
      }
    } else {
      reject('La ruta no es valida')
    }
  })
};


module.exports = {
  mdLinks,
};
/*mdLinks('test\\exampleFiles\\ejemplo2.md',{validate:true}).then((response) => {
  console.log(response)
});*/
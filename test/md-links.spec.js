const {mdLinks} = require('../src/index.js');


describe(('mdLinks'), () => {

  it('should...', () => {
    console.log('FIX ME!');
  });
/*it ('deberia devolver una promesa',() => {
  expect(mdLinks()).toBe(typeof Promise);
});*/
it('deberia rechazar la promesa cuando el path no existe',() =>{
  return mdLinks('/tolima/ibague/casasVerdes.md').catch((error)=>{
    expect(error).toBe('La ruta no es valida');
  })
 
});
});

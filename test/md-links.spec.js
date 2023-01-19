const {mdLinks} = require('../index.js');
const {ruta} = require('../main.js');
const {absoluta} = require('../main.js')

describe('mdLinks', () => {

  it('should...', () => {
    console.log('FIX ME!');
  });
/*it ('deberia devolver una promesa',() => {
  expect(mdLinks()).toBe(typeof Promise);
});*/
it('deberia rechazar la promesa cuando el path no existe',() =>{
  return mdLinks('/tolima/ibague/casasVerdes.md').catch((error)=>{
    expect(error).toBe('La ruta no es valida');
  });
 
});
});
describe(absoluta)
it('debera retornar tru o false si la ruta es o no absoluta', ()=>{
  expect(absoluta('./test_example')).toBe('false');
  });

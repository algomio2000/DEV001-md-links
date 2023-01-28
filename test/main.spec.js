const{main} = require('../src/main.js');
const {path}= require('path');
//const {getAbsoluteRoute}= require('../src/main');


// test de la funcion que valida la ruta
describe('isValidRoute', () => {
  const pathTrue = './exampleFiles/exampleFile.md';
  const pathFalse = './thisPath/doesNotExist';
  
  it('Deberia ser una funcion', () => {
    expect(typeof main.isValidRoute).toBe('function');
  });
  it('Deberia retornar true si la ruta es valida', () => {
    expect(main.isValidRoute(pathTrue)).toBe(true);
  });
  it('Deberia retornar false si la ruta no es valida', () => {
    expect(main.isValidRoute(pathFalse)).toBe(false);
  });
});

  // Obtencion de la ruta absoluta
describe('Funcion para obtener la ruta absoluta', () => {
    it('Deberia ser una funcion', () => {
      expect(typeof getAbsoluteRoute).toBe('function');
    });
    it('Debería retornar la ruta si ya es absoluta', () => {
      expect(getAbsoluteRoute('D:\\LABORATORIA\\DEV001\\test_example')).toBe('D:\\LABORATORIA\\LIM012-fe-md-links\\test_example');
    });
    it('Debería retornar la ruta absoluta si es relativa', () => {
      expect(getAbsoluteRoute('./data.js')).toBe('/data/data.js');
    });
  });
const {isValidRoute} = require('../src/main.js');
const {assert} = require('assert');
const {route} = require('../src/main.js');
const {getAbsoluteRoute}= require('../src/main.js');


// test de la funcion que valida la ruta
describe('isValidRoute()', () => {
    it('Debería devolver true cuando la ruta dada sea válida', () => {
      const validRoute = './test/example.txt';
     const result = isValidRoute(validRoute);
  
      assert.tobe(result,true);
    });
  
    it('Debería devolver false cuando la ruta dada sea válida', () => {
      const invalidRoute = '/tolima/ibague/casasVerdes.md';
      const result = isValidRoute(invalidRoute);
  
      assert.tobe(result,false);
    });
  });
  
  /*// Obtencion de la ruta absoluta
describe('Funcion para obtener la ruta absoluta', () => {
    it('Deberia ser una funcion', () => {
      expect(typeof route.getAbsoluteRoute).toBe('function');
    });
    it('Debería retornar la ruta si ya es absoluta', () => {
      expect(route.getAbsoluteRoute('D:\\LABORATORIA\\LIM012-fe-md-links\\test_example')).toBe('D:\\LABORATORIA\\LIM012-fe-md-links\\test_example');
    });
    it('Debería retornar la ruta absoluta si es relativa', () => {
      expect(route.getAbsoluteRoute('./test_example')).toBe('D:\\LABORATORIA\\LIM012-fe-md-links\\test_example');
    });
  });*/
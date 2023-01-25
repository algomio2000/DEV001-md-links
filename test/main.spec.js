const {isValidRoute} = require('../src/main.js');
const {getAbsoluteRoute}= require('../src/main.js');


// test de la funcion que valida la ruta
describe('isValidRoute', () => {
  it('Deberia ser una funcion', () => {
    expect(typeof isValidRoute).toBe('function');
  });
  it('Deberia retornar true si la ruta es valida', () => {
    expect(isValidRoute('./test_example')).toBe(true);
  });
  it('Deberia retornar false si la ruta no es valida', () => {
    expect(isValidRoute('./test/pruebas/pruebita/prueba.md')).toBe(false);
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
      expect(getAbsoluteRoute('./test_example')).toBe('D:\\LABORATORIA\\DEV001\\test_example');
    });
  });
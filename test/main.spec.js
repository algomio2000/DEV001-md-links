const main = require('../main.js');
const path = require('path');

describe('isValidRoute', () => {

    const routeTrue = './exampleFiles/exampleFile.md';
    const routeFalse = './thisPath/doesNotExist';

    it('should be a function', () => {
        expect(typeof main.isValidRoute).toBe('function');
    });

    it('deberia retornar true si la ruta existe', () => {
        expect(main.isValidRoute(routeTrue)).toBe(true);
    });

    it('deberia retornar false si la ruta no existe', () => {
        expect(main.isValidRoute(routeFalse)).toBe(false);
    });
});

describe('es una funcion', () => {
    const absoluteRoute = 'C:\\Users\\TecnoBot Academia\\Desktop\\md-links\\DEV001-md-links-1\\exampleFiles\\exampleFile.md';
    const routeTrue = './exampleFiles/exampleFile.md';

    expect(typeof main.getAbsoluteRoute).toBe('function');

    it('deberia reornar true si la ruta es absoluta', () => {

        expect(main.getAbsoluteRoute(absoluteRoute)).toBe(true);
    });
    it('deberia retornar false si la ruta no es absoluta', () => {
        expect(main.getAbsoluteRoute(routeTrue)).toBe(false);
    });
});
    describe('es una funcion', () => {
        const absoluteRoute ='C:\\Users\\TecnoBot Academia\\Desktop\\md-links\\DEV001-md-links-1\\exampleFiles\\exampleFile.md';
        const routeTrue = './exampleFiles/exampleFile.md';
    
        expect(typeof main.changefAbsoluteRoute).toBe('function');
    
        it('deberia retornar una ruta absoluta', () => {
    
            expect(main.changefAbsoluteRoute(routeTrue)).toBe(absoluteRoute);
        });
        
});

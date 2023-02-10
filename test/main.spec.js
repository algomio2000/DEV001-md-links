const main = require('../main.js');
const path = require('path');
const { equal } = require('assert');
//const getStatus = require('../main.js')


describe('es una funcion', () => {
    const absoluteRoute = 'C:\\Users\\TecnoBot Academia\\Desktop\\md-links\\DEV001-md-links-1\\test\\exampleFiles\\example.md';
    const routerelative = 'test\\exampleFiles\\example.md';

    expect(typeof main.getAbsoluteRoute).toBe('function');

    it('deberia reornar una ruta absoluta si la rfuta es relativa ', () => {

        expect(main.getAbsoluteRoute(routerelative)).toBe(absoluteRoute);
    });

});


describe('es una funcion', () => {
    const routeFalse = 'C:\\Users\\TecnoBot Academia\\Desktop\\md-links\\DEV001-md-links-1\\coverage';
    const routeTrue = 'test\\exampleFiles\\example.md';

    expect(typeof main.pathIsFile).toBe('function');

    it('deberia retornar true si la ruta es un archivo', () => {

        expect(main.pathIsFile(routeTrue)).toBe(true);
    });
    it('deberia retornar false si la ruta no es un archivo', () => {

        expect(main.pathIsFile(routeFalse)).toBe(false);
    });
});

it('getStatus debe devolver el código de estado y el mensaje correctos para cada enlace', () => {
    const arrayOfLinks = [
        { href: 'https://www.digitalocean.com/community/tutorials/command-line-tools-for-developers' },
        { href: 'https://www.digitalocean.com/community/tutorials/command-line-tools-for-developers' }
    ];
    return main.getStatus(arrayOfLinks).then(results => {
    
    
            expect(results).toBe([
                { href: 'https://www.digitalocean.com/community/tutorials/command-line-tools-for-developers', status: 'FAIL', message: 'NOT FOUND' },
                { href: 'https://www.digitalocean.com/community/tutorials/command-line-tools-for-developers', status: 200, message: 'OK' }
            ]);
        });
    });

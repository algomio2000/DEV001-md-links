const main = require('../main.js');
const path = require('path');
const { equal } = require('assert');
//const getStatus = require('../main.js')


describe('es una funcion', () => {
    const absoluteRoute = 'C:\\Users\\TecnoBot\\Desktop\\md links\\DEV001-md-links\\DEV001-md-links\\test\\exampleFiles\\ejemplo2.md'
    const routerelative = 'DEV001-md-links\\test\\exampleFiles\\ejemplo2.md'
    expect(typeof main.getAbsoluteRoute).toBe('function');

    it('deberia reornar una ruta absoluta si la ruta es relativa ', () => {

        expect(main.getAbsoluteRoute(routerelative)).toEqual(absoluteRoute);
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
describe('es una funcion', () => {
    const routeFalse = 'C:\\Users\\TecnoBot Academia\\Desktop\\md-links\\DEV001-md-links-1\\coverage';
    const routeTrue = 'test\\exampleFiles\\example.md';

    expect(typeof main.isMdFile).toBe('function');

    it('deberia retornar true si la ruta es un archivo md', () => {

        expect(main.isMdFile(routeTrue)).toBe(true);
    });
    it('deberia retornar false si la ruta no es un archivo md', () => {

        expect(main.isMdFile(routeFalse)).toBe(false);
    });
});


describe('es una funcion', () => {
    const routeMD = 'test\\exampleFiles\\ejemplo2.md'
    const FileMd = [
        'C:\\Users\\TecnoBot Academia\\Desktop\\md-links\\DEV001-md-links-1\\test\\exampleFiles\\ejemplo2.md'
    ]
    expect( typeof main.getMdFiles).toBe('function');

    it('getMdFiles debe devolver un array con los arcivos md encontrados', () => {

        expect(main.getMdFiles(routeMD)).toEqual(FileMd);
    })
});

describe('es una funcion', () => {
    const arraylink = [
        {
          href: 'https://www.digitalocean.com/community/tutorials/what-is-git-and-how-to-use-it',
          text: 'Git',
          path: 'C:\\Users\\TecnoBot Academia\\Desktop\\md-links\\DEV001-md-links-1\\test\\exampleFiles\\example3.md'
        },
        {
          href: 'https://www.digitalocean.com/community/tutorials/command-line-tools-for-developers',
          text: 'Herramientas de línea de comandos',
          path: 'C:\\Users\\TecnoBot Academia\\Desktop\\md-links\\DEV001-md-links-1\\test\\exampleFiles\\example3.md'
        },
        {
          href: 'https://www.digitalocean.com/',
          text: 'Editores de código',
          path: 'C:\\Users\\TecnoBot Academia\\Desktop\\md-links\\DEV001-md-links-1\\test\\exampleFiles\\example3.md'
        }
      ]
    const FileMd = [
        'C:\\Users\\TecnoBot Academia\\Desktop\\md-links\\DEV001-md-links-1\\test\\exampleFiles\\example3.md'
    ]
    expect( typeof main.getLinksMd).toBe('function');

    it('getMdFiles debe devolver un array con los arcivos md encontrados', () => {

        expect(main.getLinksMd(FileMd)).toEqual(arraylink);
    })
});


it('getStatus debe devolver el código de estado y el mensaje correctos para cada enlace', () => {
    const arrayOfLinks = [
        { href: 'https://www.digitalocean.com/community/tutorials/what-is-a-programming-language', },
        { href: 'https://www.digitalocean.com/' }
    ];
    return main.getStatus(arrayOfLinks).then(results => {


        expect(results).toEqual([
            {
                href: 'https://www.digitalocean.com/community/tutorials/what-is-a-programming-language',
                status: 'FAIL',
                message: 'NOT FOUND'
            },
            {
                href: 'https://www.digitalocean.com/',
                status: 200,
                message: 'OK'
            }
        ]);
    });
});

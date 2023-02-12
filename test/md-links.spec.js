const { mdLinks } = require('../index.js');


describe('mdLinks', () => {
  const ruta = 'C:\\Users\\TecnoBot Academia\\Desktop\\md-links\\DEV001-md-links-1\\test\\exampleFiles\ejemplo2.md'
  const arrayLinks = [
    {
      href: 'https://www.digitalocean.com/community/tutorials/introduction-to-programming-with-python',
      text: 'Introducción a la programación',
      path: 'C:\\Users\\TecnoBot Academia\\Desktop\\md-links\\DEV001-md-links-1\\test\\exampleFiles\\ejemplo2.md',

    },
    {
      href: 'https://www.digitalocean.com/community/tutorials/what-is-a-programming-language',
      text: '¿Qué es un lenguaje de programación?',
      path: 'C:\\Users\\TecnoBot Academia\\Desktop\\md-links\\DEV001-md-links-1\\test\\exampleFiles\\ejemplo2.md',

    },
    {
      href: 'https://www.digitalocean.com/community/tutorials/types-of-programming-languages',
      text: 'Tipos de lenguajes de programación',
      path: 'C:\\Users\\TecnoBot Academia\\Desktop\\md-links\\DEV001-md-links-1\\test\\exampleFiles\\ejemplo2.md',

    },
    {
      href: 'https://www.digitalocean.com/community/tutorials/what-is-git-and-how-to-use-it',
      text: 'Git',
      path: 'C:\\Users\\TecnoBot Academia\\Desktop\\md-links\\DEV001-md-links-1\\test\\exampleFiles\\ejemplo2.md',

    },
    {
      href: 'https://www.digitalocean.com/community/tutorials/command-line-tools-for-developers',
      text: 'Herramientas de línea de comandos',
      path: 'C:\\Users\\TecnoBot Academia\\Desktop\\md-links\\DEV001-md-links-1\\test\\exampleFiles\\ejemplo2.md',
    },
    {
      href: 'https://www.digitalocean.com/',
      text: 'Editores de código',
      path: 'C:\\Users\\TecnoBot Academia\\Desktop\\md-links\\DEV001-md-links-1\\test\\exampleFiles\\ejemplo2.md',

    }
  ]

  const arrayStatus = [
    {
      href: 'https://www.digitalocean.com/community/tutorials/introduction-to-programming-with-python',
      text: 'Introducción a la programación',
      path: 'C:\\Users\\TecnoBot Academia\\Desktop\\md-links\\DEV001-md-links-1\\test\\exampleFiles\\ejemplo2.md',
      status: 'FAIL',
      message: 'NOT FOUND'
    },
    {
      href: 'https://www.digitalocean.com/community/tutorials/what-is-a-programming-language',
      text: '¿Qué es un lenguaje de programación?',
      path: 'C:\\Users\\TecnoBot Academia\\Desktop\\md-links\\DEV001-md-links-1\\test\\exampleFiles\\ejemplo2.md',
      status: 'FAIL',
      message: 'NOT FOUND'
    },
    {
      href: 'https://www.digitalocean.com/community/tutorials/types-of-programming-languages',
      text: 'Tipos de lenguajes de programación',
      path: 'C:\\Users\\TecnoBot Academia\\Desktop\\md-links\\DEV001-md-links-1\\test\\exampleFiles\\ejemplo2.md',
      status: 'FAIL',
      message: 'NOT FOUND'
    },
    {
      href: 'https://www.digitalocean.com/community/tutorials/what-is-git-and-how-to-use-it',
      text: 'Git',
      path: 'C:\\Users\\TecnoBot Academia\\Desktop\\md-links\\DEV001-md-links-1\\test\\exampleFiles\\ejemplo2.md',
      status: 'FAIL',
      message: 'NOT FOUND'
    },
    {
      href: 'https://www.digitalocean.com/community/tutorials/command-line-tools-for-developers',
      text: 'Herramientas de línea de comandos',
      path: 'C:\\Users\\TecnoBot Academia\\Desktop\\md-links\\DEV001-md-links-1\\test\\exampleFiles\\ejemplo2.md',
      status: 'FAIL',
      message: 'NOT FOUND'
    },
    {
      href: 'https://www.digitalocean.com/',
      text: 'Editores de código',
      path: 'C:\\Users\\TecnoBot Academia\\Desktop\\md-links\\DEV001-md-links-1\\test\\exampleFiles\\ejemplo2.md',
      status: 200,
      message: 'OK'
    }
  ]



  /*it('deberia devolver una promesa', () => {
    expect(mdLinks()).toBe(typeof Promise);
  });*/
  it('es una funcion', () => {
    expect(typeof mdLinks).toBe('function');
  }); 

  it('deberia retornar un array que contenga los links con (href, text, file) cuando el validate es false', () => {
    return (mdLinks(ruta, { validate: false })).then((res) => {
      expect(res).toEqual(arrayLinks);
    })
  });

  it('deberia retornar un array que contenga los liks con (href, text, file) y status OK o failed cuando el validate es true', () => {
    return (mdLinks(ruta, { validate: true })).then((res) => {
      expect(res).toEqual(arrayStatus);
    })
  })

  it('deberia rechazar la promesa cuando el path no existe', () => {
    return mdLinks('/tolima/ibague/casasVerdes.md').catch((error) => {
      expect(error).toBe('La ruta no es valida');
    });

  });
});

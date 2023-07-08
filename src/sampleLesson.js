export const sampleLessons = [
  {
    id: 0,
    title: 'Variables',
    slug: 'variables',
    description: 'En este curso aprenderas a declarar variables en JavaScript',
    lessons: [
      {
        type: 'Teoric',
        ovaMessage: 'Concentrate!',
        ovaSide: 'right',
        content: [
          {
            order: 1,
            type: 'title',
            content: 'Variables en JavaScript',
          },
          {
            order: 1,
            type: 'paragraph',
            content:
              'Una variable es un nombre dado a una ubicación de memoria. Es la unidad básica de almacenamiento en un programa. Las variables también las podemos ver como un deposito donde se almacena un valor y esta constituida por un nombre, un tipo ya sea numérico, cadena de caracteres, Booleano, entre otros. JavaScript puede almacenar los siguientes valores: Números: 5, 6.5, 7 etc. Valores Reales: 1.24, 2.90, 5.01, etc. Cadena de caracteres: "Hola Estrada Web Group" etc. Booleano o valores lógicos: verdadero o falso (true, false). Además de los tipos de datos de datos anteriores, JavaScript también admite dos tipos de datos más, nulos y no definidos y un objeto de tipo de datos compuesto. Aprenderemos sobre estos tipos de datos a detalle en otros artículos.',
          },
          {
            order: 2,
            type: 'title',
            content: 'Características de las variables en JavaScript',
          },
          {
            order: 3,
            type: 'paragraph',
            content:
              'El valor almacenado en una variable se puede cambiar durante la ejecución del programa. Una variable es solo un nombre dado a una ubicación de memoria, todas las operaciones realizadas en la variable afectan a esa ubicación de memoria. En JavaScript, todas las variables se deben declarar antes de poder utilizarlas.',
          },
          {
            order: 4,
            type: 'title',
            content: 'Declaración de variables en JavaScript',
          },
          {
            order: 5,
            type: 'paragraph',
            content:
              'La declaración de una variable en JavaScript se realiza mediante la palabra reservada var. La sintaxis para declarar una variable es:',
          },
          {
            order: 6,
            type: 'snippet',
            content:
              'var nombre; var edad; var sueldo; var estadoCivil; var fechaNacimiento; var direccion; var telefono; var email; var sexo; var nacionalidad',
          },
        ],
      },
      {
        type: 'practical',
        ovaMessage: 'Tu puedes!',
        ovaSide: 'left',
        content: [
          {
            order: 1,
            type: 'title',
            content: 'Desafio de crear una variable en JavaScript',
          },
          {
            order: 2,
            type: 'paragraph',
            content:
              'En este desafio deberas corregir un error en el codigo para que la variable se declare correctamente.',
          },
          {
            order: 3,
            type: 'code_challenge',
            content: 'avr carro;  ',
          },
        ],
      },
    ],
  },
 
  {
    id: 2,
    title: 'Condicionales',
    slug: 'condicionales',
    description:
      'En esta pagina aprenderas a utilizar condicionales en JavaScript',
    lessons: [
      {
        type: 'teoric',
        ovaMessage: 'Esto es muy importante!',
        ovaSide: 'left',
        content: [
          {
            order: 1,
            type: 'title',
            content: 'Condicional IF',
          },
          {
            order: 2,
            type: 'paragraph',
            content:
              'Un if en programación se utiliza para evaluar una expresión condicional: si se cumple la condición (es verdadera), ejecutará un bloque de código. Si es falsa, es posible ejecutar otras sentencias. Como hemos dicho, la condición es una condición lógica, sólo devolverá true o false, y se ejecutará si su valor es true. ¿Cómo funciona un if? Primero de todo, se evalúa la condición. Si el resultado se cumple, se ejecutará el código. Si el resultado no es true, el programa continúa con la sentencia siguiente. Lo habitual es que, si hay varias instrucciones que interesan ejecutar dónde de la evaluación, estén agrupadas con llaves { }. Utilizando solo IF.',
          },
          {
            order: 3,
            type: 'snippet',
            content: 'if(condición){}',
          },
          {
            order: 4,
            type: 'paragraph',
            content:
              'El condicional IF se puede utilizar sin el else. Si el programa o condicion a realizar lo indica se utilizará el IF sin colocar la parte del else que en otro desafio se explicará.',
          },
        ],
      },
      {
        type: 'practical',
        ovaMessage: 'Esto es pan comido!',
        ovaSide: 'left',
        content: [
          {
            order: 1,
            type: 'title',
            content: 'Desafio de condicionales',
          },
          {
            order: 2,
            type: 'paragraph',
            content:
              'En este desafio deberas modificar el condicional establecido, para que esté sin error de sintaxis y que se ejecute correctamente.',
          },
          {
            order: 3,
            type: 'code_challenge',
            content: 'if(i=?){',
          },
        ],
      },
    ],
  },
  {
    id: 2,
    title: 'Condicional if anidado',
    slug: 'condicional-if-anidado',
    description:
      'En esta pagina aprenderas a utilizar condicionales if anidados en JavaScript',
    lessons: [
      {
        type: 'teoric',
        ovaMessage: 'Sigue así!',
        ovaSide: 'left',
        content: [
          {
            order: 1,
            type: 'title',
            content: 'Condicional IF anidado',
          },
          {
            order: 2,
            type: 'paragraph',
            content:
              'if anidado: Un if anidado es una sentencia if que está dentro de otro if o else. Anidado: Si las sentencias significan una sentencia if dentro de una sentencia if. Sí, JavaScript nos permite anidar las sentencias if dentro de las sentencias if, es decir, podemos colocar una sentencia if dentro de otra sentencia if.',
          },
          {
            order: 3,
            type: 'snippet',
            content: 'if (condición1){if (condición2)}',
          },
        ],
      },
      {
        type: 'practical',
        ovaMessage: 'Sigue así!',
        ovaSide: 'left',
        content: [
          {
            order: 1,
            type: 'title',
            content: 'Desafio de condicional if anidado',
          },
          {
            order: 2,
            type: 'paragraph',
            content:
              'En este desafio deberas modificar un condicional if anidado, para que este sin error de sintaxis y que se ejecute correctamente.',
          },
          {
            order: 3,
            type: 'code_challenge',
            content: 'if (sexo="mujer"){if sexo"hombre"}',
          },
        ],
      },
    ],
  },
  {
    id: 3,
    title: 'Condicional if else',
    slug: 'condicional-if-else',
    description:
      'En este apartado aprenderas a utilizar condicionales if else en JavaScript',
    lessons: [
      {
        type: 'teoric',
        ovaMessage: 'Sigue así!',
        ovaSide: 'left',
        content: [
          {
            order: 1,
            type: 'title',
            content: 'Condicional if-else',
          },
          {
            order: 2,
            type: 'paragraph',
            content:
              'La sentencia if sola nos dice que si una condición es verdadera ejecutará un bloque de declaraciones o sentencias JavaScript y si la condición es falsa no lo hará. Pero qué pasa si queremos hacer algo más si la condición es falsa. Aquí viene la otra declaración. Podemos usar la instrucción else con la instrucción if para ejecutar un bloque de código cuando la condición es falsa.',
          },
          {
            order: 3,
            type: 'snippet',
            content: 'if (condición){} else {}',
          },
        ],
      },
      {
        type: 'practical',
        ovaMessage: 'Sigue así!',
        ovaSide: 'left',
        content: [
          {
            order: 1,
            type: 'title',
            content: 'Desafio de condicional if-else',
          },
          {
            order: 2,
            type: 'paragraph',
            content:
              'En este desafio deberas modificar un condicional if-else cualquiera, para que este sin error de sintaxis y que se ejecute correctamente.',
          },
          {
            order: 3,
            type: 'code_challenge',
            content:
              ' if (x > y) {    alert("Hello world!");  } seel {    alert("Goodbye");  }',
          },
        ],
      },
    ],
  },
  {
    id: 4,
    title: 'Bucle FOR',
    slug: 'bucle for',
    description: 'En esta pagina aprenderas a utilizar bucle FOR en JavaScript',
    lessons: [
      {
        type: 'teoric',
        ovaMessage: 'Los ciclos son imprescindibles!',
        ovaSide: 'left',
        content: [
          {
            order: 1,
            type: 'title',
            content: 'Bucle FOR',
          },
          {
            order: 2,
            type: 'paragraph',
            content: 'El bucle "for" es una estructura de control utilizada en programación para repetir un conjunto de instrucciones un número determinado de veces. Se compone de tres partes: la inicialización, que establece el valor inicial de una variable de control; la condición de continuación, que define la condición que debe cumplirse para que el bucle se siga ejecutando; y el incremento o decremento, que modifica el valor de la variable de control en cada iteración. De esta manera, el bucle "for" permite automatizar la repetición de tareas y facilita el procesamiento de listas, arrays o secuencias de datos.'
          },
          {
            order: 3,
            type:'Title',
            content: 'Sintaxis del bucle FOR',
          },
          {
            order: 4,
            type: 'snippet',
            content: 'for (inicialización; condición; expresión final) { código a ejecutar }',
          },
        ]
      },
      {
        type: 'practical',
        ovaMessage: 'WOW! Esto se repite',
        ovaSide: 'left',
        content: [
          {
            order: 1,
            type: 'title',
            content: 'Desafio de bucle FOR',
          },
          {
            order: 2,
            type: 'paragraph',
            content: 'En este desafio deberas modificar el bucle establecido, para que esté sin error de sintaxis y que se ejecute correctamente mediante el boton de comprobar.',
          },
          {
            order: 3,
            type: 'code_challenge',
            content: 'for(i=0; i<10 ){',
          }
        ]
      }
    ],
  },
  {
    id: 5,
    title: 'Bucle WHILE',
    slug: 'bucle while',
    description:
      'En esta pagina aprenderas a utilizar bucle WHILE en JavaScript',
    lessons: [
      {
        type: 'teoric',
        ovaMessage: 'Los ciclos son imprescindibles!',
        ovaSide: 'right',
        content: [
          {
            order: 1,
            type: 'title',
            content: 'Estructura de iteración WHILE',
          },
          {
            order: 2,
            type: 'paragraph',
            content:
              'La estructura de control while es una estructura de control que permite repetir un bloque de instrucciones mientras que se cumpla una determinada condición.',
          },
          {
            order: 3,
            type: 'paragraph',
            content:
              'La condición se evalúa antes de ejecutar el bloque de instrucciones. Si la condición es verdadera, se ejecuta el bloque de instrucciones. Si la condición es falsa, no se ejecuta el bloque de instrucciones.',
          },
          {
            order: 4,
            type: 'snippet',
            content: 'while (condición) { // Código a ejecutar }',
          },
        ],
      },
      {
        type: 'practical',
        ovaMessage: 'Concentrateeee!',
        ovaSide: 'left',
        content: [
          {
            order: 1,
            type: 'title',
            content: 'Desafio de iteración WHILE',
          },
          {
            order: 2,
            type: 'paragraph',
            content:
              'En este desafio deberas crear un bucle while cualquiera, sin error de sintaxis y que se ejecute correctamente. Puedes utilizar cualquier tipo de condicional que hayas aprendido hasta ahora.',
          },
          {
            order: 3,
            type: 'code_challenge',
            content: 'i=2; while (){ console.log(i); }',
          },
        ],
      },
    ],
  },
  {
    id: 6,
    title: 'Funciones',
    slug: 'funciones',
    description: 'En esta pagina aprenderas a utilizar funciones en JavaScript',
    lessons: [
      {
        type: 'teoric',
        ovaMessage: 'Se viene lo bueno!',
        ovaSide: 'right',
        content: [
          {
            order: 1,
            type: 'title',
            content: 'Funciones',
          },
          {
            order: 2,
            type: 'paragraph',
            content:
              'Una función es un bloque de código diseñado para realizar una tarea específica. Una función se ejecuta cuando algo la invoca (la llama).',
          },
          {
            order: 3,
            type: 'paragraph',
            content:
              'En JavaScript, las funciones se definen con la palabra clave function, seguida de un nombre, seguido de paréntesis ().',
          },
          {
            order: 4,
            type: 'paragraph',
            content: 'Las funciones pueden tomar parámetros (argumentos).',
          },
          {
            order: 5,
            type: 'paragraph',
            content:
              'Los parámetros se enumeran entre paréntesis () en la definición de la función.',
          },
          {
            order: 6,
            type: 'paragraph',
            content:
              'La función anterior (funcion1) tiene un parámetro llamado nombre. El valor del parámetro se pasa a la función cuando se llama a la función.',
          },
          {
            order: 7,
            type: 'snippet',
            content: 'function funcion1(nombre) { // Código a ejecutar }',
          },
          {
            order: 8,
            type: 'paragraph',
            content:
              'Las funciones a menudo calculan un valor de retorno. El valor de retorno se devuelve de la función.',
          },
          {
            order: 9,
            type: 'paragraph',
            content:
              'La función anterior (funcion1) devuelve el resultado de multiplicar el parámetro x por 2.',
          },
          {
            order: 10,
            type: 'snippet',
            content: 'function funcion1(x) { return 2 * x; }',
          },
        ],
      },
      {
        type: 'practical',
        ovaMessage: 'Vamos que se puede!',
        ovaSide: 'left',
        content: [
          {
            order: 1,
            type: 'title',
            content: 'Desafio de funciones',
          },
          {
            order: 2,
            type: 'paragraph',
            content:
              'En este desafio deberas modificar una funcion, para que este sin error de sintaxis y que se ejecute correctamente.',
          },
          {
            order: 3,
            type: 'code_challenge',
            content: ' funcion1(){ console.log("Hola Mundo"); }',
          },
        ],
      },
    ],
  },
  {
    id: 7,
    title: 'Objetos',
    slug: 'objetos',
    description: 'En esta pagina aprenderas a utilizar objetos en JavaScript',
    lessons: [
      {
        type: 'teoric',
        ovaMessage: 'Los objetos son muy importantes!',
        ovaSide: 'left',
        content: [
          {
            order: 1,
            type: 'title',
            content: 'Objetos',
          },
          {
            order: 2,
            type: 'paragraph',
            content:
              'En JavaScript, casi todo es un objeto. Los objetos son valores en JavaScript. Se debe considerar que los objetos tienen propiedades y métodos. Se Puede acceder a las propiedades de un objeto con un punto (.). Tambien los objetos se pueden definir con llaves {}.',
          },
          {
            order: 4,
            type: 'paragraph',
            content:
              'Las propiedades y los métodos se definen dentro de las llaves. Los objetos JavaScript son contenedores para valores con nombre. Los valores se escriben como pares de nombre: valor (nombre y valor separados por dos puntos). Y ademas los métodos son acciones que se pueden realizar en objetos.',
          },
          {
            order: 5,
            type: 'snippet',
            content:
              'var persona = {nombre: "Juan", apellido: "Perez", edad: 25, colorDeOjos: "azul"};',
          },
          {
            order: 6,
            type: 'paragraph',
            content:
              'Los métodos son acciones que se pueden realizar en objetos. Los métodos se almacenan en propiedades como funciones. Un método es una función almacenada como una propiedad.',
          },
          {
            order: 7,
            type: 'snippet',
            content:
              'var persona = {nombre: "Juan", apellido: "Perez", edad: 25, colorDeOjos: "azul", nombreCompleto: function() { return this.nombre + " " + this.apellido; }};',
          },
          {
            order: 8,
            type: 'paragraph',
            content:
              'El ejemplo anterior define un objeto llamado persona, con cuatro propiedades. Las propiedades son llamadas nombre, apellido, edad y colorDeOjos. El método se llama nombreCompleto y es una función que devuelve el nombre y el apellido de la persona.',
          },
        ],
      },
      {
        type: 'practical',
        ovaMessage: 'Podria ser mas facil?',
        ovaSide: 'right',
        content: [
          {
            order: 1,
            type: 'title',
            content: 'Desafio de objetos',
          },
          {
            order: 2,
            type: 'paragraph',
            content:
              'En este desafio deberas modificar un objeto, para que este sin error de sintaxis y que se ejecute correctamente.',
          },
          {
            order: 3,
            type: 'code_challenge',
            content:
              ' var persona ? {nombre: "Juan", apellido: "Perez", edad: 25, colorDeOjos: "azul"};',
          },
        ],
      },
    ],
  },
  {
    id: 8,
    title: 'Arrays',
    slug: 'arrays',
    description: 'En esta pagina aprenderas a utilizar arrays en JavaScript',
    lessons: [
      {
        type: 'teoric',
        ovaMessage: 'Los arrays son de cuidado',
        ovaSide: 'right',
        content: [
          {
            order: 1,
            type: 'title',
            content: 'Arrays',
          },
          {
            order: 2,
            type: 'paragraph',
            content:
              'Los arrays son objetos JavaScript para almacenar varios valores en una sola variable. Los arrays se pueden escribir con corchetes [ ], Los elementos de los arrays se separan con comas, estos son contenedores para valores y se escriben como pares de nombre: valor (nombre y valor separados por dos puntos).',
          },
          {
            order: 3,
            type: 'snippet',
            content: 'var frutas = ["Manzana", "Banana", "Naranja"];',
          },
          {
            order: 4,
            type: 'paragraph',
            content: 'Los arrays se pueden definir con llaves { }.',
          },
          {
            order: 5,
            type: 'snippet',
            content: 'var frutas = {nombre: "Manzana", color: "Rojo"};',
          },
          {
            order: 6,
            type: 'paragraph',
            content: 'Los arrays se pueden definir con la palabra clave new.',
          },
          {
            order: 7,
            type: 'snippet',
            content: 'var frutas = new Array("Manzana", "Banana", "Naranja");',
          },
        ],
      },
      {
        type: 'practical',
        ovaMessage: 'Puede ser dificil al inicio',
        ovaSide: 'left',
        content: [
          {
            order: 1,
            type: 'title',
            content: 'Desafio de arrays',
          },
          {
            order: 2,
            type: 'paragraph',
            content:
              'En este desafio deberas corregir el array del desafio, para que esté sin error de sintaxis y que se ejecute correctamente',
          },
          {
            order: 3,
            type: 'code_challenge',
            content: 'var frutas ? nombre: "Manzana", color: "Rojo"};',
          },
        ],
      },
    ],
  },
  
  /* {
    id: 8,
    title: 'Bucles',
    slug: 'bucles',
    description: 'En esta pagina aprenderas a utilizar bucles en JavaScript',
    lessons: [
      {
        type: 'teoric',
        content: [
          {
            order: 1,
            type: 'title',
            content: 'Bucles',
          },
          {
            order: 2,
            type: 'paragraph',
            content: 'Los bucles se pueden utilizar para ejecutar un bloque de código varias veces. Los bucles se pueden dividir en tres partes: Inicialización, Condición y Expresión final. Los bucles se pueden dividir en tres partes: Inicialización, Condición y Expresión final.'
          },
          {
            order: 3,
            type: 'snippet',
            content: 'for (inicialización; condición; expresión final) { código a ejecutar }',
          },
          {
            order: 4,
            type: 'paragraph',
            content: 'El bucle for se puede utilizar cuando se conoce el número de iteraciones. El bucle for se puede utilizar cuando se conoce el número de iteraciones.'
          },
          {
            order: 5,
            type: 'snippet',
            content: 'var i = 0; while (i < 10) { console.log(i); i++; }',
          },
          {
            order: 6,
            type: 'paragraph',
            content: 'El bucle while se puede utilizar cuando no se conoce el número de iteraciones. El bucle while se puede utilizar cuando no se conoce el número de iteraciones.'
          },
          {
            order: 7,
            type: 'snippet',
            content: 'var i = 0; do { console.log(i); i++; } while (i < 10);',
          },
        ],
      },
    ],
  },
   */
   /* {
    id: 1,
    title: 'Declaracion de variables en JavaScript',
    slug: 'declaracion-de-variables-en-javascript',
    description:
      'En esta seccion aprenderas a declarar variables en JavaScript',
    lessons: [
      {
        type: 'teoric',
        ovaMessage: 'Sigue así!',
        ovaSide: 'left',
        content: [
          {
            order: 1,
            type: 'title',
            content: 'Declaracion de variables en JavaScript',
          },
          {
            order: 2,
            type: 'paragraph',
            content:
              ' La declaración de una variable en JavaScript se realiza mediante la palabra reservada var. La sintaxis para declarar una variable es: var nombreVariable; donde nombreVariable es el nombre que le daremos a la variable.',
          },
          {
            order: 3,
            type: 'snippet',
            content:
              'var nombre; var edad; var sueldo; var estadoCivil; var fechaNacimiento; var direccion; var telefono; var email; var sexo; var nacionalidad; var profesion; var empresa; var puesto; var direccionEmpresa; var telefonoEmpresa; var emailEmpresa; var salario; var fechaIngreso; var fechaEgreso; var motivoEgreso; var nombreJefe; var telefonoJefe; var emailJefe; var nombrePadre; var nombreMadre; var nombreConyuge; var nombreHijo; var nombreHija; var nombreHermano; var nombreHermana; var nombreAmigo; var nombreAmiga; var nombreVecino; var nombreVecina; var nombreMascota; var nombreMascota; var nombreOtro;',
          },
          {
            order: 4,
            type: 'title',
            content: 'Asignación de valores a variables en JavaScript',
          },
          {
            order: 5,
            type: 'paragraph',
            content:
              'La asignación de valores a una variable en JavaScript se realiza mediante el operador de asignación =. La sintaxis para asignar un valor a una variable es: nombreVariable = valor; donde nombreVariable es el nombre de la variable y valor es el valor que se le asignará a la variable.Ejemplo',
          },
          {
            order: 6,
            type: 'snippet',
            content:
              'nombre = "Estrada Web Group"; edad = 25; sueldo = 1000.00; estadoCivil = "Soltero"; fechaNacimiento = "01/01/1990"; direccion = "Calle 1, Colonia 1, Ciudad 1, Pais 1"; telefono = "12345678"; email = jgkd@gmail.com',
          },
        ],
      },
      {
        type: 'practical',
        ovaMessage: 'Sigue así!',
        ovaSide: 'left',
        content: [
          {
            order: 1,
            type: 'title',
            content:
              'Desafio de declarar una variable con un valor en JavaScript',
          },
          {
            order: 2,
            type: 'paragraph',
            content:
              'En este desafio deberas corregir el error en la declaracion de una variable con un valor en JavaScript.',
          },
          {
            order: 3,
            type: 'code_challenge',
            content: 'estadocivir ? "soltero"',
          },
        ],
      },
    ],
  }, */
];

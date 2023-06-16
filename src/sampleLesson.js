export const sampleLesson = [
  {
    type: 'teoric',
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
        order: 4,
        type: 'paragraph',
        content:
          'El condicional IF se puede utilizar sin el else. Si se solicita un programa en el que se diga ÚNICAMENTE si una persona tiene sobrepeso de acuerdo a su índice de masa corporal, se utilizará el IF sin colocar la parte del else.',
      },
      {
        order: 5,
        type: 'title',
        content: 'Condicional IF anidado',
      },
      {
        order: 6,
        type: 'paragraph',
        content:
          'if anidado: Un if anidado es una sentencia if que está dentro de otro if o else. Anidado: Si las sentencias significan una sentencia if dentro de una sentencia if. Sí, JavaScript nos permite anidar las sentencias if dentro de las sentencias if, es decir, podemos colocar una sentencia if dentro de otra sentencia if.',
      },
      {
        order: 7,
        type: 'code_challenge',
        content: 'if (condición1){if (condición2)}',
      },
    ],
  },
  {
    type: 'Teoric',
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
        type: 'code_challenge',
        content: 'if (condición){}else{}',
      },
    ],
  },
  {
    type: 'Teoric',
    content: 'Variables y tipos de datos en JavaScript',
  },
  { order: 1,
    type: 'paragraph',
    content:'Una variable es un nombre dado a una ubicación de memoria. Es la unidad básica de almacenamiento en un programa. Las variables también las podemos ver como un deposito donde se almacena un valor y esta constituida por un nombre, un tipo ya sea numérico, cadena de caracteres, Booleano, entre otros. JavaScript puede almacenar los siguientes valores: Números: 5, 6.5, 7 etc. Valores Reales: 1.24, 2.90, 5.01, etc. Cadena de caracteres: "Hola Estrada Web Group" etc. Booleano o valores lógicos: verdadero o falso (true, false). Además de los tipos de datos de datos anteriores, JavaScript también admite dos tipos de datos más, nulos y no definidos y un objeto de tipo de datos compuesto. Aprenderemos sobre estos tipos de datos a detalle en otros artículos.'
  },
  {
    order: 2,
    type: 'title',
    content: 'Características de las variables en JavaScript',
  },
  {
    order: 3,
    type: 'paragraph',
    content:'El valor almacenado en una variable se puede cambiar durante la ejecución del programa. Una variable es solo un nombre dado a una ubicación de memoria, todas las operaciones realizadas en la variable afectan a esa ubicación de memoria. En JavaScript, todas las variables se deben declarar antes de poder utilizarlas.'
  }
];

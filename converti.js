import { sampleLessons } from './src/sampleLesson.js';
/*const fs = require('fs');*/
import fs from 'fs';
// Objeto JavaScript que quieres convertir en JSON
const miObjeto=sampleLessons;

// Convertir el objeto en formato JSON
const objetoJSON = JSON.stringify(miObjeto);

// Guardar el JSON en un archivo
fs.writeFileSync('miObjeto.json', objetoJSON);

// Para leer el JSON desde el archivo más tarde, puedes usar:
// const objetoJSONRecuperado = fs.readFileSync('miObjeto.json', 'utf8');
// const objetoRecuperado = JSON.parse(objetoJSONRecuperado);

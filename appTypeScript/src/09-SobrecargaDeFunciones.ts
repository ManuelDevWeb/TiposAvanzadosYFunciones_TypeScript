// Si paso nombre, me devuelve un array de strings
// Si paso un array de strings, me devuelve un string

type customType=string | string[];

// Sobrecargando la entrada y la salida de la función
function parseString(data:string):string[];
function parseString(data:string[]):string;

function parseString(argumento:customType):customType {
  if (Array.isArray(argumento)) {
    return argumento.join();
  } else {
    return argumento.split('');
  }
}

const rtaArray=parseString('Manuel');
const rtaString=parseString(['M','a','n','u','e','l']);

console.log(rtaArray);
console.log(rtaString);




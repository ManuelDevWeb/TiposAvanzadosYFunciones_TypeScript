// Se utiliza para funciones que sabes que nunca van a terminar (Es raro, pero puede pasar)
// Por ejemplo ciclo infinito


// Esta funcion no finaliza ya que posee un loop infinito
function loopInfinito() : never {
    while(true){}
}

const example=(input:unknown)=>{
  if(typeof input === 'string'){
    return 'Es un String';
  }else if(Array.isArray(input)){
    return 'Es un Array';
  }

  // Recordar que fail es una funcion que no finaliza
  return fail('No match');
}

// Esta funcion no finaliza ya que siempre dispara una excepcion y se llama desde la funcion example
const fail = (msg: string):never => {
  throw new Error(msg);
};

console.log(example('Hola'));
console.log(example([1,2,3]));
// Al enviar este parametro se detiene la aplicacion porque retorna la funcion fail()
console.log(example(1));
console.log(example('Hola despues del fail'));


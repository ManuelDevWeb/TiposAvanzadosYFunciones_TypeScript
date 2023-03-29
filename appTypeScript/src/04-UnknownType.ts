// Utilizar unknown siempre por sobre any, pero solo en caso de que sea necesario.

let anyVar: any;

anyVar = 1;
anyVar = true;
anyVar = {};
anyVar = [];
anyVar = undefined;
anyVar = null;

// Por esto no se recomienda usar any
let isNew:boolean=anyVar;

// Unknown ✅ es mas seguro que any
let unknownVar: unknown;

unknownVar=true;
unknownVar='1';
unknownVar=1;
unknownVar={};
unknownVar=[];

//❌ No se puede asignar a un booleano
// let isNew2:string=unknownVar;

//❌ No se puede acceder a propiedades de un unknown
// unknownVar.doSomething();

if(typeof unknownVar === 'string'){
  unknownVar.toUpperCase();
}

if (typeof unknownVar === 'boolean') {
  let isNew3: boolean = unknownVar;
}



const parse=(str:string):unknown=>{
  return JSON.parse(str);
}

import { User, ROLES } from "./02-Enums";

const currentUser:User={
    username:'Manuel',
    role:  ROLES.CUSTOMER
}

export const checkAdminRole=()=>{
  if(currentUser.role===ROLES.ADMIN){
    return true;
  }else{
    return false;
  }
}

const rta = checkAdminRole();

console.log(rta);


// Con la funcion anterior, me tocaria crear una funcion diferente por cada tipo de rol

// Para evitar esto, podemos usar los parametros rest
export const checkRole=(...roles:string[])=>{
  if(roles.includes(currentUser.role)){
    return true;
  }

  return false;
}

const rta2 = checkRole(ROLES.ADMIN, ROLES.SELLER, ROLES.CUSTOMER);
console.log(rta2);




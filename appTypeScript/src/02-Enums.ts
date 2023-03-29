// Para ver el resultado de los logs (F1 + Quokka Start)

export enum ROLES {
  ADMIN='admin',
  SELLER='seller',
  CUSTOMER='customer'
}

export type User={
  username: string,
  role: ROLES
}

const manuelUser:User={
  username: 'Manuel',
  // role: 'admin' //❌ No se puede mandar un string
  role: ROLES.ADMIN //✅ Debemos ser mas especificos, pasar un valor de la enum
}

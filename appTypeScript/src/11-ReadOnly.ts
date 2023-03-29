export interface Product{
  readonly id: string;
  readonly createdAt: Date;
  updatedAt: Date;
  name: string;
  stock: number
}

const newProduct=(data:Product)=>{
  // No podemos sobreescribir atributos de solo lectura
  // data.id='nuevo id';
  // data.createdAt=new Date(2000,10,10)

  data.name='Nuevo nombre';

  return data;
}

console.log(newProduct({
  id: '1',
  createdAt: new Date(),
  updatedAt: new Date(),
  name: 'Camisa',
  stock: 10
}))

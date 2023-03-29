export const createProduct = (
  // Los parametros opcionales se dejan para el final
  id: string | number,
  isNew?: boolean,
  stock?: number
) => {
  return {
    id,
    // No utilizar el operador ||, usar ?? para que solo se ejecute si el valor es null o undefined
    isNew: isNew ?? true,
    stock: stock ?? 10,
  };
};

const product1=createProduct('1',false, 12);
const product2=createProduct('2', true);
const product3=createProduct('3');
const product4=createProduct('4',false, 10);


console.log(product1);
console.log(product2);
console.log(product3);
console.log(product4);

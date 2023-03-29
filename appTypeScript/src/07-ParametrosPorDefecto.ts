export const createProduct=(
  id: string | number,
  isNew:boolean=true,
  stock:number=10
)=>{
  return {
    id,
    isNew,
    stock
  }
}

const product1=createProduct('1',false, 12);
const product2=createProduct('2', true);
const product3=createProduct('3');

console.log(product1);
console.log(product2);
console.log(product3);

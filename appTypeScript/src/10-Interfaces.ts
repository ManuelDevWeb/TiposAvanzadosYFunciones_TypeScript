// Las interfaces son muy similar al type, pero en las interfaces solo aplican a objetos.
// Tambien podemos heredar de otras interfaces.

// Type
type Sizes='S'|'M'|'L'|'XL'|'XXL';

// type Product={
//   id: string | number;
//   title: string;
//   createdAt: Date;
//   stock: number;
//   sizes: Sizes;
// }

// Interface

interface Product{
  id: string | number;
  title: string;
  createdAt: Date;
  stock: number;
  sizes: Sizes;
}

const products:Product[]=[];

products.push({
  id: 1,
  title: 'Camisa',
  createdAt: new Date(),
  stock: 10,
  sizes: 'S'
});


console.log(products);

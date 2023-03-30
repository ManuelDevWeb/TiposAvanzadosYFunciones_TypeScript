// Importando faker
import {faker} from '@faker-js/faker';

// Import functions of product service
import { addProduct, products, updateProduct, findProduct} from './products/product.service';

for (let index=0; index<10; index++){
  // Generaremos data aleatoria con ayuda de faker
  addProduct({
    title: faker.commerce.productName(),
    image: faker.image.imageUrl(),
    description: faker.commerce.productDescription(),
    stock: faker.datatype.number({ min: 10, max: 100 }),
    size: faker.helpers.arrayElement(['M', 'S', 'XL', 'L', 'XXL']),
    color: faker.color.human(),
    price: parseInt(faker.commerce.price(), 10),
    categoryId: faker.datatype.uuid(),
    isNew: faker.datatype.boolean(),
    tags: faker.helpers.arrayElements(),
  });
}

console.log(products);

const product=products[0];

updateProduct(product.id, {
  title: 'New title',
  price: 100,
  stock: 100,
  categoryId: '2'
});


findProduct({
  stock: 10,
  color: 'red',
  tags: ['tag1', 'tag2'],
})

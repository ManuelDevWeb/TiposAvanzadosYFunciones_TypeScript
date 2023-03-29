// Import functions of product service
import {addProduct} from './products/product.service';

addProduct({
  id: 1,
  createdAt: new Date(),
  updatedAt: new Date(),
  title: 'Camisa',
  stock: 10,
  sizes: 'S',
  category: {
    id: 1,
    name: 'Categoria 1',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
});

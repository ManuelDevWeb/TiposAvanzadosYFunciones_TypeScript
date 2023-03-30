// Importando faker
import {faker} from '@faker-js/faker';


// Import interface
import {Product} from './product.model';
import {CreateProductDto, UpdateProductDto, FindProductDto } from './product.dto';

// Array of products
export const products:Product[]=[];

export const addProduct=(data:CreateProductDto): Product=>{
  const newProduct = {
    ...data,
    id: faker.datatype.uuid(),
    createdAt: faker.date.recent(),
    updatedAt: faker.date.recent(),
    category: {
      id: faker.datatype.uuid(),
      name: faker.commerce.department(),
      createdAt: faker.date.recent(),
      updatedAt: faker.date.recent(),
    },
  };

  products.push(newProduct);

  return newProduct;
}

// Acedemos al tipado por indice, es decir, a la propiedad id de Product y toma el tipo de dato de id
export const updateProduct=(id:Product['id'], data:UpdateProductDto):Product=>{
  const index=products.findIndex((p)=>p.id===id);

  const item=products[index];

  products[index]={
    ...item,
    ...data,
  }

  return item;
}

export const findProduct = (data: FindProductDto): Product[] => {
  return products;
};

export const deleteProduct=(id:string)=>{
}



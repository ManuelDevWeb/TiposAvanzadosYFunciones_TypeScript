// Import interface
import {Product} from './product.model';

// Array of products
export const products:Product[]=[];

export const addProduct=(data:Product)=>{
  products.push(data);
}

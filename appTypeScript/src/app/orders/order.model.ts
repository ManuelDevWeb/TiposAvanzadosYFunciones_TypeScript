// Interface BaseModel
import { BaseModel } from '../base.model';

// Interface product
import { Product } from '../products/product.model';
// Interface user
import { User } from '../../02-Enums';

export interface Order extends BaseModel{
  products: Product[];
  user: User;
}

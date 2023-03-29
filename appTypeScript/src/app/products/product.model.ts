
// Interface BaseModel
import { BaseModel } from "../base.model";
// Interface category
import { Category } from "../categories/category.model";

export type Sizes = 'S' | 'M' | 'L' | 'XL' | 'XXL';

export interface Product extends BaseModel {
  title: string;
  stock: number;
  sizes: Sizes;
  category: Category
}

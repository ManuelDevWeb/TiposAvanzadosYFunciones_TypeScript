
// Interface BaseModel
import { BaseModel } from "../base.model";
// Interface category
import { Category } from "../categories/category.model";

export type Sizes = 'S' | 'M' | 'L' | 'XL' | 'XXL';

export interface Product extends BaseModel {
  title: string;
  image: string;
  description: string;
  stock: number;
  size?: Sizes;
  color: string;
  price: number;
  category: Category;
  isNew: boolean;
  tags: string[];
}


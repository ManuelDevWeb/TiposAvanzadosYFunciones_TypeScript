import { Product } from "./product.model";

// (DTO ─ Data Transfer Object). objeto de datos de transferencia

// Omit permite excluir propiedades de un tipo
export interface CreateProductDto
  extends Omit<Product, 'id' | 'createdAt' | 'updatedAt' | 'category'> {
  categoryId: string;
}

// Partial permite hacer opcional las propiedades de un tipo
export interface UpdateProductDto extends Partial<CreateProductDto> {}

// Read only permite hacer que las propiedades de un tipo sean de solo lectura
// Aca estamos indicando que las propiedades de Product son de solo lectura, que son opcionales, omitimos tags
// ya que lo queremos recibir y que sea solo de lectura
export interface FindProductDto extends Readonly<Partial<Omit<Product,'tags'>>>{
  readonly tags?: ReadonlyArray<string>;
}

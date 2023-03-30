// Partial permite hacer opcional las propiedades de un tipo
export interface updateProductDto extends Partial<Product> {}

// Required permite hacer obligatorias las propiedades de un tipo
export interface CreateProductDto extends Required<Product> {}

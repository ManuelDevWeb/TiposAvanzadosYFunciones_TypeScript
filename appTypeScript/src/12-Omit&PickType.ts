// Estos tipos de datos nos permiten crear nuevas interfaces basadas de otras, pero
// omitiendo o seleccionando solo ciertos valores. Estos funcionan de la siguiente forma

interface Employee {
  name: string;
  lastName: string;
  salary: number;
  company: string;
}

// Extendemos de la interface Employee, pero omitiendo el salario y la compañia
interface Unemployee extends Omit<Employee, 'salary' | 'company'> {}

// Extendemos de la interface Employee, pero seleccionando solo el salario y la compañia
interface Unemployee extends Pick<Employee, 'salary' | 'company'> {}

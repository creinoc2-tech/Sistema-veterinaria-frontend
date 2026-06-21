export type Role = 'ADMIN' | 'VETERINARIO' | 'RECEPCIONISTA' | 'CLIENTE';


export interface SignUpDto {
email: string;
  password: string;
  firstname: string;
  lastname: string;
  role?: Role;
}
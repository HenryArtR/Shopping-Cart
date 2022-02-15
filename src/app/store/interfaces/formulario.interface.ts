export interface Formulario {
    id: number;
    nombre: string;
    apellido: string;
    usuario: string;
    email: string;
    contrasena: string;
    contrasena2: string;
    date: Date;
}

export interface Login {
    usuario: string;
    contrasena: string;
}
export interface Usuario {
    id?: string;
    name: string;
    password: string;
    gender: string;
    age: number;
    email: string;
    comuna: string;
    direccion: string;
    telefono: string;
    rut: string;
    image: string;
    perfil: 'usuario';
}
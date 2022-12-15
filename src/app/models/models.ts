export interface UserI {
    uid:string;
    name:string;
    lastname:string;
    gender:string;
    age:number;
    email:string;
    comuna:string;
    rut:string;
    disponible:boolean;
    imagen:string;
    password:string;
    perfil: 'usuario',
}

export interface UserC {
    nombre: string;
    capacidad: number;
    correo: string;
    uid: string;
    password: string;
    precio: string;
    patente: string;
    modelo: string;
    comuna: string;
    rut: string;
    imagen: string;
    perfil: 'chofer',
}

export interface GeneroU {
    nombre: string;
}
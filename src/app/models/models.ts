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
    id?:string;
    name:string;
    precio: string;
    capacidad: string;
    perfil: 'chofer',
}

export interface GeneroU {
    nombre: string;
}
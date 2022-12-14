export interface UserI {
    nombre: string;
    capacidad: number;
    correo: string;
    uid: string;
    password: string;
    sexo: string;
    comuna: string;
    motivo: string;
    telefono: string;
    rut: string;
    imagen: string;
    perfil: 'usuario',
}

export interface UserC {
    nombre: string;
    capacidad: number;
    correo: string;
    uid: string;
    password: string;
    sexo: string;
    patente: string;
    modelo: string;
    comuna: string;
    rut: string;
    imagen: string;
    perfil: 'chofer',
}
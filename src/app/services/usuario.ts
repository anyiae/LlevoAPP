export interface Usuario {
    id?: string;
    uid:string;
    name:string;
    lastname:string;
    gender:string;
    age:number;
    email:string;
    comuna:string;
    rut:string;
    disponible:boolean;
    image:string;
    perfil: 'usuario';
}
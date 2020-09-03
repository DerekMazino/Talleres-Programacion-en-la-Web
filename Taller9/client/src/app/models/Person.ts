export interface Person{
    id?: string;/* Se colcoa ? para que no sea requerido */
    nombres? : string;
    apellidos? : string;
    fk_tipodocumento? : number;
    documento? : string;
    lugaresidencia? : number;
    email? : string;
    telefono? : number;
    usuario? : string;
    contrasena? : string;
}
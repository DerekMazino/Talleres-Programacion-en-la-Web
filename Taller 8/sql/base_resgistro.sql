<<<<<<< HEAD
#Hola soy una base que aun no se crea uwu
drop database if exists usuario_registro;
create database usuario_registro;
use usuario_registro;

create table tipodocumento (
id_tipdoc varchar (30) primary key,
nombre_doc varchar (30),
descripcion_td varchar (35)
);

create table ciudad (
id_ciudad varchar(20) primary key,
nombre_ciu varchar(30),
descripcion_c varchar (35)
);

create table persona (
id_persona varchar(10) primary key,
nombres varchar(30),
apellidos varchar(30),
fk_tipodocumento varchar(30),
documento varchar (20),
fk_lugaresidencia varchar(20),
email varchar (30),
telefono int,
usuario varchar(20),
contraseña varchar(20),
constraint tipodocumento foreign key (fk_tipodocumento) REFERENCES tipodocumento(id_tipdoc),
constraint lugaresidencia foreign key(fk_lugaresidencia) REFERENCES ciudad(id_ciudad)
);
=======
#Hola soy una base que aun no se crea uwu
>>>>>>> master

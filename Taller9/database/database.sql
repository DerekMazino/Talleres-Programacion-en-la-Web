
/* #Hola soy una base que aun no se crea uwu */
drop database if exists usuario_registroT9;
create database usuario_registroT9;
use usuario_registroT9;

create table tipodocumento (
id_tipdoc int AUTO_INCREMENT primary key,
nombre_doc varchar (30),
descripcion_td varchar (35)
);

create table ciudad (
id_ciudad int auto_increment primary key,
nombre_ciu varchar(30),
descripcion_c varchar (35)
);

create table persona (
id_persona int auto_increment primary key,
nombres varchar(30),
apellidos varchar(30),
fk_tipodocumento int,
documento varchar (20),
lugaresidencia int,
email varchar (30),
telefono int,
usuario varchar(20),
contrasena varchar(20),
constraint tipodocumento foreign key (fk_tipodocumento) REFERENCES tipodocumento(id_tipdoc),
constraint ciudad foreign key (lugaresidencia) references ciudad(id_ciudad)
);

describe ciudad;
insert into ciudad (nombre_ciu, descripcion_c)values ('Bogotá', 'Capital');
insert into ciudad (nombre_ciu, descripcion_c)values ('Bucaramanga', 'Ciudad Bonita');
insert into ciudad (nombre_ciu, descripcion_c)values ('Medellin', 'Motosierras');
select * from ciudad;
insert into tipodocumento (nombre_doc, descripcion_td) values ('CC', 'Cedula de Ciudadania');
insert into tipodocumento (nombre_doc, descripcion_td) values ('CE', 'Cedula de Extrangeria');
insert into tipodocumento (nombre_doc, descripcion_td) values ('TI', 'Tarjeta de Identidad');
select * from tipodocumento;
select id_persona, nombres, apellidos, nombre_doc as fk_tipodocumento, documento, nombre_ciu as lugaresidencia, email, telefono, usuario, contrasena
 from persona 
 join tipodocumento on fk_tipodocumento=id_tipdoc
 join ciudad on lugaresidencia=id_ciudad;

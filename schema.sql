--    CREAR BASE DE DATOS     --
create database data_base_1;

--  CREAR TABLA DE PRODUCTOS  --
create table productos(
    id integer not null auto_increment,
    nombre varchar(30),
    precio decimal(5, 2),
    primary key(id)
);

--  TABLA DE USUARIOS --
create table usuarios(
    id integer not null auto_increment,
    nombre varchar(30),
    email varchar(60),
    password varchar(255),
    date_time DATETIME,
    primary key(id)
);

-- INSERT DATOS USUARIOS --
INSERT INTO `usuarios`(`id`, `nombre`, `email`, `password`) VALUES (1,'Freddy Lopez','Freddy@gmail.com','fredd123');

-- INSERT DATOS PRODUCTOS --
INSERT INTO `productos`(`id`, `nombre`, `precio`) VALUES (1,'SMARPHONE', 300)

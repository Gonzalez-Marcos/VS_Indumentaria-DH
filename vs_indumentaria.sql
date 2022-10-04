create database vs_indumentaria;
use vs_indumentaria;
create table Users(
id int not null primary key auto_increment,
email varchar(255) not null,
password text not null,
name_user varchar(255) not null,
last_name varchar(255) not null);
create table Products_has_Users(
Products_id int not null,
Users_id int  not null);

create table Products(
id int not null primary key auto_increment,
Name  varchar(255) not null,
descriptions text not null,
sizez_id varchar(255) not null,
Categories_id int not null,
Products_images_id int not null);
create table Colours_has_Products(
Colours_id int not null,
Products_id int not null);
create table Categories(
id int not null primary key auto_increment,
category varchar(255) not null);
create table Colours(
id int not null primary key auto_increment,
colour varchar(255) not null);
create table Produts_images(
id int not null primary key auto_increment,
images Text not null);
create table Products_has_Sizes(
Products_id int not null,
Sizes_id int not null);
create table size(
id int not null primary key auto_increment,
size varchar(255) not null);
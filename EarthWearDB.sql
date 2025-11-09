show databases
create database EarthWear

use   EarthWear 
select * from Users
Create table Users(
userID INT NOT NULL AUTO_INCREMENT,
firstName varchar(50) not null,
lastName varchar(50) not null,
email varchar(100) not null,
phone varchar(13) not null,
street varchar(200) not null,
city varchar(200) not null,
state varchar(200) not null,
country varchar(200) not null,
postalcode int not null,
userType varchar(20) not null,
userPassword varchar(20) not null
createdAt DateTime Default current_TimeStamp,
primary key (userID)
)

ALTER TABLE Users
ADD COLUMN userPassword VARCHAR(20) NOT NULL DEFAULT '';

create table Products(
productID int Not null auto_increment,
productName varchar(200) not null,
prodDescription varchar(1000) not null,
price double not null,
quantity int not null,
category varchar(1000) not null,
createdAt DateTime Default current_TimeStamp,
primary key (productID)
)

create table Reviews(
reviewID integer not null auto_increment,
userID integer,
productID integer,
reviewDescription varchar(1000),
reviewStar int not null,
createdAt DateTime Default current_TimeStamp,
 FOREIGN KEY (productID) REFERENCES Products(productID),
 FOREIGN KEY (userID) REFERENCES Users(userID),
 
primary key (reviewID)
)

create table Orders(
orderID integer not null auto_increment,
productID integer,
userID integer,
totalprice double not null,
quantity integer not null,
 FOREIGN KEY (productID) REFERENCES Products(productID),
 FOREIGN KEY (userID) REFERENCES Users(userID),
 createdAt DateTime Default current_TimeStamp,
 primary key (orderID)
)

select * from Users

INSERT INTO Users (
    firstName,
    lastName,
    email,
    phone,
    street,
    city,
    state,
    country,
    postalCode,
    userType
) VALUES (
    'Kelebogile',
    'Mothoagae',
    'admin@earthwear.co.za',
    '0114382923',
    '212 Fourways',
    'Johannesburg',
    'Gauteng',
    'South Africa',
    2191,
    'Admin'
);
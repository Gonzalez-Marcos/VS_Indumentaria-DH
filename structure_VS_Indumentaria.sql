-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema VS_Indumentaria
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema VS_Indumentaria
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `VS_Indumentaria` DEFAULT CHARACTER SET utf8 ;
-- -----------------------------------------------------
-- Schema vs_indumentaria
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema vs_indumentaria
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `vs_indumentaria` DEFAULT CHARACTER SET utf8 ;
USE `VS_Indumentaria` ;

-- -----------------------------------------------------
-- Table `VS_Indumentaria`.`users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `VS_Indumentaria`.`users` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `email` VARCHAR(100) NOT NULL,
  `password` TEXT NOT NULL,
  `name_user` VARCHAR(45) NOT NULL,
  `last_name` VARCHAR(45) NOT NULL,
  `image` TEXT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `VS_Indumentaria`.`categories`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `VS_Indumentaria`.`categories` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `VS_Indumentaria`.`products`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `VS_Indumentaria`.`products` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  `descriptions` TEXT NOT NULL,
  `price` DECIMAL(10,2) NOT NULL,
  `categories_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_products_categories1_idx` (`categories_id` ASC) ,
  CONSTRAINT `fk_products_categories1`
    FOREIGN KEY (`categories_id`)
    REFERENCES `VS_Indumentaria`.`categories` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `VS_Indumentaria`.`sizes`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `VS_Indumentaria`.`sizes` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `VS_Indumentaria`.`colours`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `VS_Indumentaria`.`colours` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `VS_Indumentaria`.`product_images`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `VS_Indumentaria`.`product_images` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `images` TEXT NOT NULL,
  `products_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_product_images_products1_idx` (`products_id` ASC) ,
  CONSTRAINT `fk_product_images_products1`
    FOREIGN KEY (`products_id`)
    REFERENCES `VS_Indumentaria`.`products` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `VS_Indumentaria`.`colours_products`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `VS_Indumentaria`.`colours_products` (
  `colours_id` INT NOT NULL,
  `products_id` INT NOT NULL,
  PRIMARY KEY (`colours_id`, `products_id`),
  INDEX `fk_Colours_has_Products_Products1_idx` (`products_id` ASC) ,
  INDEX `fk_Colours_has_Products_Colours1_idx` (`colours_id` ASC) ,
  CONSTRAINT `fk_Colours_has_Products_Colours1`
    FOREIGN KEY (`colours_id`)
    REFERENCES `VS_Indumentaria`.`colours` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Colours_has_Products_Products1`
    FOREIGN KEY (`products_id`)
    REFERENCES `VS_Indumentaria`.`products` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `VS_Indumentaria`.`products_sizes`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `VS_Indumentaria`.`products_sizes` (
  `products_id` INT NOT NULL,
  `sizes_id` INT NOT NULL,
  PRIMARY KEY (`products_id`, `sizes_id`),
  INDEX `fk_Products_has_Sizes_Sizes1_idx` (`sizes_id` ASC) ,
  INDEX `fk_Products_has_Sizes_Products1_idx` (`products_id` ASC) ,
  CONSTRAINT `fk_Products_has_Sizes_Products1`
    FOREIGN KEY (`products_id`)
    REFERENCES `VS_Indumentaria`.`products` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Products_has_Sizes_Sizes1`
    FOREIGN KEY (`sizes_id`)
    REFERENCES `VS_Indumentaria`.`sizes` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

USE `vs_indumentaria` ;

-- -----------------------------------------------------
-- Table `vs_indumentaria`.`categories`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `vs_indumentaria`.`categories` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `category` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `vs_indumentaria`.`images_product`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `vs_indumentaria`.`images_product` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `images` TEXT NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `vs_indumentaria`.`users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `vs_indumentaria`.`users` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `email` VARCHAR(100) NOT NULL,
  `password` TEXT NOT NULL,
  `name_user` VARCHAR(45) NOT NULL,
  `last_name` VARCHAR(45) NOT NULL,
  `image` TEXT NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

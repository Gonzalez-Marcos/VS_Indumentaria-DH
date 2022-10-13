-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 07-10-2022 a las 03:29:14
-- Versión del servidor: 10.4.24-MariaDB
-- Versión de PHP: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `vs_indumentaria`
--
CREATE SCHEMA IF NOT EXISTS `vs_indumentaria` DEFAULT CHARACTER SET utf8 ;

USE `vs_indumentaria` ;
-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categories`
--

CREATE TABLE `categories` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `categories`
--

INSERT INTO `categories` (`id`, `name`) VALUES
(1, 'visit'),
(2, 'news');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `colours`
--

CREATE TABLE `colours` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `colours`
--

INSERT INTO `colours` (`id`, `name`) VALUES
(1, 'negro'),
(2, 'blanco'),
(3, 'gris');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `colours_products`
--

CREATE TABLE `colours_products` (
  `colours_id` int(11) NOT NULL,
  `products_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `colours_products`
--

INSERT INTO `colours_products` (`colours_id`, `products_id`) VALUES
(1, 1),
(1, 4),
(1, 7),
(2, 2),
(2, 5),
(2, 8),
(3, 3),
(3, 6);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `images_product`
--

CREATE TABLE `images_product` (
  `id` int(11) NOT NULL,
  `name` text NOT NULL,
  `products_id` int(11)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `images_product`
--

INSERT INTO `images_product` (`id`, `name`, `products_id` ) VALUES
(1, 'cat-calzado/zapatillas/zap-3.jpg', 1),
(2, 'cat-calzado/zapatillas/zap-4.jpg', 2),
(3, 'cat-indu/camisetas/cami-1.jpg', 3),
(4, 'cat-indu/camisetas/cami-1.jpg', 4),
(5, 'cat-indu/camisetas/cami-4.jpg', 5),
(6, 'cat-indu/camisetas/cami-4.jpg', 6),
(7, 'cat-accs/bolsos/bol-2.jpg', 7),
(8, 'cat-indu/calzas/cal-2.jpg', 8);

-- --------------------------------------------------------
-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `descriptions` text NOT NULL,
  `price` decimal(10,2) NOT NULL,
  `categories_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `products`
--

INSERT INTO `products` (`id`, `name`, `descriptions`, `price`, `categories_id`) VALUES
(1, 'ZAPATILLAS RUNNING STRONG PACE 3 MUJER GRIS', 'Disfrutá del running y tus caminatas con la TOPPER Strong Pace 3', '11799', 1),
(2, 'ZAPATILLAS RUNNING STRONG PACE 3 MUJER GRIS', 'Disfrutá del running y tus caminatas con la TOPPER Strong Pace 3', '11799', 2),
(3, 'BOTINES DE FUTBOL ADIDAS PREDATOR FREAK.4 FG UNISEX FUCSIA', 'No podes cambiar el juego hasta que dejes que el juego te cambie a vos.', '19999', 1),
(4, 'BOTINES DE FUTBOL ADIDAS PREDATOR FREAK.4 FG UNISEX FUCSIA', 'No podes cambiar el juego hasta que dejes que el juego te cambie a vos.', '19999', 2),
(5, 'BOLSO PUMA PHASE SPORTS MUJER ROSA', 'Logo PUMA estampado', '5999', 1),
(6, 'ZAPATILLAS RUNNING STRONG PACE 3 MUJER GRIS', 'Disfrutá del running y tus caminatas con la TOPPER Strong Pace 3', '11799', 2),
(7, 'BOLSO PUMA PHASE SPORTS MUJER ROSA', 'Logo PUMA estampado', '6999', 1),
(8, 'BOTINES DE FUTBOL ADIDAS PREDATOR FREAK.4 FG UNISEX FUCSIA', 'No podes cambiar el juego hasta que dejes que el juego te cambie a vos.', '7199', 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `products_sizes`
--

CREATE TABLE `products_sizes` (
  `products_id` int(11) NOT NULL,
  `sizes_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `products_sizes`
--

INSERT INTO `products_sizes` (`products_id`, `sizes_id`) VALUES
(1, 5),
(2, 6),
(3, 7),
(4, 8),
(5, 1),
(6, 2),
(7, 3),
(8, 4);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `sizes`
--

CREATE TABLE `sizes` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `sizes`
--

INSERT INTO `sizes` (`id`, `name`) VALUES
(1, 'M'),
(2, 'L'),
(3, 'XL'),
(4, 'XXL'),
(5, '37'),
(6, '38'),
(7, '39'),
(8, '40');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` text NOT NULL,
  `name_user` varchar(45) NOT NULL,
  `last_name` varchar(45) NOT NULL,
  `image` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `email`, `password`, `name_user`, `last_name`, `image`) VALUES
(1, 'alejo@grupo8.com', '1234789', 'alejo', 'zuviria', NULL),
(2, 'marcos@grupo8.com', '1234789', 'marcos', 'gonzalez', NULL),
(3, 'nicole@grupo8.com', '1234789', 'nicole', 'soto', NULL),
(4, 'pep@grupo8.com', '1234789', 'pep', 'passian', NULL);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `colours`
--
ALTER TABLE `colours`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `colours_products`
--
ALTER TABLE `colours_products`
  ADD PRIMARY KEY (`colours_id`,`products_id`),
  ADD KEY `fk_Colours_has_Products_Products1_idx` (`products_id`),
  ADD KEY `fk_Colours_has_Products_Colours1_idx` (`colours_id`);

--
-- Indices de la tabla `images_product`
--
ALTER TABLE `images_product`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_products_categories1_idx` (`categories_id`);
  

--
-- Indices de la tabla `products_sizes`
--
ALTER TABLE `products_sizes`
  ADD PRIMARY KEY (`products_id`,`sizes_id`),
  ADD KEY `fk_Products_has_Sizes_Sizes1_idx` (`sizes_id`),
  ADD KEY `fk_Products_has_Sizes_Products1_idx` (`products_id`);

--
-- Indices de la tabla `sizes`
--
ALTER TABLE `sizes`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `colours`
--
ALTER TABLE `colours`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `images_product`
--

--
-- AUTO_INCREMENT de la tabla `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT de la tabla `product_images`
--
ALTER TABLE `images_product`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT de la tabla `sizes`
--
ALTER TABLE `sizes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `colours_products`
--
ALTER TABLE `colours_products`
  ADD CONSTRAINT `fk_Colours_has_Products_Colours1` FOREIGN KEY (`colours_id`) REFERENCES `colours` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_Colours_has_Products_Products1` FOREIGN KEY (`products_id`) REFERENCES `products` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `fk_products_categories1` FOREIGN KEY (`categories_id`) REFERENCES `categories` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `products_sizes`
--
ALTER TABLE `products_sizes`
  ADD CONSTRAINT `fk_Products_has_Sizes_Products1` FOREIGN KEY (`products_id`) REFERENCES `products` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_Products_has_Sizes_Sizes1` FOREIGN KEY (`sizes_id`) REFERENCES `sizes` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;

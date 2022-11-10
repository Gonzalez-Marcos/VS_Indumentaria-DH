-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 04-11-2022 a las 03:30:36
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
-- Base de datos: `vs_indumentaria_db`
--
DROP DATABASE IF EXISTS vs_indumentaria_db;
CREATE DATABASE vs_indumentaria_db;
USE vs_indumentaria_db;
-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categories`
--

CREATE TABLE `categories` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `categories`
--

INSERT INTO `categories` (`id`, `name`) VALUES

(1, 'Nuevos'),
(2, 'Mas visitados');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `colours`
--

CREATE TABLE `colours` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `colours`
--

INSERT INTO `colours` (`id`, `name`) VALUES
(1, 'NEGRO'),
(2, 'BLANCO'),
(3, 'AZUL'),
(4, 'GRIS'),
(5, 'ROJO'),
(6, 'ROSA'),
(7, 'VERDE'),
(8, 'AMARILLO'),
(9, 'VIOLETA'),
(10, 'CELESTE');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `images`
--

CREATE TABLE `images` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(500) COLLATE utf8_unicode_ci NOT NULL,
  `ProductId` int(10) UNSIGNED DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `images`
--

INSERT INTO `images` (`id`, `name`, `ProductId`) VALUES
(1, 'zap-1.jpg\r\n', 1),
(2, 'zap-2.jpg', 2),
(3, 'zap-3.jpg\r\n', 3),
(4, 'zap-4.jpg\r\n', 4),
(5, 'bot-1.jpg', 5),
(6, 'bot-2.jpg', 6),
(7, 'bot-3.jpg', 7),
(8, 'bot-4.jpg', 8),
(9, 'cami-1.jpg', 9),
(10, 'cami-2.jpg', 10),
(11, 'cami-3.jpg', 11),
(12, 'cami-4.jpg', 12),
(13, 'reme-1.jpg', 13),
(14, 'reme-2.jpg', 14),
(15, 'reme-3.jpg', 15),
(16, 'reme-4.jpg', 16),
(17, 'pant-l1.jpg\r\n', 17),
(18, 'pant-l2.jpg\r\n', 18),
(19, 'pant-l3.jpg\r\n', 19),
(20, 'pant-l4.jpg\r\n', 20),
(21, 'short-1.jpg\r\n', 21),
(22, 'short-2.jpg', 22),
(23, 'short-3.jpg', 23),
(24, 'short-4.jpg', 24);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `products`
--

CREATE TABLE `products` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `description` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `price` decimal(10,2) DEFAULT NULL,
  `CategoryId` int(10) UNSIGNED DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `products`
--

INSERT INTO `products` (`id`, `name`, `description`, `price`, `CategoryId`) VALUES
(1, 'ZAPATILLAS DE TENIS ADIDAS GAMECOURT 2 ', 'Manteen la confianza en cada set y partido.\r\n', '19999.00', 1),
(2, 'ZAPATILLAS PUMA SHUFFLE NEGRA', 'Renová tu estilo con el toque de frescura a la moda de nuestras zapatillas PUMA Shuffle', '16999.00', 2),
(3, 'ZAPATILLAS RUNNING ADIDAS RUNFALCON 2.0 MUJER', 'Con estas zapatillas ADIDAS en tus pies podrás correr en el parque y luego tomar un café con amigos con total comodidad.\r\n', '14700.00', 1),
(4, 'ZAPATILLAS RUNNING NIKE DOWNSHIFTER 12 MUJER', 'Da los primeros pasos en tu viaje de carrera con la NIKE Downshifter 12.', '22999.00', 2),
(5, 'BOTIN DE FUTBOL ADIDAS COPA SENSE.3 FG \r\n', 'Concéntrate en desarrollar tu instinto futbolístico con los botines ADIDAS Copa Sense', '26599.00', 1),
(6, 'BOTINES DE FUTBOL ADIDAS X SPEEDFLOW 3 FG\r\n', 'La conexión que se genera entre tu cerebro y la pelota siempre pasa por los botines\r\n', '22599.00', 2),
(7, 'Botines adidas X Speedflow.3 Tf', 'Sentite como un campeon dentro de la cancha', '25999.00', 1),
(8, 'Botines adidas Copa Sense.1 Fg\r\n', 'Sentí el juego en todo momento con los Botines adidas Copa Sense. 1 Fg. ', '62999.00', 2),
(9, 'Camiseta adidas Local River Plate\r\n', 'Sumate a los festejos y alenta a tu club con la Camiseta adidas Local River Plate', '16999.00', 1),
(10, 'Camiseta adidas Boca Juniors Home\r\n', 'alenta a boca con este increible diseño', '28999.00', 2),
(11, 'Camiseta Umbro Cameron', 'Clásica y urbana, la Camiseta Umbro Cameron tiene un diseño liviano que podes combinar con todas tus prendas de entrenamiento.', '16999.00', 1),
(12, 'Camiseta Nike Dri-Fit Strike\r\n', 'salí con tranquilidad a tus entrenamientos o paseos con esta camiseta!', '28999.00', 2),
(13, 'Remera adidas Camo', 'Una opción ideal para completar cualquier look, ya sea para ir al gimnasio o tus planes diarios como ir a la universidad o a hacer tus cosas en la ciudad.', '4399.00', 1),
(14, 'Remera Puma Essentials Logo', 'Si te gusta lucir un look relajado y urbano, llamarás la atención.', '10999.00', 2),
(15, 'Remera Lotto Hs22\r\n', 'Asegúrate una prenda que puedes combinar con todo tu ropero.\r\n', '7499.00', 1),
(16, 'Remera Nike Retro Mod 3', 'llamarás la atención en cualquier lugar donde estés\r\n', '3499.00', 2),
(17, 'Pantalón Topper Básico', 'El pantalón Topper Básico es el nuevo infaltable en tu bolso de gym.', '4099.00', 1),
(18, 'Pantalón Topper Jogger Rtc\r\n', 'El Pantalón Topper Jogger Rtc es perfecto para tus días de relax en los que lo único que necesitas es una prenda liviana y cómoda.\r\n', '5499.00', 2),
(19, 'Pantalón adidas Essentials French Terry 3 Bandas', 'flexibilidad y comodidad tendrás con este pantalón.', '8999.00', 1),
(20, 'Pantalón Topper Rtc Wmn Básico Chupín\r\n', 'Algunas prendas vienen para quedarse y se adaptan a todas nuestra actividades\r\n', '7599.00', 2),
(21, 'Short adidas Own The Run\r\n', 'Corre con estilo y confort con el Short adidas Own The Run', '13999.00', 1),
(22, 'Short Nike Sportwear Woven', 'Una vez que lo tengas en tu ropero, nunca podrás usar el Short Nike Sportwear.', '6599.00', 2),
(23, 'short Topper basic', 'ideal para entrenar o ir de caminatas.\r\n', '11499.00', 1),
(24, 'Calza adidas FeelBrilliant Designed\r\n', 'Cuando salís a correr a la plaza, por la ciudad o en la montaña, olvídate de todo y salí con certeza.\r\n', '6599.00', 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `product_colour`
--

CREATE TABLE `product_colour` (
  `id` int(10) UNSIGNED NOT NULL,
  `ProductId` int(10) UNSIGNED NOT NULL,
  `ColourId` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `product_colour`
--

INSERT INTO `product_colour` (`id`, `ProductId`, `ColourId`) VALUES
(1, 1, 1),
(2, 2, 2),
(3, 3, 4),
(4, 4, 2),
(5, 5, 1),
(6, 6, 4),
(7, 7, 4),
(8, 8, 2),
(9, 9, 2),
(10, 10, 3),
(11, 11, 1),
(12, 12, 2),
(13, 13, 4),
(14, 14, 2),
(15, 15, 1),
(16, 16, 4),
(17, 17, 2),
(18, 18, 1),
(19, 19, 2),
(20, 20, 1),
(21, 21, 2),
(22, 22, 1),
(23, 23, 4),
(24, 24, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `product_size`
--

CREATE TABLE `product_size` (
  `id` int(10) UNSIGNED NOT NULL,
  `ProductId` int(10) UNSIGNED NOT NULL,
  `SizeId` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `product_size`
--

INSERT INTO `product_size` (`id`, `ProductId`, `SizeId`) VALUES
(1, 1, 8),
(2, 2, 7),
(3, 3, 6),
(4, 4, 7),
(5, 5, 10),
(6, 6, 9),
(7, 7, 6),
(8, 8, 7),
(9, 9, 2),
(10, 10, 3),
(11, 11, 5),
(12, 12, 1),
(13, 13, 1),
(14, 14, 4),
(15, 15, 4),
(16, 16, 1),
(17, 17, 3),
(18, 18, 1),
(19, 19, 5),
(20, 20, 4),
(21, 21, 3),
(22, 22, 1),
(23, 23, 2),
(24, 24, 4);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `sizes`
--

CREATE TABLE `sizes` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `sizes`
--

INSERT INTO `sizes` (`id`, `name`) VALUES
(1, 'S'),
(2, 'L'),
(3, 'XL'),
(4, 'XXL'),
(5, 'M'),
(6, '38'),
(7, '39'),
(8, '40'),
(9, '41'),
(10, '42');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `last_name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `password` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `image` varchar(255) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

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
-- Indices de la tabla `images`
--
ALTER TABLE `images`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`),
  ADD KEY `products_category_id_foreign` (`CategoryId`);

--
-- Indices de la tabla `product_colour`
--
ALTER TABLE `product_colour`
  ADD PRIMARY KEY (`id`),
  ADD KEY `product_colour_product_id_foreign` (`ProductId`),
  ADD KEY `product_colour_colour_id_foreign` (`ColourId`);

--
-- Indices de la tabla `product_size`
--
ALTER TABLE `product_size`
  ADD PRIMARY KEY (`id`),
  ADD KEY `product_size_product_id_foreign` (`ProductId`),
  ADD KEY `product_size_size_id_foreign` (`SizeId`);

--
-- Indices de la tabla `sizes`
--
ALTER TABLE `sizes`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `users`

--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

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
-- Indices de la tabla `images`
--
ALTER TABLE `images`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`),
  ADD KEY `products_category_id_foreign` (`CategoryId`);

--
-- Indices de la tabla `product_colour`
--
ALTER TABLE `product_colour`
  ADD PRIMARY KEY (`id`),
  ADD KEY `product_colour_product_id_foreign` (`ProductId`),
  ADD KEY `product_colour_colour_id_foreign` (`ColourId`);

--
-- Indices de la tabla `product_size`
--
ALTER TABLE `product_size`
  ADD PRIMARY KEY (`id`),
  ADD KEY `product_size_product_id_foreign` (`ProductId`),
  ADD KEY `product_size_size_id_foreign` (`SizeId`);

--
-- Indices de la tabla `sizes`
--
ALTER TABLE `sizes`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--


-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `colours`
--
ALTER TABLE `colours`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT de la tabla `images`
--
ALTER TABLE `images`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- AUTO_INCREMENT de la tabla `products`
--
ALTER TABLE `products`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- AUTO_INCREMENT de la tabla `product_colour`
--
ALTER TABLE `product_colour`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- AUTO_INCREMENT de la tabla `product_size`
--
ALTER TABLE `product_size`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- AUTO_INCREMENT de la tabla `sizes`
--
ALTER TABLE `sizes`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `products_category_id_foreign` FOREIGN KEY (`CategoryId`) REFERENCES `categories` (`id`);

--
-- Filtros para la tabla `product_colour`
--
ALTER TABLE `product_colour`
  ADD CONSTRAINT `product_colour_colour_id_foreign` FOREIGN KEY (`ColourId`) REFERENCES `colours` (`id`),
  ADD CONSTRAINT `product_colour_product_id_foreign` FOREIGN KEY (`ProductId`) REFERENCES `products` (`id`);

--
-- Filtros para la tabla `product_size`
--
ALTER TABLE `product_size`
  ADD CONSTRAINT `product_size_product_id_foreign` FOREIGN KEY (`ProductId`) REFERENCES `products` (`id`),
  ADD CONSTRAINT `product_size_size_id_foreign` FOREIGN KEY (`SizeId`) REFERENCES `sizes` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;




CREATE DATABASE  IF NOT EXISTS `db_prod_grupo6` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `db_prod_grupo6`;
-- MySQL dump 10.13  Distrib 8.0.29, for Win64 (x86_64)
--
-- Host: localhost    Database: db_prod_grupo6
-- ------------------------------------------------------
-- Server version	8.0.29

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `bookings`
--

DROP TABLE IF EXISTS `bookings`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `bookings` (
  `id` bigint NOT NULL,
  `finish_date` date DEFAULT NULL,
  `seller_info` varchar(255) DEFAULT NULL,
  `start_date` date DEFAULT NULL,
  `start_time` varchar(255) DEFAULT NULL,
  `vaccinated` bit(1) DEFAULT NULL,
  `products_id` bigint NOT NULL,
  `users_id` bigint NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK7lxbw0eu4hkwq7tl6x76ihns8` (`products_id`),
  KEY `FK7hgm1gwr0mctbfryylrl6250e` (`users_id`),
  CONSTRAINT `FK7hgm1gwr0mctbfryylrl6250e` FOREIGN KEY (`users_id`) REFERENCES `users` (`id`),
  CONSTRAINT `FK7lxbw0eu4hkwq7tl6x76ihns8` FOREIGN KEY (`products_id`) REFERENCES `products` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `bookings`
--

LOCK TABLES `bookings` WRITE;
/*!40000 ALTER TABLE `bookings` DISABLE KEYS */;
/*!40000 ALTER TABLE `bookings` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `bookings_sequence`
--

DROP TABLE IF EXISTS `bookings_sequence`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `bookings_sequence` (
  `next_val` bigint DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `bookings_sequence`
--

LOCK TABLES `bookings_sequence` WRITE;
/*!40000 ALTER TABLE `bookings_sequence` DISABLE KEYS */;
INSERT INTO `bookings_sequence` VALUES (1);
/*!40000 ALTER TABLE `bookings_sequence` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cancellations`
--

DROP TABLE IF EXISTS `cancellations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cancellations` (
  `id` bigint NOT NULL,
  `description` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cancellations`
--

LOCK TABLES `cancellations` WRITE;
/*!40000 ALTER TABLE `cancellations` DISABLE KEYS */;
INSERT INTO `cancellations` VALUES (1,'Se puede cancelar hasta 15 días previos a la reserva sin inconvenientes. Transcurrido ese tiempo, se debe pagar el 50% del monto total de la reserva.'),(2,'Se deberán cancelar con más de 72 horas de antelación a la fecha de arribo. Cancelaciones dentro de las 72 hrs se cobrará el 100% del total de la estadía.');
/*!40000 ALTER TABLE `cancellations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cancellations_sequence`
--

DROP TABLE IF EXISTS `cancellations_sequence`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cancellations_sequence` (
  `next_val` bigint DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cancellations_sequence`
--

LOCK TABLES `cancellations_sequence` WRITE;
/*!40000 ALTER TABLE `cancellations_sequence` DISABLE KEYS */;
INSERT INTO `cancellations_sequence` VALUES (3);
/*!40000 ALTER TABLE `cancellations_sequence` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `categories`
--

DROP TABLE IF EXISTS `categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `categories` (
  `id` bigint NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `url` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categories`
--

LOCK TABLES `categories` WRITE;
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
INSERT INTO `categories` VALUES (1,'1 departamentos','Departamentos','https://bucket-pig6.s3.us-east-2.amazonaws.com/CategoriesImg/Departamentos.webp'),(2,'3 hosteles','Hostel','https://bucket-pig6.s3.us-east-2.amazonaws.com/CategoriesImg/Hostels.webp'),(3,'3 hoteles','Hotel','https://bucket-pig6.s3.us-east-2.amazonaws.com/CategoriesImg/Hoteles.webp'),(4,'1 bed & breakfast','Bed & Breakfast','https://bucket-pig6.s3.us-east-2.amazonaws.com/CategoriesImg/Bed+and+Breaskfast.webp');
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `categories_sequence`
--

DROP TABLE IF EXISTS `categories_sequence`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `categories_sequence` (
  `next_val` bigint DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categories_sequence`
--

LOCK TABLES `categories_sequence` WRITE;
/*!40000 ALTER TABLE `categories_sequence` DISABLE KEYS */;
INSERT INTO `categories_sequence` VALUES (5);
/*!40000 ALTER TABLE `categories_sequence` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cities`
--

DROP TABLE IF EXISTS `cities`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cities` (
  `id` bigint NOT NULL,
  `country` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cities`
--

LOCK TABLES `cities` WRITE;
/*!40000 ALTER TABLE `cities` DISABLE KEYS */;
INSERT INTO `cities` VALUES (1,'Argentina','San Carlos de Bariloche'),(2,'Argentina','Buenos Aires'),(3,'Argentina','Mendoza'),(4,'Argentina','Cordoba');
/*!40000 ALTER TABLE `cities` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cities_sequence`
--

DROP TABLE IF EXISTS `cities_sequence`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cities_sequence` (
  `next_val` bigint DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cities_sequence`
--

LOCK TABLES `cities_sequence` WRITE;
/*!40000 ALTER TABLE `cities_sequence` DISABLE KEYS */;
INSERT INTO `cities_sequence` VALUES (5);
/*!40000 ALTER TABLE `cities_sequence` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `favourites`
--

DROP TABLE IF EXISTS `favourites`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `favourites` (
  `id` bigint NOT NULL,
  `products_id` bigint NOT NULL,
  `users_id` bigint NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FKlic4530bharq9oewurx4vfvnv` (`products_id`),
  KEY `FKeguraf2g1bs36y79ca1tkr09o` (`users_id`),
  CONSTRAINT `FKeguraf2g1bs36y79ca1tkr09o` FOREIGN KEY (`users_id`) REFERENCES `users` (`id`),
  CONSTRAINT `FKlic4530bharq9oewurx4vfvnv` FOREIGN KEY (`products_id`) REFERENCES `products` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `favourites`
--

LOCK TABLES `favourites` WRITE;
/*!40000 ALTER TABLE `favourites` DISABLE KEYS */;
/*!40000 ALTER TABLE `favourites` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `favourites_sequence`
--

DROP TABLE IF EXISTS `favourites_sequence`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `favourites_sequence` (
  `next_val` bigint DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `favourites_sequence`
--

LOCK TABLES `favourites_sequence` WRITE;
/*!40000 ALTER TABLE `favourites_sequence` DISABLE KEYS */;
INSERT INTO `favourites_sequence` VALUES (1);
/*!40000 ALTER TABLE `favourites_sequence` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `features`
--

DROP TABLE IF EXISTS `features`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `features` (
  `id` bigint NOT NULL,
  `description` varchar(255) NOT NULL,
  `icon` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `features`
--

LOCK TABLES `features` WRITE;
/*!40000 ALTER TABLE `features` DISABLE KEYS */;
INSERT INTO `features` VALUES (1,'Wifi','BiWifi'),(2,'Estacionamiento','RiParkingFill'),(3,'Aire Acondicionado','FaTemperatureHigh'),(4,'Calefacción','FaHotjar'),(5,'Gym','GiGymBag'),(6,'Pet Friendly','Buscar icono'),(7,'Pileta Climatizada','buscar icono'),(8,'Sala de Eventos','buscar icono'),(9,'Spa','buscar icono'),(10,'Media Pensión','buscar icono'),(11,'All Inclusive','buscar icono');
/*!40000 ALTER TABLE `features` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `features_sequence`
--

DROP TABLE IF EXISTS `features_sequence`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `features_sequence` (
  `next_val` bigint DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `features_sequence`
--

LOCK TABLES `features_sequence` WRITE;
/*!40000 ALTER TABLE `features_sequence` DISABLE KEYS */;
INSERT INTO `features_sequence` VALUES (12);
/*!40000 ALTER TABLE `features_sequence` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `images`
--

DROP TABLE IF EXISTS `images`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `images` (
  `id` bigint NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `url` varchar(255) DEFAULT NULL,
  `products_id` bigint NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK7a96p9ncl6hbkh5abxt2xndb5` (`products_id`),
  CONSTRAINT `FK7a96p9ncl6hbkh5abxt2xndb5` FOREIGN KEY (`products_id`) REFERENCES `products` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `images`
--

LOCK TABLES `images` WRITE;
/*!40000 ALTER TABLE `images` DISABLE KEYS */;
INSERT INTO `images` VALUES (1,'ImagenAProducto1','https://bucket-pig6.s3.us-east-2.amazonaws.com/CarrouselProductosImg/ProductoId1/photo-1551632436-cbf8dd35adfa.webp',1),(2,'ImagenBProducto1','https://bucket-pig6.s3.us-east-2.amazonaws.com/CarrouselProductosImg/ProductoId1/photo-1555854877-bab0e564b8d5.webp',1),(3,'ImagenCProducto1','https://bucket-pig6.s3.us-east-2.amazonaws.com/CarrouselProductosImg/ProductoId1/photo-1561501878-aabd62634533.webp',1),(4,'ImagenDProducto1','https://bucket-pig6.s3.us-east-2.amazonaws.com/CarrouselProductosImg/ProductoId1/photo-1565031491910-e57fac031c41.webp',1),(5,'ImagenAProducto2','https://bucket-pig6.s3.us-east-2.amazonaws.com/CarrouselProductosImg/ProductoId2/photo-1540304453527-62f979142a17.webp',2),(6,'ImagenBProducto2','https://bucket-pig6.s3.us-east-2.amazonaws.com/CarrouselProductosImg/ProductoId2/photo-1556438758-e02fa974a98f.webp',2),(7,'ImagenCProducto2','https://bucket-pig6.s3.us-east-2.amazonaws.com/CarrouselProductosImg/ProductoId2/photo-1584622650111-993a426fbf0a.webp',2),(8,'ImagenDProducto2','https://bucket-pig6.s3.us-east-2.amazonaws.com/CarrouselProductosImg/ProductoId2/photo-1618773928121-c32242e63f39.webp',2),(9,'ImagenAProducto3','https://bucket-pig6.s3.us-east-2.amazonaws.com/CarrouselProductosImg/ProductoId3/photo-1507038772120-7fff76f79d79.webp',3),(10,'ImagenBProducto3','https://bucket-pig6.s3.us-east-2.amazonaws.com/CarrouselProductosImg/ProductoId3/photo-1535111288988-e91447f31c13.webp',3),(11,'ImagenCProducto3','https://bucket-pig6.s3.us-east-2.amazonaws.com/CarrouselProductosImg/ProductoId3/photo-1612374172029-be0eea9796a8.webp',3),(12,'ImagenDProducto3','https://bucket-pig6.s3.us-east-2.amazonaws.com/CarrouselProductosImg/ProductoId3/photo-1626688949184-66860d7478f0.webp',3),(13,'ImagenAProducto4','https://bucket-pig6.s3.us-east-2.amazonaws.com/CarrouselProductosImg/ProductoId4/photo-1534009502677-4e5080efa8c6.webp',4),(14,'ImagenBProducto4','https://bucket-pig6.s3.us-east-2.amazonaws.com/CarrouselProductosImg/ProductoId4/photo-1576013551627-0cc20b96c2a7.webp',4),(15,'ImagenCProducto4','https://bucket-pig6.s3.us-east-2.amazonaws.com/CarrouselProductosImg/ProductoId4/photo-1611892440504-42a792e24d32.webp',4),(16,'ImagenDProducto4','https://bucket-pig6.s3.us-east-2.amazonaws.com/CarrouselProductosImg/ProductoId4/photo-1611892441796-ae6af0ec2cc8.webp',4),(17,'ImagenAProducto5','https://bucket-pig6.s3.us-east-2.amazonaws.com/CarrouselProductosImg/ProductoId5/photo-1519167758481-83f550bb49b3.webp',5),(18,'ImagenBProducto5','https://bucket-pig6.s3.us-east-2.amazonaws.com/CarrouselProductosImg/ProductoId5/photo-1567484020449-5d7175bc869a.webp',5),(19,'ImagenCProducto5','https://bucket-pig6.s3.us-east-2.amazonaws.com/CarrouselProductosImg/ProductoId5/photo-1600488999585-e4364713b90a.webp',5),(20,'ImagenDProducto5','https://bucket-pig6.s3.us-east-2.amazonaws.com/CarrouselProductosImg/ProductoId5/photo-1631048835388-46642de1582e.webp',5),(21,'ImagenAProducto6','https://bucket-pig6.s3.us-east-2.amazonaws.com/CarrouselProductosImg/ProductoId6/photo-1507086182422-97bd7ca2413b.webp',6),(22,'ImagenBProducto6','https://bucket-pig6.s3.us-east-2.amazonaws.com/CarrouselProductosImg/ProductoId6/photo-1535567465397-7523840f2ae9.webp',6),(23,'ImagenCProducto6','https://bucket-pig6.s3.us-east-2.amazonaws.com/CarrouselProductosImg/ProductoId6/photo-1591825381767-c7137b8eda0f.webp',6),(24,'ImagenDProducto6','https://bucket-pig6.s3.us-east-2.amazonaws.com/CarrouselProductosImg/ProductoId6/photo-1605473203669-00e028079fc3.webp',6),(25,'ImagenAProducto7','https://bucket-pig6.s3.us-east-2.amazonaws.com/CarrouselProductosImg/ProductoId6/photo-1507086182422-97bd7ca2413b.webp',7),(26,'ImagenBProducto7','https://bucket-pig6.s3.us-east-2.amazonaws.com/CarrouselProductosImg/ProductoId6/photo-1591825381767-c7137b8eda0f.webp',7),(27,'ImagenCProducto7','https://bucket-pig6.s3.us-east-2.amazonaws.com/CarrouselProductosImg/ProductoId6/photo-1591825729269-caeb344f6df2.webp',7),(28,'ImagenDProducto7','https://bucket-pig6.s3.us-east-2.amazonaws.com/CarrouselProductosImg/ProductoId7/photo-1644204318703-41f6109428be.webp',7),(29,'ImagenAProducto8','https://bucket-pig6.s3.us-east-2.amazonaws.com/CarrouselProductosImg/ProductoId8/photo-1584622650111-993a426fbf0a.webp',8),(30,'ImagenBProducto8','https://bucket-pig6.s3.us-east-2.amazonaws.com/CarrouselProductosImg/ProductoId8/photo-1588854337221-4cf9fa96059c.webp',8),(31,'ImagenCProducto8','https://bucket-pig6.s3.us-east-2.amazonaws.com/CarrouselProductosImg/ProductoId8/photo-1595526051245-4506e0005bd0.webp',8),(32,'ImagenDProducto8','https://bucket-pig6.s3.us-east-2.amazonaws.com/CarrouselProductosImg/ProductoId8/photo-1616593969747-4797dc75033e.webp',8);
/*!40000 ALTER TABLE `images` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `images_sequence`
--

DROP TABLE IF EXISTS `images_sequence`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `images_sequence` (
  `next_val` bigint DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `images_sequence`
--

LOCK TABLES `images_sequence` WRITE;
/*!40000 ALTER TABLE `images_sequence` DISABLE KEYS */;
INSERT INTO `images_sequence` VALUES (33);
/*!40000 ALTER TABLE `images_sequence` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products` (
  `id` bigint NOT NULL,
  `address` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `location` varchar(255) DEFAULT NULL,
  `long_description` varchar(1500) DEFAULT NULL,
  `map_url` varchar(400) DEFAULT NULL,
  `rating` int DEFAULT NULL,
  `review` int DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `url` varchar(400) DEFAULT NULL,
  `watch` varchar(400) DEFAULT NULL,
  `categories_id` bigint NOT NULL,
  `cities_id` bigint NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FKgro094vh0dp0tly1225wk8u37` (`categories_id`),
  KEY `FKldyb835nxk9acwd1owvar2kq4` (`cities_id`),
  CONSTRAINT `FKgro094vh0dp0tly1225wk8u37` FOREIGN KEY (`categories_id`) REFERENCES `categories` (`id`),
  CONSTRAINT `FKldyb835nxk9acwd1owvar2kq4` FOREIGN KEY (`cities_id`) REFERENCES `cities` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,'Av. de Mayo 1245','En el corazón de San Telmo, disfruta de un albergue sofisticado, con cómodos espacios compartidos, terraza, comedor y lugares recreativos para hacer de tu estadia un disfrute único','A 50m del centro','En el corazón de San Telmo, disfruta de un albergue sofisticado, con cómodos espacios compartidos, terraza, comedor y lugares recreativos para hacer de tu estadia un disfrute único, con dos impresionantes piscinas una en la terraza (al aire libre) y otra en el 5to piso; habitaciones privadas (algunas con tina y vista al área de la piscina) y habitaciones compartidas.','https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3283.810289552206!2d-58.3841804!3d-34.6089584!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccadaba300269%3A0xa2d1c879b6ec4702!2sAv.%20de%20Mayo%201245%2C%20C1085%20CABA!5e0!3m2!1ses-419!2sar!4v1656554235688!5m2!1ses-419!2sar',3,7,'Loft exclusivo','https://bucket-pig6.s3.us-east-2.amazonaws.com/CarrouselProductosImg/ProductoId1/photo-1631049035634-c04c637651b1.webp','https://www.google.com.ar/maps/place/Av.+de+Mayo+1245,+C1085+CABA/@-34.6089584,-58.3863691,17z/data=!3m1!4b1!4m5!3m4!1s0x95bccadaba300269:0xa2d1c879b6ec4702!8m2!3d-34.6089584!4d-58.3841804',2,2),(2,'Adolfo Alsina 1112','El Luxor Hotel es un moderno y elegante hotel de 4 estrellas, ubicado en la mejor zona de Buenos Aires, ideal para unas escapada románticas y de gran encanto.','A 100m del centro','El Luxor Hotel es un moderno y elegante hotel de 4 estrellas, ubicado en la mejor zona de Buenos Aires, ideal para unas escapada románticas y de gran encanto. Su decoración moderna convierte cada una de las estancias es un espacio acogedor del cual no querras irte. Además cuenta con un cuidado jardín y una piscina donde se podra dar un refrescante baño. Sin embargo, lo que más aprecian sus clientes son las habitaciones con bañera de hidromasaje privada, ideal para tomar un baño de espuma en y desconectar de la rutina.','https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3286.8451534407727!2d-58.4728305!3d-34.53215089999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb6afc666b031%3A0x5dc2b66bc479ea5!2sAdolfo%20Alsina%201112%2C%20B1638CQJ%20Vicente%20L%C3%B3pez%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1656554308152!5m2!1ses-419!2sar',4,8,'Luxor hotel','https://bucket-pig6.s3.us-east-2.amazonaws.com/CarrouselProductosImg/ProductoId2/photo-1551016043-583ac9f3ecb1.webp','https://www.google.com.ar/maps/place/Adolfo+Alsina+1112,+B1638CQJ+Vicente+L%C3%B3pez,+Provincia+de+Buenos+Aires/@-34.5321509,-58.4750192,17z/data=!3m1!4b1!4m5!3m4!1s0x95bcb6afc666b031:0x5dc2b66bc479ea5!8m2!3d-34.5321509!4d-58.4728305',3,2),(3,'9 de Julio 318','Ubicado en Mendoza, alejado de los suburbios, Kamui Hostel es el lugar ideal para descansar en tus vacaciones. Rodeado de vegetación, naturaleza y paz.','A 3000m del centro','Ubicado en Mendoza, alejado de los suburbios, Kamui Hostel es el lugar ideal para descansar en tus vacaciones. Rodeado de vegetación, naturaleza y paz. Un lugar creado para que tus vacaciones sean cómodas y relajantes, ideal para descansar, desconectar de todo. Además es un sitio cultural que te hará conocer diferentes costumbres, comidas, idiomas, bellezas,arte y el delicioso elixir de nuestra tierra, el vino.','https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3283.462182016848!2d-68.3381939!3d-34.6177589!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x96790806cbcbec27%3A0xa8e52b1cee9c46a7!2sAv.%209%20de%20Julio%20318%2C%20M5600%20Mendoza!5e0!3m2!1ses-419!2sar!4v1656554338683!5m2!1ses-419!2sar',4,8,'Kamui Hostel','https://bucket-pig6.s3.us-east-2.amazonaws.com/CarrouselProductosImg/ProductoId3/photo-1606402179428-a57976d71fa4.webp','https://www.google.com.ar/maps/place/Av.+9+de+Julio+318,+M5600+Mendoza/@-34.6177588,-68.3426786,17z/data=!3m1!4b1!4m5!3m4!1s0x96790806cbcbec27:0xa8e52b1cee9c46a7!8m2!3d-34.6177589!4d-68.3381939',2,3),(4,'Boulevard San Juan 165','Paradisíaco sitio en pleno corazón del Parque Natural de Córdoba. 45 minutos de Mina Clavero en donde vivirás el lujo de disfrutar de la naturaleza.','A 5km del centro','Paradisíaco sitio en pleno corazón del Parque Natural de Córdoba. 45 minutos de Mina Clavero en donde vivirás el lujo de disfrutar de la naturaleza. Totalmente equipado para su comodidad, decorado con un excelente gusto a de mas de su genial atención y predisposición a la hora de ayudar a los huéspedes en cualquier duda. Equipado también con hidromasaje y cancha de tenis para hacer de tu experiencia totalmente memorable.','https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3404.7687003459873!2d-64.1882007!3d-31.420498199999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9432a2843a3bee7d%3A0x6b6946a57f794e21!2sBlvd.%20San%20Juan%20165%2C%20X5000ATB%20C%C3%B3rdoba!5e0!3m2!1ses-419!2sar!4v1656554377203!5m2!1ses-419!2sar',4,9,'The Forest','https://bucket-pig6.s3.us-east-2.amazonaws.com/CarrouselProductosImg/ProductoId4/photo-1534009502677-4e5080efa8c6.webp','https://www.google.com.ar/maps/place/Blvd.+San+Juan+165,+X5000ATB+C%C3%B3rdoba/@-31.4204982,-64.1903894,17z/data=!3m1!4b1!4m5!3m4!1s0x9432a2843a3bee7d:0x6b6946a57f794e21!8m2!3d-31.4204982!4d-64.1882007',3,4),(5,'Av. España 1210','Hotel con manejo sostenible, especialmente en el tema ambiental y cultural. Está construido con arquitectura internacional para que puedas disfrutar de una experiencia única.','A 250m del centro','Hotel con manejo sostenible, especialmente en el tema ambiental y cultural. Está construido con arquitectura internacional para que puedas disfrutar de una experiencia única. Los tonos tierra, las maderas cálidas, las telas de lujo y las lámparas asombrosas crean espacios encantadores para descansar y reagruparse después de un día explorando la principal región vinícola de Argentina.','https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3350.353906618516!2d-68.84185719999999!3d-32.88881!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x967e091bc43abb8b%3A0x923651216cccf2da!2sAv.%20Espa%C3%B1a%201210%2C%20M5500%20Mendoza!5e0!3m2!1ses-419!2sar!4v1656554408962!5m2!1ses-419!2sar',4,9,'Luminous','https://bucket-pig6.s3.us-east-2.amazonaws.com/CarrouselProductosImg/ProductoId5/photo-1450258339486-1b23542514e3.webp','https://www.google.com.ar/maps/place/Av.+Espa%C3%B1a+1210,+M5500+Mendoza/@-32.88881,-68.8440459,17z/data=!3m1!4b1!4m5!3m4!1s0x967e091bc43abb8b:0x923651216cccf2da!8m2!3d-32.88881!4d-68.8418572',3,3),(6,'San Martín 460','El Buenavista Park ofrece un calido alojamiento y cuenta con WiFi gratuita, baño termal y desayuno. También proporciona estacionamiento privado gratuito.','A 2300m del centro','El Buenavista Park ofrece un calido alojamiento y cuenta con WiFi gratuita, baño termal y desayuno. También proporciona estacionamiento privado gratuito. Las Suites tienen las mismas comodidades de las habitaciones Concept y cuentan con 60 mts2 y vista panorámica a la Cordillera de los Andes.  La categoría Vip Suite es la propuesta más exclusiva del hotel, cuenta con 102 mts2, un living, un espacioso vestidor y una terraza individual.','https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3005.033383187372!2d-71.3155408!3d-41.1337972!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x961a7b5a01bbb96b%3A0x284d20900ae51bb8!2sSan%20Mart%C3%ADn%20460%2C%20San%20Carlos%20de%20Bariloche%2C%20R%C3%ADo%20Negro!5e0!3m2!1ses-419!2sar!4v1656554439048!5m2!1ses-419!2sar',3,10,'Buenavista Park','https://bucket-pig6.s3.us-east-2.amazonaws.com/CarrouselProductosImg/ProductoId6/photo-1591825729269-caeb344f6df2.webp','https://www.google.com.ar/maps/place/San+Mart%C3%ADn+460,+San+Carlos+de+Bariloche,+R%C3%ADo+Negro/@-41.1337972,-71.3177295,17z/data=!3m1!4b1!4m5!3m4!1s0x961a7b5a01bbb96b:0x284d20900ae51bb8!8m2!3d-41.1337972!4d-71.3155408',4,1),(7,'Onelli 125','Navi combina la calidez de una hostería sin dejar de brindar los servicios y comodidades de un hostel.','A 200m del centro','Navi combina la calidez de una hostería sin dejar de brindar los servicios y comodidades de un hostel. Ubicado en la base un centro de ski, el refugio de montaña es un lugar muy acogedor para pasar una estadía agradable al pie de la Cordillera de Los Andes. Equipado con todo lo necesario, se presta para compartir experiencias y disfrutar de la nieve de una manera excepcional.','https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3005.0226321237974!2d-71.2970489!3d-41.134031900000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x961a7b6525345333%3A0xab60f68855f6560a!2sOnelli%20125%2C%20San%20Carlos%20de%20Bariloche%2C%20R%C3%ADo%20Negro!5e0!3m2!1ses-419!2sar!4v1656554464379!5m2!1ses-419!2sar',3,7,'Navi Hostel','https://bucket-pig6.s3.us-east-2.amazonaws.com/CarrouselProductosImg/ProductoId7/photo-1520277739336-7bf67edfa768.webp','https://www.google.com.ar/maps/place/Onelli+125,+San+Carlos+de+Bariloche,+R%C3%ADo+Negro/@-41.1340319,-71.2992376,17z/data=!3m1!4b1!4m5!3m4!1s0x961a7b6525345333:0xab60f68855f6560a!8m2!3d-41.1340319!4d-71.2970489',2,1),(8,'Av. Vélez Sarsfield 817','Departamento suite con un dormitorio, un baño, sala de estar con sofá cama tamaño queen, comedor y cocineta con impresionantes vistas al mar.','A 100m del centro','Departamento suite con un dormitorio, un baño, sala de estar con sofá cama tamaño queen, comedor y cocineta con impresionantes vistas al mar. Un ambiente donde la tranquilidad, privacidad, servicio correcto y la atención puesta en cada detalle hacen de su estadía en un placer. Los departamentos se encuentran totalmente equipados, ademas también ofrece un completo SPA.','https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3404.6070735161766!2d-64.1906927!3d-31.4249502!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9432a288a27e8a79%3A0xd90728c4abadbf5f!2sAv.%20V%C3%A9lez%20Sarsfield%20817%2C%20X5000%20JJI%2C%20C%C3%B3rdoba!5e0!3m2!1ses-419!2sar!4v1656554506686!5m2!1ses-419!2sar',5,8,'The Dreamer','https://bucket-pig6.s3.us-east-2.amazonaws.com/CarrouselProductosImg/ProductoId8/photo-1603003568133-55b07aaf1860.webp','https://www.google.com.ar/maps/place/Av.+V%C3%A9lez+Sarsfield+817,+X5000+JJI,+C%C3%B3rdoba/@-31.4249502,-64.1928814,17z/data=!3m1!4b1!4m5!3m4!1s0x9432a288a27e8a79:0xd90728c4abadbf5f!8m2!3d-31.4249502!4d-64.1906927',1,4);
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products_cancellations`
--

DROP TABLE IF EXISTS `products_cancellations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products_cancellations` (
  `products_id` bigint NOT NULL,
  `cancellations_id` bigint NOT NULL,
  PRIMARY KEY (`products_id`,`cancellations_id`),
  KEY `FKt5yltd0cxglccgqkwq0wkt780` (`cancellations_id`),
  CONSTRAINT `FKabnhyyox2addme6wivpd6ydbv` FOREIGN KEY (`products_id`) REFERENCES `products` (`id`),
  CONSTRAINT `FKt5yltd0cxglccgqkwq0wkt780` FOREIGN KEY (`cancellations_id`) REFERENCES `cancellations` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products_cancellations`
--

LOCK TABLES `products_cancellations` WRITE;
/*!40000 ALTER TABLE `products_cancellations` DISABLE KEYS */;
INSERT INTO `products_cancellations` VALUES (1,1),(2,1),(5,1),(7,1),(3,2),(4,2),(6,2),(8,2);
/*!40000 ALTER TABLE `products_cancellations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products_has_features`
--

DROP TABLE IF EXISTS `products_has_features`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products_has_features` (
  `products_id` bigint NOT NULL,
  `features_id` bigint NOT NULL,
  PRIMARY KEY (`products_id`,`features_id`),
  KEY `FK9u5v86f282lnvug5o4gf60s0w` (`features_id`),
  CONSTRAINT `FK32vvffbnqhnob8wek15em0mpp` FOREIGN KEY (`products_id`) REFERENCES `products` (`id`),
  CONSTRAINT `FK9u5v86f282lnvug5o4gf60s0w` FOREIGN KEY (`features_id`) REFERENCES `features` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products_has_features`
--

LOCK TABLES `products_has_features` WRITE;
/*!40000 ALTER TABLE `products_has_features` DISABLE KEYS */;
INSERT INTO `products_has_features` VALUES (1,1),(2,1),(3,1),(4,1),(5,1),(6,1),(7,1),(8,1),(4,2),(6,2),(8,2),(1,3),(2,3),(4,3),(5,3),(6,3),(8,3),(1,4),(2,4),(3,4),(4,4),(5,4),(7,4),(8,4),(4,5),(8,5),(3,6),(8,6),(2,7),(4,7),(2,8),(2,9),(5,9),(1,10),(2,10),(6,10),(7,10),(4,11),(5,11);
/*!40000 ALTER TABLE `products_has_features` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products_rules`
--

DROP TABLE IF EXISTS `products_rules`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products_rules` (
  `products_id` bigint NOT NULL,
  `rules_id` bigint NOT NULL,
  PRIMARY KEY (`products_id`,`rules_id`),
  KEY `FKf3s568ut4w50e9d3tkfuwowxt` (`rules_id`),
  CONSTRAINT `FK7usrtjlud14uwnvywnx10vtlp` FOREIGN KEY (`products_id`) REFERENCES `products` (`id`),
  CONSTRAINT `FKf3s568ut4w50e9d3tkfuwowxt` FOREIGN KEY (`rules_id`) REFERENCES `rules` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products_rules`
--

LOCK TABLES `products_rules` WRITE;
/*!40000 ALTER TABLE `products_rules` DISABLE KEYS */;
INSERT INTO `products_rules` VALUES (1,1),(2,1),(3,1),(4,1),(5,1),(6,1),(7,1),(8,1),(1,2),(2,2),(3,2),(4,2),(5,2),(6,2),(7,2),(8,2),(1,3),(2,3),(3,3),(4,3),(5,3),(7,3),(8,3),(1,4),(2,4),(3,4),(5,4),(7,4),(1,5),(2,5),(4,5),(6,5),(8,5),(1,6),(2,6),(4,6),(5,6),(6,6),(8,6);
/*!40000 ALTER TABLE `products_rules` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products_safeties`
--

DROP TABLE IF EXISTS `products_safeties`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products_safeties` (
  `products_id` bigint NOT NULL,
  `safeties_id` bigint NOT NULL,
  PRIMARY KEY (`products_id`,`safeties_id`),
  KEY `FKqeqg5ex6lf83wjcxhtwspn2ey` (`safeties_id`),
  CONSTRAINT `FKq0ae9vv6lmtln2bjbuer0tex6` FOREIGN KEY (`products_id`) REFERENCES `products` (`id`),
  CONSTRAINT `FKqeqg5ex6lf83wjcxhtwspn2ey` FOREIGN KEY (`safeties_id`) REFERENCES `safeties` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products_safeties`
--

LOCK TABLES `products_safeties` WRITE;
/*!40000 ALTER TABLE `products_safeties` DISABLE KEYS */;
INSERT INTO `products_safeties` VALUES (1,1),(3,1),(4,1),(6,1),(7,1),(8,1),(2,2),(5,2),(1,3),(5,3),(7,3),(8,3),(2,4),(6,4);
/*!40000 ALTER TABLE `products_safeties` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products_sequence`
--

DROP TABLE IF EXISTS `products_sequence`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products_sequence` (
  `next_val` bigint DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products_sequence`
--

LOCK TABLES `products_sequence` WRITE;
/*!40000 ALTER TABLE `products_sequence` DISABLE KEYS */;
INSERT INTO `products_sequence` VALUES (9);
/*!40000 ALTER TABLE `products_sequence` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `roles`
--

DROP TABLE IF EXISTS `roles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `roles` (
  `id` bigint NOT NULL,
  `name` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `roles`
--

LOCK TABLES `roles` WRITE;
/*!40000 ALTER TABLE `roles` DISABLE KEYS */;
INSERT INTO `roles` VALUES (1,'ADMIN'),(2,'USER');
/*!40000 ALTER TABLE `roles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `roles_sequence`
--

DROP TABLE IF EXISTS `roles_sequence`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `roles_sequence` (
  `next_val` bigint DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `roles_sequence`
--

LOCK TABLES `roles_sequence` WRITE;
/*!40000 ALTER TABLE `roles_sequence` DISABLE KEYS */;
INSERT INTO `roles_sequence` VALUES (3);
/*!40000 ALTER TABLE `roles_sequence` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `rules`
--

DROP TABLE IF EXISTS `rules`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `rules` (
  `id` bigint NOT NULL,
  `description` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `rules`
--

LOCK TABLES `rules` WRITE;
/*!40000 ALTER TABLE `rules` DISABLE KEYS */;
INSERT INTO `rules` VALUES (1,'Check-in: 10:00AM.'),(2,'Check-out: 10:00AM.'),(3,'No se permite realizar fiestas en la habitación.'),(4,'Sólo se permite fumar en los espacios abiertos del establecimiento.'),(5,'No se permite música ruidosa o con alto volumen en las habitaciones.'),(6,'Todo daño o perdida por el huésped a los bienes del establecimiento, deberá pagarlo de acuerdo con el valor establecido por la empresa.');
/*!40000 ALTER TABLE `rules` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `rules_sequence`
--

DROP TABLE IF EXISTS `rules_sequence`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `rules_sequence` (
  `next_val` bigint DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `rules_sequence`
--

LOCK TABLES `rules_sequence` WRITE;
/*!40000 ALTER TABLE `rules_sequence` DISABLE KEYS */;
INSERT INTO `rules_sequence` VALUES (7);
/*!40000 ALTER TABLE `rules_sequence` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `safeties`
--

DROP TABLE IF EXISTS `safeties`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `safeties` (
  `id` bigint NOT NULL,
  `description` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `safeties`
--

LOCK TABLES `safeties` WRITE;
/*!40000 ALTER TABLE `safeties` DISABLE KEYS */;
INSERT INTO `safeties` VALUES (1,'Se aplican las prácticas de salud y seguridad relacionadas al COVID-19.'),(2,'Se ofrece a los huéspedes, con costo adicional, la facilidad de realizarse la prueba COVID-19 antígeno o PCR dentro de las instalaciones de la propiedad.'),(3,'Detector de humo y monóxido de carbono en todo el establecimiento.'),(4,'Prohibido ingresar al establecimiento con armas de fuego, materiales explosivos y/o inflamables, estupefacientes o sustancias similares.');
/*!40000 ALTER TABLE `safeties` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `safeties_sequence`
--

DROP TABLE IF EXISTS `safeties_sequence`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `safeties_sequence` (
  `next_val` bigint DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `safeties_sequence`
--

LOCK TABLES `safeties_sequence` WRITE;
/*!40000 ALTER TABLE `safeties_sequence` DISABLE KEYS */;
INSERT INTO `safeties_sequence` VALUES (5);
/*!40000 ALTER TABLE `safeties_sequence` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` bigint NOT NULL,
  `avatar` varchar(255) DEFAULT NULL,
  `city` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `surname` varchar(255) DEFAULT NULL,
  `roles_id` bigint NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FKbgvg7xuekkcqmpvi3tgkxk85j` (`roles_id`),
  CONSTRAINT `FKbgvg7xuekkcqmpvi3tgkxk85j` FOREIGN KEY (`roles_id`) REFERENCES `roles` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'http://www.gravatar.com/avatar/611c128d129189b556c69df00dc782b4.png?d=https%3A%2F%2Fbucket-pig6.s3.us-east-2.amazonaws.com%2FLogos%2BHomu%2FLogoH.png','Rosario','administrador@homu.com','Administrador','$2a$10$bKJ7MKhwb9ufkat03MjcvOxC8np7SM2smyovCycLS3Ku9pFs0Qb.6','Administrador',1),(2,'http://www.gravatar.com/avatar/52037467dc98b7729381ceeac5af0772.png?d=https%3A%2F%2Fbucket-pig6.s3.us-east-2.amazonaws.com%2FLogos%2BHomu%2FLogoH.png','Rosario','usuario@homu.com','Usuario','$2a$10$.jw7JMezQwYigAa9d041M.tu7cRXGNgGIxswIy2Vqmg66BsAhsxBe','Usuario',2);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users_sequence`
--

DROP TABLE IF EXISTS `users_sequence`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users_sequence` (
  `next_val` bigint DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users_sequence`
--

LOCK TABLES `users_sequence` WRITE;
/*!40000 ALTER TABLE `users_sequence` DISABLE KEYS */;
INSERT INTO `users_sequence` VALUES (3);
/*!40000 ALTER TABLE `users_sequence` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-07-06 22:02:20

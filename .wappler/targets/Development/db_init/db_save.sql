-- MySQL dump 10.13  Distrib 8.0.22, for Linux (x86_64)
--
-- Host: localhost    Database: skill
-- ------------------------------------------------------
-- Server version	8.0.22

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `category`
--

DROP TABLE IF EXISTS `category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `category` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `description` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `category`
--

LOCK TABLES `category` WRITE;
/*!40000 ALTER TABLE `category` DISABLE KEYS */;
INSERT INTO `category` VALUES (1,'language'),(2,'art');
/*!40000 ALTER TABLE `category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `comment`
--

DROP TABLE IF EXISTS `comment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `comment` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `datetime` datetime DEFAULT NULL,
  `userId` int unsigned DEFAULT NULL,
  `offerId` int unsigned DEFAULT NULL,
  `comment` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `comments_userid_foreign` (`userId`),
  KEY `comments_offerid_foreign` (`offerId`),
  CONSTRAINT `comments_offerid_foreign` FOREIGN KEY (`offerId`) REFERENCES `offer` (`id`),
  CONSTRAINT `comments_userid_foreign` FOREIGN KEY (`userId`) REFERENCES `user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comment`
--

LOCK TABLES `comment` WRITE;
/*!40000 ALTER TABLE `comment` DISABLE KEYS */;
/*!40000 ALTER TABLE `comment` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `offer`
--

DROP TABLE IF EXISTS `offer`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `offer` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `userId` int unsigned DEFAULT NULL,
  `datetime` datetime DEFAULT NULL,
  `takeCategory` int unsigned DEFAULT NULL,
  `giveCategory` int unsigned DEFAULT NULL,
  `takeSubcategory` int unsigned DEFAULT NULL,
  `giveSubcategory` int unsigned DEFAULT NULL,
  `takeLevel` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `giveLevel` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `stars` float(8,2) DEFAULT NULL,
  `isApproved` tinyint(1) DEFAULT NULL,
  `isPending` tinyint(1) DEFAULT NULL,
  `isPosted` tinyint(1) DEFAULT NULL,
  `description` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `image1` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `image2` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `image3` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `offers_takecategory_foreign` (`takeCategory`),
  KEY `offers_givecategory_foreign` (`giveCategory`),
  KEY `offers_takesubcategory_foreign` (`takeSubcategory`),
  KEY `offers_givesubcategory_foreign` (`giveSubcategory`),
  KEY `offers_userid_foreign` (`userId`),
  CONSTRAINT `offers_givecategory_foreign` FOREIGN KEY (`giveCategory`) REFERENCES `category` (`id`),
  CONSTRAINT `offers_givesubcategory_foreign` FOREIGN KEY (`giveSubcategory`) REFERENCES `subcategory` (`id`),
  CONSTRAINT `offers_takecategory_foreign` FOREIGN KEY (`takeCategory`) REFERENCES `category` (`id`),
  CONSTRAINT `offers_takesubcategory_foreign` FOREIGN KEY (`takeSubcategory`) REFERENCES `subcategory` (`id`),
  CONSTRAINT `offers_userid_foreign` FOREIGN KEY (`userId`) REFERENCES `user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `offer`
--

LOCK TABLES `offer` WRITE;
/*!40000 ALTER TABLE `offer` DISABLE KEYS */;
/*!40000 ALTER TABLE `offer` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `subcategory`
--

DROP TABLE IF EXISTS `subcategory`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `subcategory` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `categoryId` int unsigned DEFAULT NULL,
  `description` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `subcategory_categoryid_foreign` (`categoryId`),
  CONSTRAINT `subcategory_categoryid_foreign` FOREIGN KEY (`categoryId`) REFERENCES `category` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `subcategory`
--

LOCK TABLES `subcategory` WRITE;
/*!40000 ALTER TABLE `subcategory` DISABLE KEYS */;
/*!40000 ALTER TABLE `subcategory` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(50) DEFAULT NULL,
  `surname` varchar(50) DEFAULT NULL,
  `telephone` varchar(50) DEFAULT NULL,
  `email` varchar(50) DEFAULT NULL,
  `country` varchar(50) DEFAULT NULL,
  `avatar` varchar(100) DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL,
  `rating` float(8,2) DEFAULT NULL,
  `isAdmin` tinyint(1) DEFAULT '0',
  `bio` varchar(255) DEFAULT NULL,
  `datetime` datetime DEFAULT NULL,
  `password` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=75 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (43,'Rowena','Pardy','Female','rpardy0@unc.edu','Lehner, Langworth and Hagenes','/assets/img/avatar-1.jpg',NULL,NULL,NULL,NULL,NULL,'user'),(62,'Jaquelyn','Sinnatt','Female','jsinnattj@cyberchimps.com','Lebsack, Wisozk and Kuhlman','/assets/img/avatar-6.jpg',NULL,NULL,NULL,NULL,NULL,NULL),(64,'admin','admin','admin','admin@admin.com','admin','admin','admin',5.00,1,'admin',NULL,'admin');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `wappler_migrations`
--

DROP TABLE IF EXISTS `wappler_migrations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `wappler_migrations` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `batch` int DEFAULT NULL,
  `migration_time` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `wappler_migrations`
--

LOCK TABLES `wappler_migrations` WRITE;
/*!40000 ALTER TABLE `wappler_migrations` DISABLE KEYS */;
INSERT INTO `wappler_migrations` VALUES (1,'20201130081449_init tables.js',1,'2021-01-01 18:59:33'),(2,'20201130093244_offers table setup.js',2,'2021-01-01 19:02:38'),(3,'20201130090132_category table.js',3,'2021-01-01 19:02:52'),(4,'20201130093640_users table setup.js',4,'2021-01-01 19:03:43'),(5,'20201130090243_comment setup.js',5,'2021-01-01 19:04:58'),(6,'20201130090327_subcategory setup.js',6,'2021-01-01 19:05:13'),(7,'20201204170403_datetime added to user.js',7,'2021-01-01 19:05:47'),(8,'20201207171123_added password.js',8,'2021-01-01 19:06:02'),(9,'20201208134323_naming.js',9,'2021-01-01 19:06:13'),(10,'20201216212810_admin added.js',10,'2021-01-01 19:06:38'),(11,'20201216212851_admin added.js',11,'2021-01-01 19:06:45'),(12,'20210101190908_rating is float after restored.js',12,'2021-01-01 19:09:13'),(13,'20210101193204_user+admin after restored.js',13,'2021-01-01 19:32:06'),(14,'20210102172559_added cats.js',14,'2021-01-02 17:26:00'),(15,'20210106010157_isAdmin is false by default.js',15,'2021-01-06 01:02:01');
/*!40000 ALTER TABLE `wappler_migrations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `wappler_migrations_lock`
--

DROP TABLE IF EXISTS `wappler_migrations_lock`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `wappler_migrations_lock` (
  `index` int unsigned NOT NULL AUTO_INCREMENT,
  `is_locked` int DEFAULT NULL,
  PRIMARY KEY (`index`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `wappler_migrations_lock`
--

LOCK TABLES `wappler_migrations_lock` WRITE;
/*!40000 ALTER TABLE `wappler_migrations_lock` DISABLE KEYS */;
INSERT INTO `wappler_migrations_lock` VALUES (1,0);
/*!40000 ALTER TABLE `wappler_migrations_lock` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-01-06  0:38:33

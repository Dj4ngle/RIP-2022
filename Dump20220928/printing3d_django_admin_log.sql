-- MySQL dump 10.13  Distrib 8.0.30, for Win64 (x86_64)
--
-- Host: localhost    Database: printing3d
-- ------------------------------------------------------
-- Server version	8.0.30

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
-- Table structure for table `django_admin_log`
--

DROP TABLE IF EXISTS `django_admin_log`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `django_admin_log` (
  `id` int NOT NULL AUTO_INCREMENT,
  `action_time` datetime(6) NOT NULL,
  `object_id` longtext,
  `object_repr` varchar(200) NOT NULL,
  `action_flag` smallint unsigned NOT NULL,
  `change_message` longtext NOT NULL,
  `content_type_id` int DEFAULT NULL,
  `user_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `django_admin_log_content_type_id_c4bce8eb_fk_django_co` (`content_type_id`),
  KEY `django_admin_log_user_id_c564eba6_fk_auth_user_id` (`user_id`),
  CONSTRAINT `django_admin_log_content_type_id_c4bce8eb_fk_django_co` FOREIGN KEY (`content_type_id`) REFERENCES `django_content_type` (`id`),
  CONSTRAINT `django_admin_log_user_id_c564eba6_fk_auth_user_id` FOREIGN KEY (`user_id`) REFERENCES `auth_user` (`id`),
  CONSTRAINT `django_admin_log_chk_1` CHECK ((`action_flag` >= 0))
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `django_admin_log`
--

LOCK TABLES `django_admin_log` WRITE;
/*!40000 ALTER TABLE `django_admin_log` DISABLE KEYS */;
INSERT INTO `django_admin_log` VALUES (1,'2022-09-27 14:30:45.261536','1','Model3d object (1)',2,'[{\"changed\": {\"fields\": [\"Price\"]}}]',7,1),(2,'2022-09-27 15:23:46.347699','1','cameras.png',1,'[{\"added\": {}}]',8,1),(3,'2022-09-27 15:45:08.010199','1','615 ММ ЭЙФЕЛЕВА БАШНЯ',2,'[{\"changed\": {\"fields\": [\"Description\"]}}]',7,1),(4,'2022-09-27 15:47:43.301722','1','615 ММ ЭЙФЕЛЕВА БАШНЯ',2,'[]',7,1),(5,'2022-09-27 16:02:28.824613','1','615 ММ ЭЙФЕЛЕВА БАШНЯ',2,'[{\"changed\": {\"fields\": [\"Image path\"]}}]',7,1),(6,'2022-09-27 16:03:53.667563','1','615 ММ ЭЙФЕЛЕВА БАШНЯ',2,'[{\"changed\": {\"fields\": [\"Image path\"]}}]',7,1),(7,'2022-09-27 16:04:31.256883','1','615 ММ ЭЙФЕЛЕВА БАШНЯ',2,'[{\"changed\": {\"fields\": [\"Price\"]}}]',7,1),(8,'2022-09-27 16:47:50.302095','1','cameras.png',3,'',8,1),(9,'2022-09-27 16:48:37.563732','2','ephelevabashnya.png',1,'[{\"added\": {}}]',8,1),(10,'2022-09-27 16:48:43.896176','1','615 ММ ЭЙФЕЛЕВА БАШНЯ',2,'[{\"changed\": {\"fields\": [\"Image path\"]}}]',7,1),(11,'2022-09-27 17:29:38.933568','1','615 ММ ЭЙФЕЛЕВА БАШНЯ',2,'[{\"changed\": {\"fields\": [\"Description\"]}}]',7,1),(12,'2022-09-27 17:30:20.934181','1','615 ММ ЭЙФЕЛЕВА БАШНЯ',2,'[{\"changed\": {\"fields\": [\"Description\"]}}]',7,1),(13,'2022-09-27 17:30:33.101142','1','615 ММ ЭЙФЕЛЕВА БАШНЯ',2,'[{\"changed\": {\"fields\": [\"Description\"]}}]',7,1),(14,'2022-09-27 17:32:29.699396','1','615 ММ ЭЙФЕЛЕВА БАШНЯ',2,'[{\"changed\": {\"fields\": [\"Description\"]}}]',7,1),(15,'2022-09-27 18:22:09.747203','3','BYuSTChELOVEKAPAUKA.png',1,'[{\"added\": {}}]',8,1),(16,'2022-09-27 18:22:18.791479','2','БЮСТ ЧЕЛОВЕКА-ПАУКА (ФАН-АРТ)',1,'[{\"added\": {}}]',7,1),(17,'2022-09-27 18:23:47.354627','4','parametricring.png',1,'[{\"added\": {}}]',8,1),(18,'2022-09-27 18:23:54.118443','3','ПАРАМЕТРИЧЕСКОЕ КОЛЬЦО',1,'[{\"added\": {}}]',7,1);
/*!40000 ALTER TABLE `django_admin_log` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-09-28  9:01:57

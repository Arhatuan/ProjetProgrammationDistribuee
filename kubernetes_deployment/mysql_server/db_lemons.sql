
--
-- Current Database: `db_lemons`
--

CREATE DATABASE /*!32312 IF NOT EXISTS*/ `db_lemons` /*!40100 DEFAULT CHARACTER SET latin1 */;

USE `db_lemons`;

--
-- Table structure for table `lemons`
--

DROP TABLE IF EXISTS `lemons`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `lemons` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `description` text,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `lemons`
--

LOCK TABLES `lemons` WRITE;
/*!40000 ALTER TABLE `lemons` DISABLE KEYS */;
INSERT INTO `lemons` VALUES (1,'Eureka','Classic tart lemon variety'),(2,'Meyer','Sweeter hybrid lemon'),(3,'Lisbon','Very acidic and juicy'),(4,'Ponderosa','Large thick-skinned lemon');
/*!40000 ALTER TABLE `lemons` ENABLE KEYS */;
UNLOCK TABLES;

-- Dump completed on 2026-04-26  8:45:57

DROP USER IF EXISTS 'lemon_user'@'%';
CREATE USER 'lemon_user'@'%' IDENTIFIED BY 'lemon_pass';
GRANT ALL ON `db_lemons`.* TO 'lemon_user'@'%';

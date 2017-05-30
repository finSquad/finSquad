-- ----------------------------------------------------------------------------
-- MySQL 
-- Migrated Schemata: facefin_db
-- Source Schemata: facefin_db
-- Created: Thu May 25 12:21:37 2017
-- Workbench Version: 6.3.8
-- ----------------------------------------------------------------------------

SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------------------------------------------------------
-- Schema facefin_db
-- ----------------------------------------------------------------------------
DROP SCHEMA IF EXISTS `facefin_db` ;
CREATE SCHEMA IF NOT EXISTS `facefin_db` ;

-- ----------------------------------------------------------------------------
-- Table facefin_db.tblcurrency
-- ----------------------------------------------------------------------------

CREATE TABLE IF NOT EXISTS `facefin_db`.`tblgeneralpost`(
  `id` INTEGER AUTO_INCREMENT PRIMARY KEY  NOT NULL,
  `general_post` VARCHAR(100) NOT NULL, 
  `date_created`  timestamp NOT NULL DEFAULT current_timestamp); 

CREATE TABLE IF NOT EXISTS `facefin_db`.`tblcurrency` (
  `id` INT(11) AUTO_INCREMENT NOT NULL ,
  `currencyType` VARCHAR(45) NOT NULL DEFAULT 'USD' COMMENT 'default current is USD but it can be different',
  `USDprice` FLOAT(10,2) NULL DEFAULT NULL,
  `BTCprice` FLOAT(10,5) NULL DEFAULT NULL,
  `moment_tstamp` VARCHAR( 255 ) NOT NULL,
  PRIMARY KEY (`id`))

ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8
COMMENT = 'This stand alone table to store curreny data from ajax call';

-- ----------------------------------------------------------------------------
-- Table facefin_db.tblfriendlist
-- ----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS `facefin_db`.`tblfriendlist` (
  `id` INT(11) NOT NULL AUTO_INCREMENT COMMENT 'This sequencial Id for the table acting as primary key',
  `mainUserId` INT(11) NOT NULL COMMENT 'This is the Id of the person looking at the screen or we call it as main Id FK',
  `friendUserId` INT(11) NOT NULL COMMENT 'This is the Id of the person in the who is in the friend list of the main user',
  `requestTo` INT(11) NULL DEFAULT NULL COMMENT 'it stores the id of the person to whom the friend request is made FK',
  `acceptTo` INT(11) NULL DEFAULT '0' COMMENT 'it is updated to 1 once the other person accepts him as a friend and his id is updated in the frinedUserid',
  `requestFrom` INT(11) NULL DEFAULT NULL COMMENT 'it is when you receive a friend request from somebody FK\n',
  `acceptFrom` INT(11) NULL DEFAULT NULL COMMENT 'acceptFrom is once you accept user request to be a friend in this case friendUserId is updated',
  `tstamp` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP COMMENT 'current time',
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 6
DEFAULT CHARACTER SET = utf8
COMMENT = 'This is the table keeping the list of friends and keeping the record of friend request and accpetance.';

-- ----------------------------------------------------------------------------
-- Table facefin_db.tblpost
-- ----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS `facefin_db`.`tblpost` (
  `id` INT(11) NOT NULL AUTO_INCREMENT COMMENT 'Auto generated ',
  `mainUserId` INT(11) NOT NULL COMMENT 'FK consisting the id of person posting',
  `post` TEXT NOT NULL COMMENT 'TEXT field to store the content of the post',
  `tstamp` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP COMMENT 'time stamp',
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 6
DEFAULT CHARACTER SET = utf8
COMMENT = 'This table stores the posts from the users and the data will be visible only to be friend of the user and one self';

-- ----------------------------------------------------------------------------
-- Table facefin_db.tbluser
-- ----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS `facefin_db`.`tbluser` (
  `userId` INT(11) NOT NULL COMMENT 'PK is auto generated',
  `userName` VARCHAR(30) NOT NULL COMMENT '\'Name of the member\'',
  `userAddress` VARCHAR(45) NOT NULL COMMENT '\'address of the user\'',
  `userEmail` VARCHAR(45) NOT NULL COMMENT '\'userEmail is must and will be used to login\'',
  `userPwd` VARCHAR(45) NOT NULL COMMENT '\'userEmail is must and will be used to login\'',
  `userURL` VARCHAR(60) NOT NULL COMMENT '\'userURL is must and will be used for referencing API and URLs\'',
  `tstamp` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP COMMENT 'time stamp for creating of user ',
  PRIMARY KEY (`userId`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8
COMMENT = 'this is user profile file ';
SET FOREIGN_KEY_CHECKS = 1;


USE facefin_db;
SELECT * FROM tblcurrency;
SELECT * FROM tblpost;
SELECT * FROM tblgeneralpost;
SELECT * FROM tbluser;


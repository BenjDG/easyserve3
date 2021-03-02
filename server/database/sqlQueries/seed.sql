CREATE TABLE IF NOT EXISTS `menuItems` (`id` INTEGER NOT NULL auto_increment , `title` VARCHAR(255), `category` VARCHAR(255), `price` DECIMAL(19,4), `createdAt` DATETIME NOT NULL, `updatedAt` DATETIME NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE IF NOT EXISTS `restTables` (`id` INTEGER NOT NULL auto_increment , `name` VARCHAR(255), PRIMARY KEY (`id`)) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE IF NOT EXISTS `statuses` (`id` INTEGER NOT NULL auto_increment , `name` VARCHAR(255), PRIMARY KEY (`id`)) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE IF NOT EXISTS `orderItems` (`id` INTEGER NOT NULL auto_increment , `order_numberId` INTEGER, `menu_itemId` INTEGER, `createdAt` DATETIME NOT NULL, `updatedAt` 
DATETIME NOT NULL, PRIMARY KEY (`id`), FOREIGN KEY (`id`) REFERENCES `menuItems` (`id`) ON DELETE CASCADE ON UPDATE CASCADE, FOREIGN KEY (`order_numberId`) REFERENCES `orders` (`id`) ON DELETE CASCADE ON UPDATE CASCADE, FOREIGN KEY (`menu_itemId`) REFERENCES `menuItems` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- seed statuses
INSERT INTO `statuses` (`id`,`name`) VALUES (NULL,'new order'),(NULL,'cooking'),(NULL,'ready'),(NULL,'completed');

INSERT INTO `users` (`id`,`email`,`password`,`first_name`,`last_name`,`role`,`created_at`,`updated_at`) VALUES (DEFAULT,?,?,?,?,?,?,?);

INSERT INTO `users` (`id`,`email`,`password`,`first_name`,`last_name`,`role`,`created_at`,`updated_at`) VALUES (DEFAULT,?,?,?,?,?,?,?);

INSERT INTO `users` (`id`,`email`,`password`,`first_name`,`last_name`,`role`,`created_at`,`updated_at`) VALUES (DEFAULT,?,?,?,?,?,?,?);

--seed resturaunt tables
INSERT INTO `restTables` (`id`,`name`) VALUES (NULL,'Table 1'),(NULL,'Table 2'),(NULL,'Table 3'),(NULL,'Table 4'),(NULL,'Table 5'),(NULL,'Table 6'),(NULL,'Table 7'),(NULL,'Table 8');

--seed menu items
INSERT INTO `menuItems` (`id`,`title`,`category`,`price`,`createdAt`,`updatedAt`) VALUES (NULL,'Andy Secular','hotdog','1.99','2021-02-28 22:19:00','2021-02-28 22:19:00'),(NULL,'The Burner','hotdog','1.99','2021-02-28 22:19:00','2021-02-28 22:19:00'),(NULL,'Philly','hotdog','2.99','2021-02-28 22:19:00','2021-02-28 22:19:00'),(NULL,'Chihuahua','hotdog','0.99','2021-02-28 22:19:00','2021-02-28 22:19:00'),(NULL,'BLT Dog','hotdog','1.99','2021-02-28 22:19:00','2021-02-28 22:19:00'),(NULL,'Kitchen Sink','hotdog','4.99','2021-02-28 22:19:00','2021-02-28 22:19:00'),(NULL,'Bio Diesel','hotdog','4.59','2021-02-28 22:19:00','2021-02-28 22:19:00'),(NULL,'Corn Dog','hotdog','2.99','2021-02-28 22:19:00','2021-02-28 22:19:00'),(NULL,'Meat Candy','hotdog','4.99','2021-02-28 22:19:00','2021-02-28 22:19:00'),(NULL,'Coke','drink','1.99','2021-02-28 22:19:00','2021-02-28 22:19:00'),(NULL,'Diet Coke','drink','1.99','2021-02-28 22:19:00','2021-02-28 22:19:00'),(NULL,'Mr Pibb','drink','1.99','2021-02-28 22:19:00','2021-02-28 22:19:00'),(NULL,'Sprite','drink','1.99','2021-02-28 22:19:00','2021-02-28 22:19:00'),(NULL,'Bottled Water','drink','1.59','2021-02-28 22:19:00','2021-02-28 22:19:00'),(NULL,'Bottled Tea','drink','1.99','2021-02-28 22:19:00','2021-02-28 22:19:00'),(NULL,'Lemonade','drink','1.99','2021-02-28 22:19:00','2021-02-28 22:19:00'),(NULL,'Bud Light','drink','3.99','2021-02-28 22:19:00','2021-02-28 22:19:00'),(NULL,'IPA','drink','3.99','2021-02-28 22:19:00','2021-02-28 22:19:00'),(NULL,'Fries','side','1.99','2021-02-28 22:19:00','2021-02-28 22:19:00'),(NULL,'O Rings','side','2.99','2021-02-28 22:19:00','2021-02-28 22:19:00'),(NULL,'Chips','side','1.99','2021-02-28 22:19:00','2021-02-28 22:19:00'),(NULL,'Vanilla','icecream','1.99','2021-02-28 22:19:00','2021-02-28 22:19:00'),(NULL,'Chocolate','icecream','1.99','2021-02-28 22:19:00','2021-02-28 22:19:00'),(NULL,'Strawberry','icecream','1.99','2021-02-28 22:19:00','2021-02-28 22:19:00');


--seed orders
INSERT INTO `orders` (`id`,`user_id`,`rest_table_id`,`status_id`,`notes`,`created_at`,`updated_at`) VALUES (NULL,1,1,1,'Extra ketchup on all hotdogs.','2021-02-28 22:19:00','2021-02-28 22:19:00'),(NULL,2,2,2,'Extra mustard on all hotdogs.','2021-02-28 22:19:00','2021-02-28 22:19:00');

--seed order items
INSERT INTO `orderItems` (`id`,`order_numberId`,`menu_itemId`,`createdAt`,`updatedAt`) VALUES (NULL,1,1,'2021-02-28 22:19:00','2021-02-28 22:19:00'),(NULL,1,6,'2021-02-28 22:19:00','2021-02-28 22:19:00'),(NULL,1,11,'2021-02-28 22:19:00','2021-02-28 22:19:00'),(NULL,1,19,'2021-02-28 22:19:00','2021-02-28 22:19:00'),(NULL,2,7,'2021-02-28 22:19:00','2021-02-28 22:19:00'),(NULL,2,10,'2021-02-28 22:19:00','2021-02-28 22:19:00'),(NULL,2,20,'2021-02-28 22:19:00','2021-02-28 22:19:00'),(NULL,2,23,'2021-02-28 22:19:00','2021-02-28 22:19:00');

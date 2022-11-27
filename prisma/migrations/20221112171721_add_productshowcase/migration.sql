-- CreateTable
CREATE TABLE `productsshowcase` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `code_product` VARCHAR(191) NOT NULL,
    `tag` VARCHAR(191) NULL,
    `visible` BOOLEAN NOT NULL DEFAULT true,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `productsshowcase` ADD CONSTRAINT `productsshowcase_code_product_fkey` FOREIGN KEY (`code_product`) REFERENCES `products`(`code`) ON DELETE RESTRICT ON UPDATE CASCADE;

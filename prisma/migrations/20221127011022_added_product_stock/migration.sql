-- DropIndex
DROP INDEX `tags_tag_fkey` ON `tags`;

-- AlterTable
ALTER TABLE `products` ADD COLUMN `stock` INTEGER NULL DEFAULT 999;

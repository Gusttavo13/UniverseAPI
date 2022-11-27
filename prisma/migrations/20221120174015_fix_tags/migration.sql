/*
  Warnings:

  - Added the required column `tags` to the `products` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `tags` DROP FOREIGN KEY `tags_tag_fkey`;

-- AlterTable
ALTER TABLE `products` ADD COLUMN `tags` VARCHAR(191) NOT NULL;

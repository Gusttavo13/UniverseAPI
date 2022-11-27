/*
  Warnings:

  - Added the required column `alt` to the `images` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `images` table without a default value. This is not possible if the table is not empty.
  - Added the required column `path` to the `images` table without a default value. This is not possible if the table is not empty.
  - Added the required column `code` to the `tags` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `images` ADD COLUMN `alt` VARCHAR(191) NOT NULL,
    ADD COLUMN `name` VARCHAR(191) NOT NULL,
    ADD COLUMN `path` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `tags` ADD COLUMN `code` INTEGER NOT NULL,
    ADD COLUMN `description` VARCHAR(191) NULL;

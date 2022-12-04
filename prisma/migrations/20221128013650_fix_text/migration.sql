-- AlterTable
ALTER TABLE `products` MODIFY `name` VARCHAR(1000) NOT NULL,
    MODIFY `description` TEXT NULL,
    MODIFY `sourceList` TEXT NULL,
    MODIFY `source` TEXT NULL,
    MODIFY `colors` TEXT NULL,
    MODIFY `sizes` TEXT NULL,
    MODIFY `models` TEXT NULL,
    MODIFY `brand` VARCHAR(1000) NOT NULL,
    MODIFY `showcase` TEXT NOT NULL,
    MODIFY `tags` VARCHAR(1000) NOT NULL;

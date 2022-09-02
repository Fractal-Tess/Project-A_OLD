-- CreateTable
CREATE TABLE `user` (
    `email` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NULL,
    `ID` INTEGER NOT NULL AUTO_INCREMENT,
    `themeID` INTEGER NULL,

    UNIQUE INDEX `user_email_key`(`email`),
    INDEX `user_themeID_fkey`(`themeID`),
    PRIMARY KEY (`ID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `theme` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `theme` ENUM('LIGHT', 'DARK') NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `user` ADD CONSTRAINT `user_themeID_fkey` FOREIGN KEY (`themeID`) REFERENCES `theme`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

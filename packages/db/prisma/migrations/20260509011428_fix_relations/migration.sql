/*
  Warnings:

  - You are about to drop the column `techStacksId` on the `user` table. All the data in the column will be lost.
  - Added the required column `userId` to the `TechStacks` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `projects` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "user" DROP CONSTRAINT "user_techStacksId_fkey";

-- AlterTable
ALTER TABLE "TechStacks" ADD COLUMN     "userId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "projects" ADD COLUMN     "userId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "user" DROP COLUMN "techStacksId";

-- AddForeignKey
ALTER TABLE "projects" ADD CONSTRAINT "projects_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TechStacks" ADD CONSTRAINT "TechStacks_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

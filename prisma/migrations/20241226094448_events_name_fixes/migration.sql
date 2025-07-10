/*
  Warnings:

  - You are about to drop the column `formatedMessage` on the `Event` table. All the data in the column will be lost.
  - Added the required column `formattedMessage` to the `Event` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Event" DROP COLUMN "formatedMessage",
ADD COLUMN     "formattedMessage" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Quota" ALTER COLUMN "updatedAt" DROP DEFAULT;

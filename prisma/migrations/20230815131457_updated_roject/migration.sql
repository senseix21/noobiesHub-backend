/*
  Warnings:

  - You are about to drop the column `codeSamples` on the `Project` table. All the data in the column will be lost.
  - You are about to drop the column `liveDemoLink` on the `Project` table. All the data in the column will be lost.
  - Added the required column `gitRepo` to the `Project` table without a default value. This is not possible if the table is not empty.
  - Added the required column `liveLink` to the `Project` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Project" DROP COLUMN "codeSamples",
DROP COLUMN "liveDemoLink",
ADD COLUMN     "gitRepo" TEXT NOT NULL,
ADD COLUMN     "img" TEXT[],
ADD COLUMN     "liveLink" TEXT NOT NULL;

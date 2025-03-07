/*
  Warnings:

  - You are about to drop the column `Adress` on the `orgs` table. All the data in the column will be lost.
  - You are about to drop the column `CEP` on the `orgs` table. All the data in the column will be lost.
  - You are about to drop the column `City` on the `orgs` table. All the data in the column will be lost.
  - You are about to drop the column `Latitude` on the `orgs` table. All the data in the column will be lost.
  - You are about to drop the column `Longitude` on the `orgs` table. All the data in the column will be lost.
  - You are about to drop the column `Neighborhood` on the `orgs` table. All the data in the column will be lost.
  - You are about to drop the column `State` on the `orgs` table. All the data in the column will be lost.
  - You are about to drop the column `Street` on the `orgs` table. All the data in the column will be lost.
  - You are about to drop the column `org_id` on the `pets` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "pets" DROP CONSTRAINT "pets_org_id_fkey";

-- AlterTable
ALTER TABLE "orgs" DROP COLUMN "Adress",
DROP COLUMN "CEP",
DROP COLUMN "City",
DROP COLUMN "Latitude",
DROP COLUMN "Longitude",
DROP COLUMN "Neighborhood",
DROP COLUMN "State",
DROP COLUMN "Street";

-- AlterTable
ALTER TABLE "pets" DROP COLUMN "org_id";

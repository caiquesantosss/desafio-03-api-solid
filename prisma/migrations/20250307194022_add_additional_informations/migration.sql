/*
  Warnings:

  - Added the required column `Adress` to the `orgs` table without a default value. This is not possible if the table is not empty.
  - Added the required column `CEP` to the `orgs` table without a default value. This is not possible if the table is not empty.
  - Added the required column `City` to the `orgs` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Latitude` to the `orgs` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Longitude` to the `orgs` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Neighborhood` to the `orgs` table without a default value. This is not possible if the table is not empty.
  - Added the required column `State` to the `orgs` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Street` to the `orgs` table without a default value. This is not possible if the table is not empty.
  - Added the required column `org_id` to the `pets` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "orgs" ADD COLUMN     "Adress" TEXT NOT NULL,
ADD COLUMN     "CEP" TEXT NOT NULL,
ADD COLUMN     "City" TEXT NOT NULL,
ADD COLUMN     "Latitude" DECIMAL(65,30) NOT NULL,
ADD COLUMN     "Longitude" DECIMAL(65,30) NOT NULL,
ADD COLUMN     "Neighborhood" TEXT NOT NULL,
ADD COLUMN     "State" TEXT NOT NULL,
ADD COLUMN     "Street" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "pets" ADD COLUMN     "org_id" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "pets" ADD CONSTRAINT "pets_org_id_fkey" FOREIGN KEY ("org_id") REFERENCES "orgs"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

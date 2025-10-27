-- CreateEnum
CREATE TYPE "Status" AS ENUM ('ACTIVE', 'INACTIVE');

-- CreateTable
CREATE TABLE "Storage" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "capacity" INTEGER NOT NULL,
    "description" TEXT NOT NULL,
    "status" "Status" NOT NULL DEFAULT 'ACTIVE',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Storage_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Color" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "hexCode" TEXT,
    "status" "Status" NOT NULL DEFAULT 'ACTIVE',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Color_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Color_name_key" ON "Color"("name");

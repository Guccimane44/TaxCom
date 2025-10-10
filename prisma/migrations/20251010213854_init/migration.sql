-- CreateEnum
CREATE TYPE "ResidentType" AS ENUM ('RESIDENT', 'NONRESIDENT');

-- CreateEnum
CREATE TYPE "RateMethod" AS ENUM ('MARGINAL', 'FLAT');

-- CreateEnum
CREATE TYPE "AllowanceType" AS ENUM ('PERSONAL_ALLOWANCE', 'STANDARD_DEDUCTION', 'OTHER');

-- CreateTable
CREATE TABLE "Country" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "iso2" TEXT NOT NULL,
    "region" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Country_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TaxYear" (
    "id" SERIAL NOT NULL,
    "country_id" INTEGER NOT NULL,
    "year" INTEGER NOT NULL,
    "effective_from" TIMESTAMP(3) NOT NULL,
    "effective_to" TIMESTAMP(3),
    "source_name" TEXT NOT NULL,
    "source_url" TEXT NOT NULL,
    "notes" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "TaxYear_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FilingStatus" (
    "id" SERIAL NOT NULL,
    "code" TEXT NOT NULL,
    "label" TEXT NOT NULL,
    "description" TEXT,

    CONSTRAINT "FilingStatus_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TaxSchedule" (
    "id" SERIAL NOT NULL,
    "tax_year_id" INTEGER NOT NULL,
    "filing_status_id" INTEGER NOT NULL,
    "resident_type" "ResidentType" NOT NULL,
    "description" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "TaxSchedule_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TaxBracket" (
    "id" SERIAL NOT NULL,
    "schedule_id" INTEGER NOT NULL,
    "lower_bound" DECIMAL(65,30) NOT NULL,
    "upper_bound" DECIMAL(65,30),
    "rate" DECIMAL(65,30) NOT NULL,
    "method" "RateMethod" NOT NULL,
    "notes" TEXT,

    CONSTRAINT "TaxBracket_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AllowanceRule" (
    "id" SERIAL NOT NULL,
    "schedule_id" INTEGER NOT NULL,
    "type" "AllowanceType" NOT NULL,
    "amount" DECIMAL(65,30) NOT NULL,
    "phaseout_start" DECIMAL(65,30),
    "phaseout_rate" DECIMAL(65,30),
    "phaseout_cap" DECIMAL(65,30),
    "formula_ref" TEXT,
    "notes" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "AllowanceRule_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SocialContribution" (
    "id" SERIAL NOT NULL,
    "schedule_id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "rate" DECIMAL(65,30) NOT NULL,
    "income_floor" DECIMAL(65,30),
    "income_ceiling" DECIMAL(65,30),
    "notes" TEXT,

    CONSTRAINT "SocialContribution_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Feedback" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "country_from_id" INTEGER NOT NULL,
    "country_to_id" INTEGER NOT NULL,
    "comment" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Feedback_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Country_iso2_key" ON "Country"("iso2");

-- CreateIndex
CREATE UNIQUE INDEX "TaxYear_country_id_year_key" ON "TaxYear"("country_id", "year");

-- CreateIndex
CREATE UNIQUE INDEX "FilingStatus_code_key" ON "FilingStatus"("code");

-- CreateIndex
CREATE UNIQUE INDEX "TaxSchedule_tax_year_id_filing_status_id_resident_type_key" ON "TaxSchedule"("tax_year_id", "filing_status_id", "resident_type");

-- AddForeignKey
ALTER TABLE "TaxYear" ADD CONSTRAINT "TaxYear_country_id_fkey" FOREIGN KEY ("country_id") REFERENCES "Country"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TaxSchedule" ADD CONSTRAINT "TaxSchedule_tax_year_id_fkey" FOREIGN KEY ("tax_year_id") REFERENCES "TaxYear"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TaxSchedule" ADD CONSTRAINT "TaxSchedule_filing_status_id_fkey" FOREIGN KEY ("filing_status_id") REFERENCES "FilingStatus"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TaxBracket" ADD CONSTRAINT "TaxBracket_schedule_id_fkey" FOREIGN KEY ("schedule_id") REFERENCES "TaxSchedule"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AllowanceRule" ADD CONSTRAINT "AllowanceRule_schedule_id_fkey" FOREIGN KEY ("schedule_id") REFERENCES "TaxSchedule"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SocialContribution" ADD CONSTRAINT "SocialContribution_schedule_id_fkey" FOREIGN KEY ("schedule_id") REFERENCES "TaxSchedule"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Feedback" ADD CONSTRAINT "Feedback_country_from_id_fkey" FOREIGN KEY ("country_from_id") REFERENCES "Country"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Feedback" ADD CONSTRAINT "Feedback_country_to_id_fkey" FOREIGN KEY ("country_to_id") REFERENCES "Country"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

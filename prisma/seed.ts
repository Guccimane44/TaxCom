/*
  Seed script: inserts minimal DE/NL data for demo purposes.
  Run with: npm run prisma:seed
*/
import { PrismaClient, ResidentType, RateMethod, AllowanceType } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const de = await prisma.country.upsert({
    where: { iso2: 'DE' },
    update: {},
    create: { name: 'Germany', iso2: 'DE', region: 'Europe' },
  });
  const nl = await prisma.country.upsert({
    where: { iso2: 'NL' },
    update: {},
    create: { name: 'Netherlands', iso2: 'NL', region: 'Europe' },
  });

  const single = await prisma.filingStatus.upsert({
    where: { code: 'SINGLE' },
    update: {},
    create: { code: 'SINGLE', label: 'Single' },
  });
  const married = await prisma.filingStatus.upsert({
    where: { code: 'MARRIED' },
    update: {},
    create: { code: 'MARRIED', label: 'Married' },
  });

  // Germany 2024
  const de2024 = await prisma.taxYear.upsert({
    where: { countryId_year: { countryId: de.id, year: 2024 } },
    update: {},
    create: {
      countryId: de.id,
      year: 2024,
      effectiveFrom: new Date('2024-01-01'),
      effectiveTo: new Date('2024-12-31'),
      sourceName: 'Demo Source',
      sourceUrl: 'https://example.com/de',
    },
  });

  const deSchSingle = await prisma.taxSchedule.create({
    data: {
      taxYearId: de2024.id,
      filingStatusId: single.id,
      residentType: ResidentType.RESIDENT,
      description: 'Simplified DE schedule',
    },
  });
  await prisma.taxBracket.createMany({
    data: [
      { scheduleId: deSchSingle.id, lowerBound: 0, upperBound: 10000, rate: 0.0, method: RateMethod.MARGINAL },
      { scheduleId: deSchSingle.id, lowerBound: 10000, upperBound: 60000, rate: 0.20, method: RateMethod.MARGINAL },
      { scheduleId: deSchSingle.id, lowerBound: 60000, upperBound: null, rate: 0.42, method: RateMethod.MARGINAL },
    ],
  });
  await prisma.allowanceRule.create({
    data: {
      scheduleId: deSchSingle.id,
      type: AllowanceType.PERSONAL_ALLOWANCE,
      amount: 1000,
      notes: 'Demo personal allowance',
    },
  });

  // Netherlands 2024
  const nl2024 = await prisma.taxYear.upsert({
    where: { countryId_year: { countryId: nl.id, year: 2024 } },
    update: {},
    create: {
      countryId: nl.id,
      year: 2024,
      effectiveFrom: new Date('2024-01-01'),
      effectiveTo: new Date('2024-12-31'),
      sourceName: 'Demo Source',
      sourceUrl: 'https://example.com/nl',
    },
  });
  const nlSchSingle = await prisma.taxSchedule.create({
    data: {
      taxYearId: nl2024.id,
      filingStatusId: single.id,
      residentType: ResidentType.RESIDENT,
      description: 'Simplified NL schedule',
    },
  });
  await prisma.taxBracket.createMany({
    data: [
      { scheduleId: nlSchSingle.id, lowerBound: 0, upperBound: 20000, rate: 0.10, method: RateMethod.MARGINAL },
      { scheduleId: nlSchSingle.id, lowerBound: 20000, upperBound: 68000, rate: 0.25, method: RateMethod.MARGINAL },
      { scheduleId: nlSchSingle.id, lowerBound: 68000, upperBound: null, rate: 0.40, method: RateMethod.MARGINAL },
    ],
  });
  await prisma.socialContribution.create({
    data: {
      scheduleId: nlSchSingle.id,
      name: 'Demo Social Contribution',
      rate: 0.05,
    },
  });

  // Sample feedback
  await prisma.feedback.create({
    data: {
      email: 'demo@example.com',
      countryFromId: de.id,
      countryToId: nl.id,
      comment: 'MVP looks good',
    },
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });

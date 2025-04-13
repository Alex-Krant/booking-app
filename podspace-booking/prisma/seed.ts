import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  try {
    // Create formulas
    const premiumPlus = await prisma.formula.create({
      data: {
        name: 'Premium+',
        price: 420,
        description: 'Our most comprehensive package with full editing services',
        isPopular: true,
      },
    });

    const advanced = await prisma.formula.create({
      data: {
        name: 'Advanced',
        price: 200,
        description: 'Pre-editing services for podcast creators',
        isPopular: false,
      },
    });

    const subscription = await prisma.formula.create({
      data: {
        name: 'Subscription',
        price: 650,
        description: 'Monthly subscription with unlimited studio access',
        isPopular: false,
      },
    });

    // Create studios
    const orangeStudio = await prisma.studio.create({
      data: {
        name: 'Orange Is The New Black',
        description: 'Our flagship studio with orange backdrop',
        imageUrl: '/images/studios/orange.jpg',
      },
    });

    const tokyoStudio = await prisma.studio.create({
      data: {
        name: 'Tokyo',
        description: 'Japanese-inspired minimalist studio',
        imageUrl: '/images/studios/tokyo.jpg',
      },
    });

    const parisStudio = await prisma.studio.create({
      data: {
        name: 'Paris',
        description: 'Elegant studio with Parisian accents',
        imageUrl: '/images/studios/paris.jpg',
      },
    });

    console.log('Database seeded successfully with studios and formulas!');
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

main();

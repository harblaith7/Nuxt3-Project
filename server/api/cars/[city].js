import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  const { city } = event.context.params;
  const { make, minPrice, maxPrice } = getQuery(event);

  const filters = {
    city,
  };

  if (make) {
    filters.make = make;
  }

  if (minPrice) {
    if (!filters.price) filters.price = {};
    filters.price.gt = parseInt(minPrice);
  }

  if (maxPrice) {
    if (!filters.price) filters.price = {};
    filters.price.lt = parseInt(maxPrice);
  }

  const cars = await prisma.car.findMany({
    where: {
      city: "toronto",
    },
    select: {
      image: true,
      id: true,
      name: true,
      price: true,
      description: true,
    },
  });

  return cars;
});

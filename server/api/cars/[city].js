import cars from "@/data/cars.json";

export default defineEventHandler((event) => {
  const { make, minPrice, maxPrice } = getQuery(event);
  const { city } = event.context.params;
  let filteredCars = cars;

  if (city) {
    filteredCars = filteredCars.filter((car) => {
      return car.city.toLowerCase() === city.toLowerCase();
    });
  }

  if (make) {
    filteredCars = filteredCars.filter((car) => {
      return car.make === make;
    });
  }
  if (minPrice) {
    filteredCars = filteredCars.filter((car) => {
      return car.price >= parseInt(minPrice);
    });
  }

  if (maxPrice) {
    filteredCars = filteredCars.filter((car) => {
      return car.price <= parseInt(maxPrice);
    });
  }

  return filteredCars;
});

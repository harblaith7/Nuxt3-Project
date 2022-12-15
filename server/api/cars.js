import cars from "@/data/cars.json";

export default defineEventHandler((event) => {
  const { city, make, minPrice, maxPrice } = getQuery(event);
  console.log("called", city, make);
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
      return car.price >= minPrice;
    });
  }

  if (maxPrice) {
    filteredCars = filteredCars.filter((car) => {
      return car.price <= minPrice;
    });
  }

  return filteredCars;
});

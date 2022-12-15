export default async (city, filters) => {
  const { data, error, refresh } = await useAsyncData("cars", () => {
    return $fetch(`/api/cars/${city}`, {
      params: {
        ...filters,
      },
    });
  });

  //   useFetch(`/api/cars/${city}`, {
  //     params: {
  //       ...filters,
  //     },
  //   });

  if (error.value) {
    throw createError({
      ...error.value,
      statusMessage: "Unable to fetch car listings",
    });
  }

  return { data, refresh };
};

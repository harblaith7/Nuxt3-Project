export default async (filters) => {
  const { data, error } = await useFetch(`/api/cars`, {
    query: {
      ...filters,
    },
  });

  if (error.value) {
    throw createError({
      ...error.value,
      statusMessage: "Unable to fetch car listings",
    });
  }

  return data;
};

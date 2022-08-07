export const getSeed = async () => {
  const seed = await $fetch("/api/seed");
  return seed;
};

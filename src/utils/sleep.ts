export const sleep = (ms: number = 2000) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

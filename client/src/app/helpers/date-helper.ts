export const getDateDifference = (firstDate, secondDate): number  => {
  return Math.round((firstDate.valueOf() - secondDate.valueOf()) / (1000 * 60 * 60 * 24));
};

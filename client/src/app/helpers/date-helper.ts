export const getDateDifference = (firstDate, secondDate): number  => {
  return Math.round((firstDate.valueOf() - secondDate.valueOf()) / (1000 * 60 * 60 * 24));
};

export const formatDate = (date): string => {
  date = new Date(date);
  const day = ('0' + date.getDate()).slice(-2);
  const month = ('0' + (date.getMonth() + 1)).slice(-2);
  const year = date.getFullYear();
  return year + '-' + month + '-' + day;
};

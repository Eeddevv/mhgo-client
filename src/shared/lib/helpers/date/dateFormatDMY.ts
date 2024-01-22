export const formatDateDMY = (date: string) => {
  const inputDate = new Date(date);
  const day = inputDate.getDate().toString().padStart(2, '0');
  const month = (inputDate.getMonth() + 1).toString().padStart(2, '0');
  const year = inputDate.getFullYear();
  return `${day}.${month}.${year}`;
};

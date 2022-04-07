const prepareDate = (time: string) => {
  const newDate = new Date(time);
  const checkDate = (date: number) => (date < 10 ? `0${date}` : date);

  return {
    day: checkDate(newDate.getDay()),
    month: checkDate(newDate.getMonth() + 1),
  };
};

export default prepareDate;

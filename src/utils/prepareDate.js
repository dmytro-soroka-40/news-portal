const prepareDate = (value) => {
  const newDate = new Date(value);
  return { day: newDate.getDay(), month: newDate.getMonth() + 1 };
};

export default prepareDate;

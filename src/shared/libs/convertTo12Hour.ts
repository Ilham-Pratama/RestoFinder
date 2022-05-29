const convertTo12Hour = (time: string) => {
  const hour = parseInt(time.slice(0, 2), 10);
  const minutes = time.slice(2);

  if (hour === 0) return `12:${minutes} AM`;
  else if (hour < 12) return `${hour}:${minutes} AM`;

  const pmHour = hour === 12 ? 12 : hour - 12;
  return `${pmHour}:${minutes} PM`;
};

export default convertTo12Hour;

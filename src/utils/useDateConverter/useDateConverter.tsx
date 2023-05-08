export const useDateConverter = () => {
  const getWeekday = (currentDate: string) => {
    const date = new Date(currentDate);
    const weekday = date.toLocaleString('sv-SE', {
      weekday: 'short',
    });

    return weekday[0].toUpperCase() + weekday.slice(1);
  };

  const getHourAndMin = (currentDate: string) => {
    const date = new Date(currentDate);

    return date.toLocaleTimeString('sv-SE', { hour: '2-digit', minute: '2-digit' });
  };

  const getYYYYMMDD = (currentDate: string) => {
    const date = new Date(currentDate);

    return date.toLocaleString('sv-SE', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    });
  };

  const getToday = () => {
    const date = new Date();
    const today = date.toLocaleString('sv-SE', {
      day: '2-digit',
      month: 'long',
      year: 'numeric',
    });
    return today;
  };

  return {
    getWeekday,
    getHourAndMin,
    getYYYYMMDD,
    getToday,
  };
};

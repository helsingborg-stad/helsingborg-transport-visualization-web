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

  const getDatesForFilter = () => {
    const formatDate = (date: Date) => date.toLocaleDateString('sv-SE', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    });

    const today = new Date();
    const todayFormatted = formatDate(today);

    const sevenDays = new Date(today);
    sevenDays.setDate(today.getDate() - 7);
    const sevenDaysFormatted = formatDate(sevenDays);

    const oneMonth = new Date(today);
    oneMonth.setDate(today.getDate() - 30);
    const oneMonthFormatted = formatDate(oneMonth);

    const twoMonths = new Date(today);
    twoMonths.setDate(today.getDate() - 60);
    const twoMonthsFormatted = formatDate(twoMonths);

    const threeMonths = new Date(today);
    threeMonths.setDate(today.getDate() - 90);
    const threeMonthsFormatted = formatDate(threeMonths);

    const dates = [
      {
        label: 'Alla dagar',
      },
      {
        label: 'Senaste 7 dagarna',
        to: todayFormatted,
        from: sevenDaysFormatted,
      },
      {
        label: 'Senaste 30 dagarna',
        to: todayFormatted,
        from: oneMonthFormatted,
      },
      {
        label: 'Senaste 60 dagarna',
        to: todayFormatted,
        from: twoMonthsFormatted,
      },
      {
        label: 'Senaste 90 dagarna',
        to: todayFormatted,
        from: threeMonthsFormatted,
      },
    ];

    return {
      dates,
    };
  };

  return {
    getWeekday,
    getHourAndMin,
    getYYYYMMDD,
    getToday,
    getDatesForFilter,
  };
};

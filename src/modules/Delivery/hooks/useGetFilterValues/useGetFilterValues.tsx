export const useGetFilterValues = () => {
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

  const allWeekdays = [
    {
      day: 'Måndag',
      number: '1',
    },
    {
      day: 'Tisdag',
      number: '2',
    },
    {
      day: 'Onsdag',
      number: '3',
    },
    {
      day: 'Torsdag',
      number: '4',
    },
    {
      day: 'Fredag',
      number: '5',
    },
    {
      day: 'Lördag',
      number: '6',
    },
    {
      day: 'Söndag',
      number: '7',
    },
  ];

  const timeInterval = [
    {
      label: 'Alla tider',
    },
    {
      label: '06:00 - 09:00',
      to: '09:00',
      from: '06:00',
    },
    {
      label: '09:00 - 12:00',
      to: '12:00',
      from: '09:00',
    },
    {
      label: '12:00 - 15:00',
      to: '15:00',
      from: '12:00',
    },
    {
      label: '15:00 - 18:00',
      to: '18:00',
      from: '15:00',
    },
  ];

  return {
    allWeekdays,
    dates,
    timeInterval,
  };
};

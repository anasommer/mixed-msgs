const createMsg = () => {
  const randomNumber = (maxNum) => {
    return Math.floor(Math.random() * maxNum);
  };

  const time = () => {
    const timePeriod = [
      'today',
      'tomorrow',
      'this week',
      'next week',
      'this month',
      'this year',
      'next year',
      'in the near future',
    ];
    return timePeriod[randomNumber(timePeriod.length)];
  };

  const outcome = () => {
    const outcomeMsg = [
      'win the lottery',
      'get a sunburn on a trip to Hawaii',
      'win $2000 betting against your favourite football team',
      'find a love of your life',
      'get a baby',
    ];
    return outcomeMsg[randomNumber(outcomeMsg.length)];
  };

  const chance = () => {
    const chanceMsg = [
      'slight chance',
      'good chance',
      'pretty sure',
      '80% chance',
    ];
  };
  return chanceMsg[randomNumber(chanceMsg.length)];
};

exports.getPowerballTrend = (results) => {
  let { trendForNumbers, trendForPowerball } = require("./analytics.js");

  results.forEach((item, index) => {
    console.log(`Draw Number: ${item.drawNumber}`);
    console.log(`Winning Numbers:`);
    item.winningNumbers.forEach((number) => {
      console.log(
        `${number} ${trendForNumbers.frequency[number]} ${trendForNumbers.sinceLastDrawn[number]}`
      );
    });
    console.log(`Powerball:`);
    console.log(
      `${item.powerball} ${trendForPowerball.frequency[item.powerball]} ${
        trendForPowerball.sinceLastDrawn[item.powerball]
      }`
    );

    Object.entries(trendForNumbers.sinceLastDrawn).forEach(([key, val]) => {
      trendForNumbers.sinceLastDrawn[key]++;
    });
    Object.entries(trendForPowerball.sinceLastDrawn).forEach(
      ([key, val]) => trendForPowerball.sinceLastDrawn[key]++
    );

    item.winningNumbers.forEach((number) => {
      trendForNumbers.frequency[number]++;
      trendForNumbers.sinceLastDrawn[number] = 0;
    });
    trendForPowerball.frequency[item.powerball]++;
    trendForPowerball.sinceLastDrawn[item.powerball] = 0;
  });
};

exports.getLottoTrend = (results) => {
  let { trendForNumbers } = require("./analytics.js");

  results.forEach((item, index) => {
    console.log(`Draw Number: ${item.drawNumber}`);
    console.log(`Winning Numbers:`);
    item.winningNumbers.forEach((number) => {
      if (number !== "") {
        console.log(
          `${number} ${trendForNumbers.frequency[number]} ${trendForNumbers.sinceLastDrawn[number]}`
        );
      }
    });

    Object.entries(trendForNumbers.sinceLastDrawn).forEach(([key, val]) => {
      trendForNumbers.sinceLastDrawn[key]++;
    });

    item.winningNumbers.forEach((number) => {
      trendForNumbers.frequency[number]++;
      trendForNumbers.sinceLastDrawn[number] = 0;
    });
  });
};

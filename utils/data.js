const csv = require("csvtojson");

exports.getPowerballData = async (filename) => {
  const result = await csv().fromFile(filename);

  return result
    .filter((item) => {
      return parseInt(item["Draw number"]) >= 1144;
    })
    .reverse()
    .map((item) => {
      return {
        drawNumber: parseInt(item["Draw number"]),
        winningNumbers: [
          item["Winning Number 1"],
          item["Winning Number 2"],
          item["Winning Number 3"],
          item["Winning Number 4"],
          item["Winning Number 5"],
          item["Winning Number 6"],
          item["Winning Number 7"],
        ],
        powerball: item["Powerball Number"],
      };
    });
};

exports.getLottoData = async (filename) => {
  const result = await csv().fromFile(filename);

  return result.reverse().map((item) => {
    return {
      drawNumber: parseInt(item["Draw number"]),
      winningNumbers: [
        item["Winning Number 1"],
        item["Winning Number 2"],
        item["Winning Number 3"],
        item["Winning Number 4"],
        item["Winning Number 5"],
        item["Winning Number 6"],
        item["Winning Number 7"] ?? "",
      ],
    };
  });
};

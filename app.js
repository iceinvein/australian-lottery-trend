const { getResultFiles } = require("./utils/download");
const { getPowerballData, getLottoData } = require("./utils/data");
const { getPowerballTrend, getLottoTrend } = require("./utils/trend");

(async () => {
  await getResultFiles();

  getPowerballTrend(await getPowerballData("powerball.csv"));
  getLottoTrend(await getLottoData("oz-lotto.csv"));
  getLottoTrend(await getLottoData("saturday-lotto.csv"));
})();

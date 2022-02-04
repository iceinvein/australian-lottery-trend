const download = require("download");
const fs = require("fs");
const axios = require("axios");
const { parse } = require("node-html-parser");

exports.getResultFiles = async () => {
  const regex = /(?<=games\/)(.*)(?=\/@@download)/g;

  const response = await axios.get(
    "https://www.lotterywest.wa.gov.au/results/frequency-charts"
  );

  const document = parse(response.data);

  const downloadUrls = document
    .querySelector("ul.lw-freqchart-list")
    .querySelectorAll("li > a")
    .map((item) => item.getAttribute("href"));

  for (let i = 0; i < downloadUrls.length; i++) {
    const url = downloadUrls[i];
    const lotteryName = url.match(regex)[0];
    const fileName = `${lotteryName}.csv`;
    fs.writeFileSync(fileName, await download(url));
  }
};

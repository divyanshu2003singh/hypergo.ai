const fs = require('fs');
const csv = require('csv-parser');

const processCSV = (filePath) => {
  return new Promise((resolve, reject) => {
    const stocks = [];

    fs.createReadStream(filePath)
      .pipe(csv())
      .on('data', (row) => {
        stocks.push(row);
      })
      .on('end', () => {
        resolve(stocks);
      })
      .on('error', (error) => {
        reject(error);
      });
  });
};

module.exports = processCSV;

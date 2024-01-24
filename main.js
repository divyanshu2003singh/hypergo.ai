const axios = require('axios');
const fs = require('fs');
const admZip = require('adm-zip');
const Stock = require('./database');
const processCSV = require('./csvProcessor');
const app = require('./apiRoutes');

const downloadAndProcessBhavcopy = async (date) => {
  const url = `https://www.bseindia.com/download/BhavCopy/Equity/EQ120124_CSV.ZIP`;

  try {
    const response = await axios.get(url, { responseType: 'arraybuffer' });
    fs.writeFileSync('bhavcopy.zip', response.data);

    // Extract ZIP
    const zip = new admZip('bhavcopy.zip');
    const zipEntries = zip.getEntries();

    // Find the CSV file inside the ZIP
    const csvEntry = zipEntries.find((entry) => entry.entryName.toLowerCase().endsWith('.csv'));

    if (!csvEntry) {
      throw new Error('CSV file not found inside the ZIP');
    }

    const csvBuffer = zip.readFile(csvEntry);

    // Write the CSV buffer to a temporary file
    fs.writeFileSync('temp/equity.csv', csvBuffer);

    // Read the CSV file
    const stocks = await processCSV('temp/equity.csv');

    // Store data in MongoDB
    await Stock.insertMany(stocks);
    console.log('Data imported to MongoDB');
  } catch (error) {
    console.error('Error downloading Bhavcopy:', error.message);
  }
};
     
// Start the Express server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);

  // Uncomment the line below to run the script before server start
  downloadAndProcessBhavcopy('20220121');
});








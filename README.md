# hypergo.ai

Stock Market Data API
This project provides a simple API for accessing and managing stock market data. It includes functionality to download, process, and store stock data from the BSE India website. Additionally, it offers various API routes for retrieving stock information, managing favorites, and more.

Table of Contents
Prerequisites
Installation
Usage
Downloading and Processing Bhavcopy
API Routes
Testing
Contributing
License
Prerequisites
Before you begin, ensure you have the following installed:

Node.js (v14 or higher)
MongoDB
Installation
Clone the repository:

bash
Copy code
git clone https://github.com/your-username/stock-market-api.git
Navigate to the project directory:

bash
Copy code
cd stock-market-api
Install dependencies:

bash
Copy code
npm install
Set up MongoDB: Replace the connection string in database.js with your MongoDB connection string.

Usage
Downloading and Processing Bhavcopy
To download and process Bhavcopy data, run the script in main.js:

bash
Copy code
node main.js
This script will download the Bhavcopy data for the specified date, extract the CSV file, process it, and store the information in MongoDB.

API Routes
The API provides the following routes:

GET /api/top10: Get information on the top 10 stocks.
GET /api/stocks/:name: Find stocks by name.
GET /api/stock/history/:code: Get stock price history for a specific stock code.
POST /api/favourites: Add a stock to favorites.
Body: { "code": "stockCode" }
GET /api/favourites: See favorite stocks.
DELETE /api/favourites/:code: Remove a stock from favorites.
Start the server:

bash
Copy code
node main.js
The server will run on http://localhost:3000 (or the specified port).

Testing
You can use tools like Postman to test the API endpoints. Import the provided Postman collection to get started quickly.

Contributing
If you'd like to contribute, please fork the repository and create a pull request. Issues and feature requests are welcome.


## Stock Market Data API 

**A simple Node.js API for accessing and managing BSE India stock market data.**

### Key Features:

* Download and process Bhavcopy data
* Store and retrieve stock information in MongoDB
* API routes for:
    * Top 10 stocks
    * Stock search by name
    * Stock price history 
    * Favorite stock management
* Postman collection for easy API testing

### Getting Started:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/divyanshu2003singh/hypergo.ai.git
   cd hypergo.ai
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Configure MongoDB:**

   * Replace the connection string in `database.js` with your MongoDB details.

4. **Download and process Bhavcopy data:**

   ```bash
   nodemon main.js
   ```

5. **Start the API server:**

   ```bash
   nodemon main.js
   ```

   (Server runs on http://localhost:3000 by default)

### API Routes:

* **GET /api/top10:** Get information on the top 10 stocks.
* **GET /api/stocks/:name:** Find stocks by name.
* **GET /api/stock/history/:code:** Get stock price history for a specific code.
* **POST /api/favourites:** Add a stock to favorites (Body: `{ "code": "stockCode" }`).
* **GET /api/favourites:** See favorite stocks.
* **DELETE /api/favourites/:code:** Remove a stock from favorites.

### Contributing:

We welcome contributions! Please fork the repository and create a pull request. Issues and feature requests are also appreciated.



** Happy stock market exploring!**

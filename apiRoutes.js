const express = require('express');
const bodyParser = require('body-parser');
const Stock = require('./database');
const processCSV = require('./csvProcessor');

const app = express();
app.use(bodyParser.json());

// Temporary storage for favorite stocks
const favoriteStocks = [];

// Get top 10 stocks
app.get('/api/top10', async (req, res) => {
  try {
    const top10Stocks = await Stock.find().limit(10);
    res.json(top10Stocks);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Find stocks by name
app.get('/api/stocks/:name', async (req, res) => {
  const { name } = req.params;

  try {
    const stocksByName = await Stock.find({ SC_NAME: { $regex: new RegExp(name, 'i') } });
    res.json(stocksByName);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Get stock price history list for UI graph
app.get('/api/stock/history/:code', async (req, res) => {
  const { code } = req.params;

  try {
    const stockHistory = await Stock.findOne({ SC_CODE: code });
    res.json(stockHistory);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Add a stock to favorites
app.post('/api/favourites', (req, res) => {
  const { code } = req.body;

  try {
    const stock = favoriteStocks.find((s) => s.SC_CODE === code);
    if (!stock) {
      favoriteStocks.push({ SC_CODE: code });
      res.json({ message: 'Stock added to favorites' });
    } else {
      res.status(400).json({ error: 'Stock already in favorites' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// See favorite stocks
app.get('/api/favourites', (req, res) => {
  res.json({ favorites: favoriteStocks });
});

// Remove a stock from favorites
app.delete('/api/favourites/:code', (req, res) => {
  const { code } = req.params;

  try {
    const index = favoriteStocks.findIndex((s) => s.SC_CODE === code);
    if (index !== -1) {
      favoriteStocks.splice(index, 1);
      res.json({ message: 'Stock removed from favorites' });
    } else {
      res.status(404).json({ error: 'Stock not found in favorites' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
// In main.js, update the /api/refresh route:


module.exports = app;

const express = require("express");
const serverless = require("serverless-http");
const connectDB = require("../config/db");
const logger = require("../middlewares/logger");
const {
  createItem,
  getItems,
  getItemById,
  updateItem,
  deleteItem,
} = require("../controllers/itemController");

require("dotenv").config();
connectDB();

const app = express();
app.use(express.json());
app.use(logger);

app.post("/.netlify/functions/crud/items", createItem);
app.get("/.netlify/functions/crud/items", getItems);
app.get("/.netlify/functions/crud/items/:id", getItemById);
app.put("/.netlify/functions/crud/items/:id", updateItem);
app.delete("/.netlify/functions/crud/items/:id", deleteItem);

module.exports.handler = serverless(app);

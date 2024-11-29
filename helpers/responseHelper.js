const Item = require("../models/itemModel");
const { successResponse, errorResponse } = require("../helpers/responseHelper");

// Create Item
exports.createItem = async (req, res) => {
  try {
    const { name } = req.body;
    const item = await Item.create({ name });
    successResponse(res, 201, item);
  } catch (error) {
    errorResponse(res, 500, error.message);
  }
};

// Get All Items
exports.getItems = async (req, res) => {
  try {
    const items = await Item.find();
    successResponse(res, 200, items);
  } catch (error) {
    errorResponse(res, 500, error.message);
  }
};

// Get Single Item
exports.getItemById = async (req, res) => {
  try {
    const item = await Item.findById(req.params.id);
    if (!item) return errorResponse(res, 404, "Item not found");
    successResponse(res, 200, item);
  } catch (error) {
    errorResponse(res, 500, error.message);
  }
};

// Update Item
exports.updateItem = async (req, res) => {
  try {
    const item = await Item.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!item) return errorResponse(res, 404, "Item not found");
    successResponse(res, 200, item);
  } catch (error) {
    errorResponse(res, 500, error.message);
  }
};

// Delete Item
exports.deleteItem = async (req, res) => {
  try {
    const item = await Item.findByIdAndDelete(req.params.id);
    if (!item) return errorResponse(res, 404, "Item not found");
    successResponse(res, 200, "Item deleted successfully");
  } catch (error) {
    errorResponse(res, 500, error.message);
  }
};

const StatusModel = require("../models/statusModel");
const mongoose = require("mongoose");

// get a single status
const getStatus = async (req, res) => {
  const statusData = await StatusModel.find({}).sort({ createdAt: -1 });
  res.status(200).json(statusData);
};

// create a new status
const createStatus = async (req, res) => {
  const { title, enabled } = req.body;

  console.log("create Status", title, enabled);

  // add to the database
  try {
    const status = await StatusModel.create({ title, enabled });
    res.status(200).json(status);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getStatus,
  createStatus,
};

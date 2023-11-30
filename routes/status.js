const express = require("express");
const { getStatus, createStatus } = require("../controllers/statusController");

const router = express.Router();

// GET all status
router.get("/", getStatus);

// // GET a single status
// router.get("/:id", getStatus);

// POST a new status
router.post("/", createStatus);

// // DELETE a status
// router.delete("/:id", deleteStatus);

// // UPDATE a status
// router.patch("/:id", updateStatus);

module.exports = router;

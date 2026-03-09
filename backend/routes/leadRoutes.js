const express = require("express");
const router = express.Router();

const leadController = require("../controllers/leadController");

router.post("/", leadController.createLead);

router.get("/", leadController.getLeads);

router.patch("/:id/status", leadController.updateStatus);

router.post("/visit", leadController.scheduleVisit);

module.exports = router;
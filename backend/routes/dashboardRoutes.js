const express = require("express");
const router = express.Router();

const Lead = require("../models/Lead");
const Visit = require("../models/Visit");

router.get("/", async(req,res)=>{

  const totalLeads = await Lead.countDocuments();

  const visits = await Visit.countDocuments();

  const booked = await Lead.countDocuments({status:"Booked"});

  const newLeads = await Lead.countDocuments({status:"New Lead"});

  res.json({
    totalLeads,
    visits,
    booked,
    newLeads
  });

});

module.exports = router;
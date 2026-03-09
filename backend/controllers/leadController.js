const Lead = require("../models/Lead");
const Agent = require("../models/Agent");
const Visit = require("../models/Visit");

let agentIndex = 0;

// create lead
exports.createLead = async (req,res)=>{

  try{

    const agents = await Agent.find();

    if(agents.length === 0){
      return res.status(400).json({message:"No agents found"});
    }

    const assignedAgent = agents[agentIndex];

    agentIndex = (agentIndex + 1) % agents.length;

    const lead = new Lead({
      name:req.body.name,
      phone:req.body.phone,
      source:req.body.source,
      assignedAgent:assignedAgent._id
    });

    await lead.save();

    res.json(lead);

  }catch(err){
    res.status(500).json(err);
  }

};


// get leads

exports.getLeads = async(req,res)=>{
  const leads = await Lead.find().populate("assignedAgent");
  res.json(leads);
};


// update lead status

exports.updateStatus = async(req,res)=>{

  const lead = await Lead.findByIdAndUpdate(
    req.params.id,
    {status:req.body.status},
    {new:true}
  );

  res.json(lead);
};


// schedule visit

exports.scheduleVisit = async(req,res)=>{

  const visit = new Visit({
    leadId:req.body.leadId,
    property:req.body.property,
    visitDate:req.body.visitDate,
    outcome:"Pending"
  });

  await visit.save();

  res.json(visit);

};
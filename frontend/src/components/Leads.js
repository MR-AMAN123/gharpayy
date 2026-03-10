import React,{useEffect,useState} from "react";
import axios from "axios";
import Pipeline from "./Pipeline";

function Leads(){

const [leads,setLeads] = useState([]);

useEffect(()=>{
fetchLeads();
},[]);

const fetchLeads = async ()=>{

const res = await axios.get("http://localhost:5000/api/leads");

setLeads(res.data);

};

return(

<div>

<h2>Leads</h2>

{leads.map(lead => (

<div key={lead._id} style={{
border:"1px solid gray",
margin:"10px",
padding:"10px"
}}>

<p>Name: {lead.name}</p>

<p>Phone: {lead.phone}</p>

<p>Status: {lead.status}</p>

<p>Agent: {lead.assignedAgent?.name}</p>

<Pipeline leadId={lead._id}/>

</div>

))}

</div>

);

}

export default Leads;
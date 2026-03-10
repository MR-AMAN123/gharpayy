import SearchBar from "./SearchBar"
import {useEffect,useState} from "react"
import axios from "axios"

const stages = ["New Lead","Contacted","Visit Scheduled","Booked","Lost"]

function PipelineBoard(){

const [leads,setLeads] = useState([])
const [search,setSearch] = useState("")

useEffect(()=>{
fetchLeads()
},[])

const fetchLeads = async ()=>{
const res = await axios.get("http://localhost:5000/api/leads")
setLeads(res.data)
}

const moveLead = async(id,status)=>{

await axios.patch(
`http://localhost:5000/api/leads/${id}/status`,
{status}
)

fetchLeads()

}

const filteredLeads = leads.filter(l =>
l.name.toLowerCase().includes(search.toLowerCase()) ||
l.phone.includes(search)
)

return(

<div>

{/* SEARCH BAR HERE */}
<SearchBar setSearch={setSearch} />

<div className="flex gap-6 overflow-x-auto">

{stages.map(stage=>{

const stageLeads = filteredLeads.filter(l=>l.status===stage)

return(

<div key={stage} className="bg-gray-200 p-4 rounded w-64">

<h3 className="font-bold mb-3">{stage}</h3>

{stageLeads.map(lead=>(

<div key={lead._id} className="bg-white p-3 rounded shadow mb-3">

<p className="font-semibold">{lead.name}</p>

<p className="text-sm text-gray-500">
📞 {lead.phone}
</p>

<p className="text-xs text-gray-400">
Agent: {lead.assignedAgent?.name || "Unassigned"}
</p>

<select
className="border mt-2 p-1 w-full"
value={lead.status}
onChange={(e)=>moveLead(lead._id,e.target.value)}
>

{stages.map(s=>(
<option key={s}>{s}</option>
))}

</select>

</div>

))}

</div>

)

})}

</div>

</div>

)

}

export default PipelineBoard
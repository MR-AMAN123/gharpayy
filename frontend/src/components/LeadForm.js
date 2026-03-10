import {useState} from "react"
import axios from "axios"

function LeadForm(){

const [name,setName] = useState("")
const [phone,setPhone] = useState("")

const addLead = async ()=>{

await axios.post("http://localhost:5000/api/leads",{
name,
phone,
source:"Website"
})

window.location.reload()

}

return(

<div className="bg-white p-5 rounded shadow mb-6">

<h2 className="font-bold mb-3">Create New Lead</h2>

<div className="flex gap-3">

<input
className="border p-2 rounded w-1/3"
placeholder="Customer Name"
onChange={e=>setName(e.target.value)}
/>

<input
className="border p-2 rounded w-1/3"
placeholder="Phone"
onChange={e=>setPhone(e.target.value)}
/>

<button
className="bg-indigo-600 text-white px-4 rounded"
onClick={addLead}
>
Add Lead
</button>

</div>

</div>

)

}

export default LeadForm
import {useEffect,useState} from "react"
import axios from "axios"

function Dashboard(){

const [data,setData] = useState({})

useEffect(()=>{
load()
},[])

const load = async ()=>{
const res = await axios.get("http://localhost:5000/api/dashboard")
setData(res.data)
}

return(

<div className="grid grid-cols-4 gap-5 mb-6">

<div className="bg-blue-500 text-white p-5 rounded-lg shadow">
<p>Total Leads</p>
<h2 className="text-2xl font-bold">{data.totalLeads}</h2>
</div>

<div className="bg-green-500 text-white p-5 rounded-lg shadow">
<p>New Leads</p>
<h2 className="text-2xl font-bold">{data.newLeads}</h2>
</div>

<div className="bg-orange-500 text-white p-5 rounded-lg shadow">
<p>Visits</p>
<h2 className="text-2xl font-bold">{data.visits}</h2>
</div>

<div className="bg-purple-500 text-white p-5 rounded-lg shadow">
<p>Bookings</p>
<h2 className="text-2xl font-bold">{data.booked}</h2>
</div>

</div>

)

}

export default Dashboard
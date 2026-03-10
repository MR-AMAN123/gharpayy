import axios from "axios";

function Pipeline({leadId}){

const updateStatus = async(status)=>{

await axios.patch(
`http://localhost:5000/api/leads/${leadId}/status`,
{status}
);

window.location.reload();

};

return(

<div>

<button onClick={()=>updateStatus("Contacted")}>
Contacted
</button>

<button onClick={()=>updateStatus("Visit Scheduled")}>
Visit Scheduled
</button>

<button onClick={()=>updateStatus("Booked")}>
Booked
</button>

<button onClick={()=>updateStatus("Lost")}>
Lost
</button>

</div>

);

}

export default Pipeline;
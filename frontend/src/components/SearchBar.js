function SearchBar({setSearch}){

return(

<input
className="border p-2 rounded w-full mb-4"
placeholder="Search lead by name or phone..."
onChange={(e)=>setSearch(e.target.value)}
/>

)

}

export default SearchBar
function Layout({children}){

return(

<div className="flex h-screen">

{/* Sidebar */}

<div className="w-60 bg-indigo-700 text-white flex flex-col">

<h1 className="text-xl font-bold p-5 border-b border-indigo-500">
Gharpayy CRM
</h1>

<div className="p-4 space-y-3">

<div className="bg-indigo-500 p-2 rounded">
Dashboard
</div>

<div className="hover:bg-indigo-600 p-2 rounded cursor-pointer">
Leads
</div>

</div>

</div>

{/* Main area */}

<div className="flex-1">

<div className="bg-white shadow p-4 text-lg font-semibold">
Lead Management System
</div>

<div className="p-6">
{children}
</div>

</div>

</div>

)

}

export default Layout
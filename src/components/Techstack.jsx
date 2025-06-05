import { CodeXml } from "lucide-react";

export default function Techstack() {
  return (
    <div className=" bg-neutral-950 rounded-2xl shadow-md border border-neutral-800 p-4 w-full">
      <h2 className="text-2xl font-bold text-white mb-2 flex gap-2">
        <CodeXml className="w-5 h-5 mt-1.5" />
        Techstack
      </h2>
      
      <p className="text-white font-bold">
        Frontend
      </p>
      <div className="flex flex-wrap gap-2">
        <p className="text-white  bg-neutral-950 rounded-sm shadow-md w-fit border items border-e-white px-2">
        html
      </p>
      <p className="text-white  bg-neutral-950 rounded-sm shadow-md w-fit border items border-e-white px-2">
        css
      </p>
      <p className="text-white  bg-neutral-950 rounded-sm shadow-md w-fit border items border-e-white px-2">
        javascript
      </p>
      <p className="text-white  bg-neutral-950 rounded-sm shadow-md w-fit border items border-e-white px-2">
        tailwind
      </p>
      <p className="text-white  bg-neutral-950 rounded-sm shadow-md w-fit border items border-e-white px-2" >
        react
      </p>
      </div>

      <p className="text-white mt-2 font-bold">
        Backend
      </p>
      <div className="flex flex-wrap gap-2">
        <p className="text-white  bg-neutral-950 rounded-sm shadow-md w-fit border items border-e-white px-2">
        c#
      </p>
      <p className="text-white  bg-neutral-950 rounded-sm shadow-md w-fit border items border-e-white px-2">
        java
      </p>
      <p className="text-white  bg-neutral-950 rounded-sm shadow-md w-fit border items border-e-white px-2">
        mssql
      </p>
      </div>

    </div>
  );
}

import { Mail, Linkedin, Github, Facebook } from "lucide-react";

export default function Connect() {
  return (
    <div className="bg-neutral-950 rounded-2xl shadow-md border border-neutral-800 p-4 w-full">
      <h2 className="text-2xl font-bold text-white mb-2 flex gap-2">
        <Mail className="w-5 h-5 mt-1.5" />
        Connect
      </h2>

      <p className="text-white font-bold">Email</p>

      <div className="bg-black rounded-sm p-2 flex items-center justify-center hover:bg-gray-800">
        <a
          href="mailto:xxjust9n@gmail.com"
          className="text-white font-bold hover:underline hover:text-gray-300 transition-colors duration-200"
        >
          xxjust9n@gmail.com
        </a>
      </div>


      <p className="text-white mt-4 font-bold">Social Links</p>
      <div className="flex space-x-2 justify-around mt-2">
        <a
          href="https://www.linkedin.com/in/carljustinefalic/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-black hover:bg-gray-800 rounded-sm pb-2 px-7 transition-colors duration-200 cursor-pointer flex items-center justify-center"
        >
          <Linkedin className="w-5 h-5 mt-1.5 text-white" />
        </a>

        <a
          href="https://github.com/blondedCJ"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-black hover:bg-gray-800 rounded-sm pb-2 px-7 transition-colors duration-200 cursor-pointer flex items-center justify-center"
        >
          <Github className="w-5 h-5 mt-1.5 text-white" />
        </a>


        <a
          href="https://www.facebook.com/blondedcj/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-black hover:bg-gray-800 rounded-sm pb-2 px-7 transition-colors duration-200 cursor-pointer flex items-center justify-center"
        >
          <Facebook className="w-5 h-5 mt-1.5 text-white" />
        </a>

      </div>
    </div>
  );
}

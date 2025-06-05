import { SquareUser } from "lucide-react";

export default function About() {
  return (
    <div className=" bg-neutral-950 rounded-2xl shadow-md border border-neutral-800 p-4 w-full">
      <h2 className="text-2xl font-bold text-white mb-2 flex gap-2">
        <SquareUser className="w-5 h-5 mt-1.5" />
        About
      </h2>
      <p className="text-white ">
        A Graduate of Bachelor of Science in Information Technology (BSIT) student with a strong passion for technology and innovation. Throughout my academic journey, I have developed a solid foundation in various IT disciplines, including software development, web development, and database management.
        
        Eager to kickstart my career in the tech industry, I'm passionate about
        building innovative solutions and continuously learning new
        technologies. I'm excited to collaborate, solve real-world problems, and
        grow as a tech professional. Let's connect and create something amazing!
        
      </p>
    </div>
  );
}

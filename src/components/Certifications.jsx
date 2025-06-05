import { SquareAsterisk, Dot } from "lucide-react";

export default function Certifications() {
const certifications = [
  {
    title: "JavaScript Algorithms and Data Structure",
    company: "freeCodeCamp",
    year: "Nov 2023",
    file: "javascript-algorithms.pdf",
  },
  {
    title: "Responsive Web Design",
    company: "freeCodeCamp",
    year: "Oct 2023",
    file: "responsive-web-design.pdf",
  },
  {
    title: "SAP Business One, Systems Integration and Architecture",
    company: "FIT Academy",
    year: "March 2023",
    file: "sap-business-one.pdf",
  },
  {
    title: "Systems Administration",
    company: "Linux Professional Institute",
    year: "June 2022",
    file: "systems-administration.pdf",
  },
  {
    title: "Java Foundations",
    company: "Oracle",
    year: "June 2022",
    file: "java-foundations.pdf",
  },
];


  return (
    <div className=" bg-neutral-950 rounded-2xl shadow-md w-full border border-neutral-800 p-4 h-full">
      <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
        <SquareAsterisk className="w-5 h-5 mt-1" /> Certifications
      </h2>

      <div className="space-y-6 relative mt-8">
        {certifications.map((item, index) => (
          <div key={index} className="flex items-start gap-4">
            <div className="flex flex-col items-center">
              <Dot className="text-white w-4 h-4 mt-1" />
              {index !== certifications.length - 1 && (
                <div className="h-full w-px bg-neutral-700 mt-1" />
              )}
            </div>
            <div className="flex-1">
              <h3 className="text-white font-semibold">
            <a
              href={`${import.meta.env.BASE_URL}certificates/${item.file}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline hover:text-blue-400 transition-colors duration-200"
            >
              {item.title}
            </a>
              </h3>
              <p className="text-sm text-neutral-400">{item.company}</p>
            </div>
            <div className="text-sm text-white bg-neutral-800 border border-white px-2 py-0.5 rounded-full min-w-[48px] text-center">
              {item.year}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

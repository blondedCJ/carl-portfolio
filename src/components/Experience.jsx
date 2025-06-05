import { BriefcaseBusiness, Dot } from "lucide-react";

export default function ExperienceCard() {
  const experience = [
    {
      title: "IT Intern",
      company: "Pierre & Paul Solutions Inc.",
      year: "2025",
    },
    {
      title: "Information Technology",
      company: "STI College Malolos",
      year: "2025 - 2021",
    },
    {
      title: "Hello World! 👋🏻",
      company: "Wrote my first line of code",
      year: "2021",
    },
    {
      title: "STEM",
      company: "Our Lady of Fatima University",
      year: "2019 - 2021",
    }
  ];

  return (
    <div className=" bg-neutral-950 rounded-2xl shadow-md w-full border border-neutral-800 p-4 h-full">
      <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
        <BriefcaseBusiness className="w-5 h-5 mt-1" /> Experience
      </h2>

      <div className="space-y-6 relative mt-8">
        {experience.map((item, index) => (
          <div key={index} className="flex items-start gap-4">
            <div className="flex flex-col items-center">
              <Dot className="text-white w-4 h-4 mt-1" />
              {index !== experience.length - 1 && (
                <div className="h-full w-px bg-neutral-700 mt-1" />
              )}
            </div>
            <div className="flex-1">
              <h3 className="text-white font-semibold">{item.title}</h3>
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

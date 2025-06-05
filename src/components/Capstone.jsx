import { Joystick, PlayCircle } from "lucide-react";

export default function CapstoneProject() {
  return (
    <div className="bg-neutral-950 rounded-2xl shadow-md border border-neutral-800 p-4 w-full">


      <div className="flex items-center justify-between mb-2">
        <h2 className="text-2xl font-bold text-white mb-2 flex gap-2">
          <Joystick className="w-5 h-5 mt-1.5" />
          Capstone Project
        </h2>
        <a
          href="/game-ads/capstone-ad.mp4"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-sm bg-black rounded-sm py-2 px-3 justify-center hover:bg-gray-800 mr-5"
        >
          <PlayCircle className="w-5 h-5"/>
          View
        </a>
      </div>

      <p className="text-2xl font-extrabold text-white mb-2">Paws & Play</p>

      <p className="text-white">
        An innovative <span className="font-extrabold">Augmented Reality</span> game that lets users experience cat ownership—minus the litter box or allergy worries. Players can adopt and interact with virtual cats, each with unique personalities and behaviors, brought to life in their real environment through AR. Users engage in activities like feeding, bathing, and playing to build a bond with their pet. The cats respond adaptively to care and attention, promoting a sense of responsibility. Mini-games and achievements add extra fun and make the experience both meaningful and rewarding.
      </p>
    </div>
  );
}

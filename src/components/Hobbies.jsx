import { Dumbbell } from "lucide-react";

export default function Hobbies() {
  return (
    <div className=" bg-neutral-950 rounded-2xl shadow-md border border-neutral-800 p-4 w-full">
      <h2 className="text-2xl font-bold text-white mb-2 flex gap-2">
        <Dumbbell className="w-5 h-5 mt-1.5" />
        Hobbies
      </h2>
      <p className="text-white">
        Outside of work, I enjoy staying active by working out regularly. I'm also a big fan of films—whether it's a classic or a new release. When I’m at home, I often unwind with video games, and whenever I get the chance, I love to travel and explore new places.
      </p>
    </div>
  );
}

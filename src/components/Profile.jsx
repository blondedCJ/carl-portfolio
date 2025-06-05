import React from "react";
import { MapPin } from "lucide-react";

export default function Profile() {
  return (
    <div className="flex items-center justify-between mb-2 md:mb-4">
      <div>
        <h1 className="text-lg md:text-3xl font-bold font-sans">Carl Justine Falic</h1>
        <p className="flex gap-1">
          <MapPin className="w-4 h-4 mt-1" />
          Bulacan, Philippines
        </p>
        <p className="text-lg md:text-2xl font-bold md:mt-2">
          BSIT Graduate at STI College Malolos.
        </p>
      </div>
      <img
        className="h-20 w-20 md:h-25 md:w-25 rounded-xl object-cover"
        src="src/assets/images/fe6a4abc-29b8-4540-ac8a-084ff9ff6fde (1).jpg"
        alt="Profile"
      />
    </div>
  );
}

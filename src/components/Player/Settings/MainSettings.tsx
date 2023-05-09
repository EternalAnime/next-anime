import React from "react";
import { AiOutlineRight } from "react-icons/ai";
import { MdOutlineHighQuality } from "react-icons/md";
import { SiSpeedtest } from "react-icons/si";

interface MainSettingsProps {
  setSettingsType: React.Dispatch<
    React.SetStateAction<"main" | "playspeed" | "quality">
  >;
  currentSpeed: string;
  currentQuality: string;
}

const MainSettings: React.FC<MainSettingsProps> = ({
  setSettingsType,
  currentQuality,
  currentSpeed,
}) => {
  return (
    <div className="w-full">
      <div
        onClick={() => setSettingsType("playspeed")}
        className="flex items-center justify-between cursor-pointer p-2"
      >
        <div className="flex items-center space-x-3">
          <SiSpeedtest size={20} />
          <p className="text-sm font-semibold">Play speed</p>
        </div>
        <div className="flex items-center space-x-3">
          <p className="text-sm font-semibold">{currentSpeed}</p>
          <AiOutlineRight size={20} />
        </div>
      </div>
      <div
        onClick={() => setSettingsType("quality")}
        className="flex items-center justify-between cursor-pointer p-2"
      >
        <div className="flex items-center space-x-3">
          <MdOutlineHighQuality size={20} />
          <p className="text-sm font-semibold">Quality</p>
        </div>
        <div className="flex items-center space-x-3">
          <p className="text-sm font-semibold">{currentQuality}</p>
          <AiOutlineRight size={20} />
        </div>
      </div>
    </div>
  );
};

export default MainSettings;

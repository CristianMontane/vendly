import React from "react";
import { Timer } from "lucide-react";

interface TimerDisplayProps {
  timeLeft: string;
}

const TimerDisplay: React.FC<TimerDisplayProps> = ({ timeLeft }) => {
  return (
    <div className="flex items-center justify-center gap-2 text-gray-600">
      <Timer className="w-4 h-4" />
      <span>{timeLeft}</span>
    </div>
  );
};

export default TimerDisplay;

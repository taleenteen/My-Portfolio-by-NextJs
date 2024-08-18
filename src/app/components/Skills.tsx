import React from "react";

interface SkillCircleProps {
  imageSrc: string;
  strokeWidth: number;
  progress: number;
  diameter: number;
  name: string;
}

const SkillCircle: React.FC<SkillCircleProps> = ({
  imageSrc,
  strokeWidth,
  progress,
  diameter,
  name,
}) => {
  const radius = (diameter - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const strokeDasharray = `${circumference}px ${circumference}px`;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <div className="flex flex-col items-center hover:scale-105 transition-transform duration-300">
      <div className="relative flex justify-center items-center">
        <svg
          className="absolute"
          width={diameter}
          height={diameter}
          viewBox={`0 0 ${diameter} ${diameter}`}
        >
          <circle
            cx={diameter / 2}
            cy={diameter / 2}
            r={radius}
            stroke="#e5e7eb"
            strokeWidth={strokeWidth}
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle
            cx={diameter / 2}
            cy={diameter / 2}
            r={radius}
            stroke="#4F46E5"
            strokeWidth={strokeWidth}
            strokeDasharray={strokeDasharray}
            strokeDashoffset={strokeDashoffset}
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            transform={`rotate(-90 ${diameter / 2} ${diameter / 2})`}
          />
        </svg>
        <img
          src={imageSrc}
          alt="Skill"
          className="w-full h-full object-cover rounded-full shadow-2xl bg-gray-800"
          style={{ width: diameter, height: diameter }}
        />
      </div>
      <span className="mt-2 text-3xl font-bold text-center shadow-2xl">
        {name}
      </span>
    </div>
  );
};

export default SkillCircle;

import { iconMap } from "@/data/iconMap";
import React from "react";

const Services = ({ service }) => {
  const checkmarkIcon = (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5 13l4 4L19 7"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
  const Icon = iconMap[service.icon];

  return (
    <div className="transition-transform duration-200 ease-in-out hover:-translate-y-1 bg-gray-100 border flex-1 border-gray-200 rounded-lg p-5 shadow-md relative overflow-hidden">
      <div className="flex items-center gap-2 font-bold text-lg text-yellow-400">
        {service.kicker}
        {Icon && <Icon className="w-6 h-6 text-yellow-400" />}
      </div>
      <h5 className="mt-1 mb-2">{service.title}</h5>
      <p className="text-gray-700 text-sm mb-3">{service.description}</p>
      {service.points.length > 0 && (
        <ul className="list grid gap-2 mt-2">
          {service.points.map((point, pointIndex) => (
            <li key={pointIndex} className="flex items-start gap-2 list-none">
              {checkmarkIcon}
              {point}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Services;

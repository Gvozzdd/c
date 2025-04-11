
import React from 'react';

const CoachCard = ({ coach, onClick }) => (
  <div className="rounded-xl border shadow-md p-4 cursor-pointer hover:shadow-lg" onClick={onClick}>
    <img src={coach.photo} alt={coach.full_name} className="w-full h-60 object-cover rounded-md mb-2" />
    <h2 className="text-xl font-semibold">{coach.full_name}</h2>
    <p className="text-sm text-gray-600">{coach.title}</p>
    <p className="text-sm text-gray-500">{coach.specialization}</p>
  </div>
);

export default CoachCard;

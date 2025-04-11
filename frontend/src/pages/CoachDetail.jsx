
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const CoachDetail = () => {
  const { id } = useParams();
  const [coach, setCoach] = useState(null);

  useEffect(() => {
    fetch(`/api/coaches/${id}/`)
      .then(res => res.json())
      .then(setCoach);
  }, [id]);

  if (!coach) return <div className="p-8">Загрузка...</div>;

  return (
    <div className="p-8 max-w-3xl mx-auto">
      <img src={coach.photo} alt={coach.full_name} className="w-full h-96 object-cover rounded-xl mb-4" />
      <h1 className="text-3xl font-bold">{coach.full_name}</h1>
      <p className="text-lg text-gray-600">{coach.title}</p>
      <p className="text-md text-gray-500 mb-4">{coach.specialization}</p>
      <p className="mb-6">{coach.biography}</p>
      <h2 className="text-xl font-semibold mb-2">Расписание занятий</h2>
      <ul className="list-disc pl-6">
        {coach.schedules.map((s, idx) => (
          <li key={idx}>{s.day}: {s.time} ({s.location})</li>
        ))}
      </ul>
    </div>
  );
};

export default CoachDetail;

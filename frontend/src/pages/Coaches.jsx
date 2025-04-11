
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CoachCard from '../components/CoachCard';

const Coaches = () => {
  const [coaches, setCoaches] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('/api/coaches/')
      .then(res => res.json())
      .then(setCoaches);
  }, []);

  return (
    <div className="p-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {coaches.map(coach => (
        <CoachCard
          key={coach.id}
          coach={coach}
          onClick={() => navigate(`/coaches/${coach.id}`)}
        />
      ))}
    </div>
  );
};

export default Coaches;

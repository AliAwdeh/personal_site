import React, { useState, useEffect } from 'react';

const Age = () => {
  const [age, setAge] = useState();

  const tick = () => {
    const divisor = 1000 * 60 * 60 * 24 * 365.2421897; // ms in an average year
    const birthTime = new Date('2001-07-01T03:00:00');
    setAge(((Date.now() - birthTime) / divisor).toFixed(11));
  };

  useEffect(() => {
    const timer = setInterval(() => tick(), 25);
    return () => {
      clearInterval(timer);
    };
  }, []);
  return <>{age}</>;
};

const data = [
  {
    key: 'age',
    label: 'Current age',
    value: <Age />,
  },
  {
    key: 'patent',
    label: 'First Patent',
    value: '15 years old',
  },
  {
    key: 'countries',
    label: 'Countries Visited',
    value: 5,
  },
  {
    key: 'nbinventions',
    label: 'Number of Recognized Inventions',
    value: '3',
  },
  {
    key: 'nb_patents',
    label: 'Number of Patents',
    value: '2',
  },
  {
    key: 'nbbrothers',
    label: 'Number of Brothers',
    value: '3',
  },
  {
    key: 'IFIA',
    label: 'IFIA Certificate number',
    value: 'LB2023JUN147ACXA',
    link: 'https://www.ifia.com/lb2023jun147acxa/',
  },
  {
    key: 'location',
    label: 'Current city',
    value: 'Beirut, Lebanon',
  },
];

export default data;

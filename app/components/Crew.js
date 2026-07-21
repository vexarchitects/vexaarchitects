import React from 'react';

const crewMembers = [
  { id: 1, name: 'Crew Member 1', image: '/images/men.png' },
  { id: 2, name: 'Crew Member 2', image: '/images/men.png' },
  { id: 3, name: 'Crew Member 3', image: '/images/men.png' },
  { id: 4, name: 'Crew Member 4', image: '/images/men.png' },
  { id: 5, name: 'Crew Member 5', image: '/images/men.png' },
  { id: 6, name: 'Crew Member 6', image: '/images/men.png'   },
];

export default function Crew() {
  return (
    <div className="py-16 bg-">
      <div className="container mx-auto text-center">
        {/* Meet the Crew Header */}
        <h2 className="text-5xl font-bold text-transparent bg-clip-text bg-primary-gradient">
          Meet the team
        </h2>
        
        {/* Crew Member Grid */}
        <div className="mt-10 grid grid-cols-2 md:grid-cols-3 gap-8 justify-center">
          {crewMembers.map((member) => (
            <div key={member.id} className="flex flex-col items-center">
              <img
                src={member.image}
                alt={member.name}
                className="w-48 h-48 object-cover rounded-lg "
              />
              <p className="mt-4 text-xl font-semibold">{member.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

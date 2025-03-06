import React from 'react';
import { Book } from 'lucide-react';

export default function ShortNotes() {
  const subjects = [
    {
      name: 'Mathematics',
      topics: ['Calculus', 'Algebra', 'Geometry', 'Trigonometry']
    },
    {
      name: 'Physics',
      topics: ['Mechanics', 'Thermodynamics', 'Electromagnetism', 'Quantum Physics']
    },
    {
      name: 'Chemistry',
      topics: ['Organic Chemistry', 'Inorganic Chemistry', 'Physical Chemistry', 'Biochemistry']
    }
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Short Notes</h2>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {subjects.map((subject) => (
          <div key={subject.name} className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center mb-4">
              <Book className="w-6 h-6 text-blue-600 mr-2" />
              <h3 className="text-xl font-semibold text-gray-800">{subject.name}</h3>
            </div>
            
            <ul className="space-y-2">
              {subject.topics.map((topic) => (
                <li key={topic}>
                  <button className="w-full text-left px-4 py-2 rounded-md hover:bg-blue-50 text-gray-700">
                    {topic}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
import React from 'react';
import { Clock, Award } from 'lucide-react';

export default function Tests() {
  const tests = [
    {
      subject: 'Mathematics',
      title: 'Calculus Fundamentals',
      duration: '45 mins',
      questions: 30,
      difficulty: 'Intermediate'
    },
    {
      subject: 'Physics',
      title: 'Classical Mechanics',
      duration: '60 mins',
      questions: 40,
      difficulty: 'Advanced'
    },
    {
      subject: 'Chemistry',
      title: 'Organic Chemistry Basics',
      duration: '30 mins',
      questions: 25,
      difficulty: 'Beginner'
    }
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Available Tests</h2>
      
      <div className="grid gap-6">
        {tests.map((test, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <span className="text-sm font-medium text-blue-600">{test.subject}</span>
                <h3 className="text-xl font-semibold text-gray-800 mt-1">{test.title}</h3>
              </div>
              <span className={`px-3 py-1 rounded-full text-sm font-medium
                ${test.difficulty === 'Beginner' ? 'bg-green-100 text-green-800' :
                  test.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-red-100 text-red-800'}`}>
                {test.difficulty}
              </span>
            </div>
            
            <div className="flex items-center space-x-6 text-gray-600 mb-6">
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-2" />
                <span>{test.duration}</span>
              </div>
              <div className="flex items-center">
                <Award className="w-4 h-4 mr-2" />
                <span>{test.questions} questions</span>
              </div>
            </div>
            
            <button className="w-full bg-blue-600 text-white rounded-md py-2 hover:bg-blue-700 transition duration-200">
              Start Test
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
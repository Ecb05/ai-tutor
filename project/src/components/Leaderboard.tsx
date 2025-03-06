import React from 'react';
import { Trophy, Medal } from 'lucide-react';

export default function Leaderboard() {
  const leaderboardData = [
    { rank: 1, name: 'Alex Johnson', score: 980, subject: 'Physics' },
    { rank: 2, name: 'Sarah Chen', score: 945, subject: 'Mathematics' },
    { rank: 3, name: 'Michael Brown', score: 920, subject: 'Chemistry' },
    { rank: 4, name: 'Emma Wilson', score: 890, subject: 'Physics' },
    { rank: 5, name: 'James Lee', score: 875, subject: 'Mathematics' }
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center mb-6">
          <Trophy className="w-8 h-8 text-yellow-500 mr-3" />
          <h2 className="text-2xl font-bold text-gray-800">Global Leaderboard</h2>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b-2 border-gray-200">
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Rank</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Student</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Subject</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Score</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {leaderboardData.map((student) => (
                <tr key={student.rank} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      {student.rank <= 3 ? (
                        <Medal className={`w-5 h-5 mr-2 ${
                          student.rank === 1 ? 'text-yellow-500' :
                          student.rank === 2 ? 'text-gray-400' :
                          'text-orange-500'
                        }`} />
                      ) : (
                        <span className="w-5 h-5 mr-2">{student.rank}</span>
                      )}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {student.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {student.subject}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-semibold">
                    {student.score}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
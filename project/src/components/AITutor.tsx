import React, { useState } from 'react';
import { Send } from 'lucide-react';

export default function AITutor() {
  const [subject, setSubject] = useState('mathematics');
  
  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">AI Tutor</h2>
        
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">Select Subject</label>
          <select
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className="w-full md:w-64 rounded-md border border-gray-300 px-3 py-2"
          >
            <option value="mathematics">Mathematics</option>
            <option value="physics">Physics</option>
            <option value="chemistry">Chemistry</option>
          </select>
        </div>

        <div className="bg-gray-50 rounded-lg p-4 h-96 mb-4 overflow-y-auto">
          {/* Chat messages would go here */}
          <div className="text-center text-gray-500 mt-32">
            Start a conversation with your AI tutor!
          </div>
        </div>

        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Ask your question..."
            className="flex-1 rounded-md border border-gray-300 px-4 py-2"
          />
          <button className="bg-blue-600 text-white rounded-md px-4 py-2 hover:bg-blue-700">
            <Send className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
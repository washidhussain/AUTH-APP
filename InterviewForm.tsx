// InterviewForm.tsx
import React, { useState } from 'react';
import axios from 'axios';

const InterviewForm: React.FC = () => {
  const [candidateName, setCandidateName] = useState('');
  const [interviewerName, setInterviewerName] = useState('');
  const [rating, setRating] = useState<number | null>(null);

  const handleAddInterview = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.post(
        'http://localhost:5000/interview/add',
        { candidateName, interviewerName, rating },
        { headers: { Authorization: token } }
      );

      console.log(response.data.message);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Add Interview</h2>
      <label>Candidate Name:</label>
      <input type="text" value={candidateName} onChange={(e) => setCandidateName(e.target.value)} />
      <label>Interviewer Name:</label>
      <input type="text" value={interviewerName} onChange={(e) => setInterviewerName(e.target.value)} />
      <label>Rating:</label>
      <input type="number" value={rating || ''} onChange={(e) => setRating(Number(e.target.value))} />
      <button onClick={handleAddInterview}>Add Interview</button>
    </div>
  );
};

export default InterviewForm;

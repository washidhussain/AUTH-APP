// InterviewList.tsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const InterviewList: React.FC = () => {
  const [interviews, setInterviews] = useState([]);

  const fetchInterviews = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get('http://localhost:5000/interview/list', {
        headers: { Authorization: token },
      });

      setInterviews(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchInterviews();
  }, []);

  const handleDeleteInterview = async (interviewId: string) => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.delete(`http://localhost:5000/interview/delete/${interviewId}`, {
        headers: { Authorization: token },
      });

      console.log(response.data.message);

      // Refresh the interview list
      fetchInterviews();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Interview List</h2>
      <ul>
        {interviews.map((interview: any) => (
          <li key={interview._id}>
            {interview.candidateName} - {interview.interviewerName}
            <button onClick={() => handleDeleteInterview(interview._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InterviewList;

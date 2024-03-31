'use client';

import React, { useState } from 'react';
import LogEntry from '../components/LogEntry';
import TimeChart from '../components/TimeChart';

export default function TimelogMain() {
  const [logs, setLogs] = useState([]);
  const [date, setDate] = useState('');
  const [task, setTask] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');

  const handleLogEntry = () => {
    if (date && task && startTime && endTime) {
      const totalTime = calculateTotalTime(startTime, endTime);
      const log = { date, task, startTime, endTime, totalTime };
      setLogs([...logs, log]);
      setDate('');
      setTask('');
      setStartTime('');
      setEndTime('');
    } else {
      alert('Please fill in all fields.');
    }
  };

  const calculateTotalTime = (start, end) => {
    const startHour = parseInt(start.split(':')[0]);
    const startMinute = parseInt(start.split(':')[1]);
    const endHour = parseInt(end.split(':')[0]);
    const endMinute = parseInt(end.split(':')[1]);

    const totalHour = endHour - startHour;
    const totalMinute = endMinute - startMinute;

    return `${totalHour}h ${totalMinute}m`;
  };

  return (
    <div className="container mx-auto py-8">
      {/* Log entry form */}
      <div className="mb-8">
        <h2 className="text-xl font-bold mb-4">Log Entry</h2>
        <div className="flex flex-col space-y-4">
          <label>Date:</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="border-gray-300 border rounded-lg p-2 text-black"
          />

          <label>Task:</label>
          <input
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            className="border-gray-300 border rounded-lg p-2 text-black"
          />

          <label>Start Time:</label>
          <input
            type="time"
            value={startTime}
            onChange={(e) => setStartTime(e.target.value)}
            step="300"
            className="border-gray-300 border rounded-lg p-2 text-black"
          />

          <label>End Time:</label>
          <input
            type="time"
            value={endTime}
            onChange={(e) => setEndTime(e.target.value)}
            step="300"
            className="border-gray-300 border rounded-lg p-2 text-black"
          />

          <button
            onClick={handleLogEntry}
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          >
            Log Time
          </button>
        </div>
      </div>

      {/* Display log entries */}
      <div className="mb-8 bg-black rounded-lg p-4">
        <h2 className="text-xl font-bold mb-4 text-white">
          Logged Time by Date
        </h2>
        {logs.map((log, index) => (
          <LogEntry key={index} log={log} />
        ))}
      </div>

      {/* Display time chart */}
      <div>
        <h2 className="text-xl font-bold mb-4">Chart</h2>
        <TimeChart logs={logs} />
      </div>
    </div>
  );
}

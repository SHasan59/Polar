"use client";

import React, { useState } from 'react';
import LogEntry from '../components/logentry';
import TimeChart from '../components/TimeChart';

export default function TimelogMain() {
  const [logs, setLogs] = useState([]);
  const [date, setDate] = useState(getCurrentDate());
  const [task, setTask] = useState('');
  const [startTime, setStartTime] = useState(getCurrentTime());
  const [endTime, setEndTime] = useState('');

  function getCurrentDate() {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

  function getCurrentTime() {
    const today = new Date();
    const hours = String(today.getHours()).padStart(2, '0');
    const minutes = String(today.getMinutes()).padStart(2, '0');
    return `${hours}:${minutes}`;
  }

  const handleLogEntry = () => {
    if (task && startTime && endTime) {
      const totalTime = calculateTotalTime(startTime, endTime);
      const log = { date, task, startTime, endTime, totalTime };
      setLogs([...logs, log]);
      setTask('');
      setEndTime('');
    } else {
      alert('Please fill in all fields.');
    }
  }

  const calculateTotalTime = (start, end) => {
    const startHour = parseInt(start.split(':')[0]);
    const startMinute = parseInt(start.split(':')[1]);
    const endHour = parseInt(end.split(':')[0]);
    const endMinute = parseInt(end.split(':')[1]);

    if (startHour === endHour && startMinute === endMinute) {
      return '0h 0m';
    }

    let totalHour = endHour - startHour;
    let totalMinute = endMinute - startMinute;

    if (totalMinute < 0) {
      totalHour--;
      totalMinute += 60;
    }

    return `${totalHour}h ${totalMinute}m`;
  }

  const totalTimeByDate = logs.reduce((acc, log) => {
    const date = log.date;
    const totalTime = parseInt(log.totalTime.split('h')[0]) * 60 + parseInt(log.totalTime.split(' ')[1].split('m')[0]);
    if (!acc[date]) {
      acc[date] = [];
    }
    acc[date].push(totalTime);
    return acc;
  }, {});

  return (
    <div className="container mx-auto py-8 font-sans">
      {/* Timelog form */}
      <div className="bg-green-50 shadow-md rounded px-8 pt-6 pb-8 mb-8">
        <h2 className="text-xl font-bold mb-4 text-green-800">Log Entry</h2>
        <div className="flex flex-col space-y-4">
          <label className="text-green-800">Date:</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="border-gray-300 border rounded-lg p-2 text-black"
          />

          <label className="text-green-800">Task:</label>
          <input
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            className="border-gray-300 border rounded-lg p-2 text-black"
          />

          <label className="text-green-800">Start Time:</label>
          <input
            type="time"
            value={startTime}
            onChange={(e) => setStartTime(e.target.value)}
            step="300"
            className="border-gray-300 border rounded-lg p-2 text-black"
          />

          <label className="text-green-800">End Time:</label>
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
      <div className="bg-yellow-50 shadow-md rounded-lg p-4 mb-8">
        <h2 className="text-xl font-bold mb-4 text-yellow-800">Logged Time by Date</h2>
        <div className="grid grid-cols-3 gap-4">
          {logs.map((log, index) => (
            <div key={index} className="flex flex-col text-yellow-800 my-4 border-t border-gray-400">
              <LogEntry log={log} />
              {(index + 1) % 3 === 0 && index !== logs.length - 1 && <div />}
              {index % 3 === 2 && index !== logs.length - 1 && <div />}
            </div>
          ))}
        </div>
      </div>

      {/* Display time chart */}
      <div className="bg-purple-50 shadow-md rounded-lg p-4 mb-8">
        <h2 className="text-xl font-bold mb-4 text-purple-800">Chart</h2>
        <TimeChart logs={logs} />
      </div>
    </div>
  );
}
'use client';

import React, { useState, useEffect } from 'react';
import Chart from 'chart.js/auto';

export default function Timelog() {
  const [date, setDate] = useState('');
  const [activity, setActivity] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    const ctx = document.getElementById('myChart');
    const myChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: logs.map(log => log.date),
        datasets: [{
          label: 'Total Time Logged (hours)',
          data: logs.map(log => calculateTotalHours(log.startTime, log.endTime)),
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          borderColor: 'rgba(255, 99, 132, 1)',
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    })

    return () => {
      myChart.destroy();
    };
  }, [logs]);

  const handleLogClick = () => {
    if (date && activity && startTime && endTime) {
      const logEntry = { date, activity, startTime, endTime };
      setLogs([...logs, logEntry]);
      setDate('');
      setActivity('');
      setStartTime('');
      setEndTime('');
    } else {
      alert("Please fill in all fields.");
    }
  }

  const calculateTotalHours = (startTime, endTime) => {
    const start = new Date("1970-01-01T" + startTime + ":00Z");
    const end = new Date("1970-01-01T" + endTime + ":00Z");
    const diff = end.getTime() - start.getTime();
    const totalSeconds = Math.abs(diff / 1000);
    const hours = totalSeconds / 3600;
    return hours.toFixed(2);
  }

  return (
    <div className="bg-black text-white p-4 rounded-lg">
      <div>
        <label>Date:</label>
        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} className="mb-4 text-black" />
      </div>
      <div>
        <label>Activity:</label>
        <input type="text" value={activity} onChange={(e) => setActivity(e.target.value)} className="mb-4 text-black" />
      </div>
      <div>
        <label>Start Time:</label>
        <input type="time" value={startTime} onChange={(e) => setStartTime(e.target.value)} className="mb-4 text-black" />
      </div>
      <div>
        <label>End Time:</label>
        <input type="time" value={endTime} onChange={(e) => setEndTime(e.target.value)} className="mb-4 text-black" />
      </div>
      <button onClick={handleLogClick} className="bg-white text-black border-none px-4 py-2 rounded-md cursor-pointer mb-6">Log Time</button>
      
      <div>
        <h2 className="text-xl font-bold mb-2">Logged Time Chart</h2>
        <canvas id="myChart"></canvas>
      </div>
    </div>
  )
}

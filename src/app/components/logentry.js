import React from 'react';

export default function LogEntry({ log }) {
  return (
    <div className="mb-2">
      <p><span className="font-bold">Date:</span> {log.date}</p>
      <p><span className="font-bold">Task:</span> {log.task}</p>
      <p><span className="font-bold">Start Time:</span> {log.startTime}</p>
      <p><span className="font-bold">End Time:</span> {log.endTime}</p>
      <p><span className="font-bold">Total Time:</span> {log.totalTime}</p>
    </div>
  );
}
     
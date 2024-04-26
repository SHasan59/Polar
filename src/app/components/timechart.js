import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

export default function TimeChart({ logs }) {
  const chartData = logs.map((log, index) => ({
    date: log.date,
    totalTime: parseInt(log.totalTime.split('h')[0]) * 60 + parseInt(log.totalTime.split(' ')[1].split('m')[0]),
  }))

  return (
    <div className="p-4 rounded-lg bg-purple-50">
      <ResponsiveContainer width="100%" height={400}>
        <BarChart
          data={chartData}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip content={<CustomTooltip />} />
          <Legend />
          <Bar
            dataKey="totalTime"
            fill="#8884d8"
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

function CustomTooltip({ active, payload, label }) {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip">
        <p className="label">{`Date: ${label}`}</p>
        <p className="label">{`Total Time: ${payload[0].value} minutes`}</p>
      </div>
    )
  }

  return null;
}
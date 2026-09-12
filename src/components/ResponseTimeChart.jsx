import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts'
import { getResponseTimeTrend } from '../utils/metrics'

function formatDateLabel(dateStr) {
  const d = new Date(dateStr)
  return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
}

function ResponseTimeChart({ tickets }) {
  const data = getResponseTimeTrend(tickets).map((d) => ({
    ...d,
    label: formatDateLabel(d.date),
    avgHours: Number(d.avgHours.toFixed(1)),
  }))

  return (
    <div className="bg-white rounded-xl border border-slate-200 p-5">
      <h3 className="text-sm font-medium text-slate-600 mb-4">Average Response Time Trend</h3>
      <ResponsiveContainer width="100%" height={260}>
        <LineChart data={data} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#F1F5F9" vertical={false} />
          <XAxis
            dataKey="label"
            tick={{ fontSize: 11, fontFamily: 'JetBrains Mono, monospace', fill: '#64748B' }}
            axisLine={{ stroke: '#E2E8F0' }}
            tickLine={false}
          />
          <YAxis
            tick={{ fontSize: 11, fontFamily: 'JetBrains Mono, monospace', fill: '#64748B' }}
            axisLine={false}
            tickLine={false}
            unit="h"
          />
          <Tooltip
            contentStyle={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 13, borderRadius: 8, border: '1px solid #E2E8F0' }}
            formatter={(value) => [`${value}h`, 'Avg. Response']}
          />
          <Line
            type="monotone"
            dataKey="avgHours"
            stroke="#4C1D95"
            strokeWidth={2.5}
            dot={{ fill: '#4C1D95', r: 3 }}
            activeDot={{ r: 5 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default ResponseTimeChart
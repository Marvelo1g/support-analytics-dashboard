import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts'
import { getTicketsOverTime } from '../utils/metrics'

function formatDateLabel(dateStr) {
  const d = new Date(dateStr)
  return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
}

function TimeChart({ tickets }) {
  const data = getTicketsOverTime(tickets).map((d) => ({
    ...d,
    label: formatDateLabel(d.date),
  }))

  return (
    <div className="bg-white rounded-xl border border-slate-200 p-5">
      <h3 className="text-sm font-medium text-slate-600 mb-4">Tickets Created Over Time</h3>
      <ResponsiveContainer width="100%" height={260}>
        <BarChart data={data} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#F1F5F9" vertical={false} />
          <XAxis
            dataKey="label"
            tick={{ fontSize: 11, fontFamily: 'JetBrains Mono, monospace', fill: '#64748B' }}
            axisLine={{ stroke: '#E2E8F0' }}
            tickLine={false}
          />
          <YAxis
            allowDecimals={false}
            tick={{ fontSize: 11, fontFamily: 'JetBrains Mono, monospace', fill: '#64748B' }}
            axisLine={false}
            tickLine={false}
          />
          <Tooltip
            contentStyle={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 13, borderRadius: 8, border: '1px solid #E2E8F0' }}
            cursor={{ fill: '#F8FAFC' }}
          />
          <Bar dataKey="count" fill="#4C1D95" radius={[4, 4, 0, 0]} name="Tickets" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default TimeChart
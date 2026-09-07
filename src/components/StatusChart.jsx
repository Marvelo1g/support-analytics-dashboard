import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import { getStatusBreakdown } from '../utils/metrics'

function StatusChart({ tickets }) {
  const data = getStatusBreakdown(tickets)

  return (
    <div className="bg-white rounded-xl border border-slate-200 p-5">
      <h3 className="text-sm font-medium text-slate-600 mb-4">Tickets by Status</h3>
      <ResponsiveContainer width="100%" height={260}>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={90}
            paddingAngle={3}
          >
            {data.map((entry, index) => (
              <Cell key={index} fill={entry.color} stroke="none" />
            ))}
          </Pie>
          <Tooltip
            contentStyle={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 13, borderRadius: 8, border: '1px solid #E2E8F0' }}
          />
          <Legend
            iconType="circle"
            wrapperStyle={{ fontSize: 13, fontFamily: 'Space Grotesk, sans-serif' }}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}

export default StatusChart
import { Ticket, AlertCircle, Clock, CheckCircle2 } from 'lucide-react'
import { getTotalTickets, getOpenCount, getAverageResponseHours, getResolvedTodayCount } from '../utils/metrics'

function SummaryCard({ icon: Icon, label, value, accent }) {
  return (
    <div className="bg-white rounded-xl border border-slate-200 p-5 flex items-center gap-4">
      <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${accent}`}>
        <Icon size={20} />
      </div>
      <div>
        <p className="text-2xl font-semibold text-slate-800 font-mono">{value}</p>
        <p className="text-sm text-slate-500">{label}</p>
      </div>
    </div>
  )
}

function SummaryCards({ tickets }) {
  const total = getTotalTickets(tickets)
  const open = getOpenCount(tickets)
  const avgResponse = getAverageResponseHours(tickets)
  const resolvedToday = getResolvedTodayCount(tickets)

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      <SummaryCard icon={Ticket} label="Total Tickets" value={total} accent="bg-accent/10 text-accent" />
      <SummaryCard icon={AlertCircle} label="Open Tickets" value={open} accent="bg-status-open/10 text-status-open" />
      <SummaryCard icon={Clock} label="Avg. Response Time" value={`${avgResponse.toFixed(1)}h`} accent="bg-status-pending/10 text-status-pending" />
      <SummaryCard icon={CheckCircle2} label="Resolved Today" value={resolvedToday} accent="bg-status-resolved/10 text-status-resolved" />
    </div>
  )
}

export default SummaryCards
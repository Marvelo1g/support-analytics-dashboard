import { useTickets } from '../hooks/useTickets'
import SummaryCards from '../components/SummaryCards'
import StatusChart from '../components/StatusChart'
import TimeChart from '../components/TimeChart'
import ResponseTimeChart from '../components/ResponseTimeChart'
import TicketList from '../components/TicketList'
import { RefreshCw, AlertTriangle } from 'lucide-react'

function SkeletonBlock({ className }) {
  return <div className={`animate-pulse bg-slate-200 rounded-xl ${className}`} />
}

function DashboardSkeleton() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {[1, 2, 3, 4].map((i) => (
          <SkeletonBlock key={i} className="h-20" />
        ))}
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <SkeletonBlock className="h-72" />
        <SkeletonBlock className="h-72" />
      </div>
      <SkeletonBlock className="h-72" />
      <SkeletonBlock className="h-60" />
    </div>
  )
}

function Dashboard() {
  const { tickets, loading, error, refetch } = useTickets()

  if (loading) {
    return <DashboardSkeleton />
  }

  if (error) {
    return (
      <div className="bg-white rounded-xl border border-red-200 p-10 text-center space-y-3">
        <AlertTriangle className="mx-auto text-red-400" size={32} />
        <p className="text-red-500 font-medium">Could not load tickets</p>
        <p className="text-sm text-slate-500">{error}. Is json-server running on port 3001?</p>
        <button
          onClick={refetch}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-accent text-white text-sm font-medium hover:bg-accent/90 transition-colors"
        >
          <RefreshCw size={14} />
          Try Again
        </button>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <SummaryCards tickets={tickets} />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <StatusChart tickets={tickets} />
        <TimeChart tickets={tickets} />
      </div>
      <ResponseTimeChart tickets={tickets} />
      <TicketList tickets={tickets} />
    </div>
  )
}

export default Dashboard
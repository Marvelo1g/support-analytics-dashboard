import { useTickets } from '../hooks/useTickets'
import SummaryCards from '../components/SummaryCards'
import TicketList from '../components/TicketList'

function Dashboard() {
  const { tickets, loading, error } = useTickets()

  if (loading) {
    return (
      <div className="bg-white rounded-xl border border-slate-200 p-8 text-slate-400 text-center">
        Loading dashboard...
      </div>
    )
  }

  if (error) {
    return (
      <div className="bg-white rounded-xl border border-red-200 p-8 text-red-500 text-center">
        Could not load tickets: {error}. Is json-server running on port 3001?
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <SummaryCards tickets={tickets} />
      <TicketList tickets={tickets} />
    </div>
  )
}

export default Dashboard

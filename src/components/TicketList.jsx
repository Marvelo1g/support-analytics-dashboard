import { useTickets } from '../hooks/useTickets'

const statusStyles = {
  open: 'bg-status-open/10 text-status-open',
  pending: 'bg-status-pending/10 text-status-pending',
  resolved: 'bg-status-resolved/10 text-status-resolved',
  closed: 'bg-slate-200 text-slate-600',
}

function formatDate(isoString) {
  return new Date(isoString).toLocaleDateString('en-US', {
    month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit',
  })
}

function TicketList() {
  const { tickets, loading, error } = useTickets()

  if (loading) {
    return (
      <div className="bg-white rounded-xl border border-slate-200 p-8 text-slate-400 text-center">
        Loading tickets...
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
    <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
      <table className="w-full text-left">
        <thead className="bg-slate-50 border-b border-slate-200">
          <tr>
            <th className="px-6 py-3 text-xs font-medium text-slate-500 uppercase">Customer</th>
            <th className="px-6 py-3 text-xs font-medium text-slate-500 uppercase">Subject</th>
            <th className="px-6 py-3 text-xs font-medium text-slate-500 uppercase">Status</th>
            <th className="px-6 py-3 text-xs font-medium text-slate-500 uppercase">Created</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100">
          {tickets.map((ticket) => (
            <tr key={ticket.id} className="hover:bg-slate-50">
              <td className="px-6 py-4 text-sm text-slate-800">{ticket.customer}</td>
              <td className="px-6 py-4 text-sm text-slate-600">{ticket.subject}</td>
              <td className="px-6 py-4">
                <span className={`px-2.5 py-1 rounded-full text-xs font-medium capitalize ${statusStyles[ticket.status]}`}>
                  {ticket.status}
                </span>
              </td>
              <td className="px-6 py-4 text-sm text-slate-500 font-mono">{formatDate(ticket.created_at)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default TicketList
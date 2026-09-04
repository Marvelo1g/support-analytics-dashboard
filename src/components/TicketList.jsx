import { useState } from 'react'
import { Search } from 'lucide-react'
import { useTickets } from '../hooks/useTickets'

const statusStyles = {
  open: 'bg-status-open/10 text-status-open',
  pending: 'bg-status-pending/10 text-status-pending',
  resolved: 'bg-status-resolved/10 text-status-resolved',
  closed: 'bg-slate-200 text-slate-600',
}

const statusFilters = ['all', 'open', 'pending', 'resolved', 'closed']

function formatDate(isoString) {
  return new Date(isoString).toLocaleDateString('en-US', {
    month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit',
  })
}

function TicketList() {
  const { tickets, loading, error } = useTickets()
  const [searchTerm, setSearchTerm] = useState('')
  const [statusFilter, setStatusFilter] = useState('all')

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

  const filteredTickets = tickets.filter((ticket) => {
    const matchesStatus = statusFilter === 'all' || ticket.status === statusFilter
    const search = searchTerm.toLowerCase()
    const matchesSearch =
      ticket.customer.toLowerCase().includes(search) ||
      ticket.subject.toLowerCase().includes(search)
    return matchesStatus && matchesSearch
  })

  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
        <div className="relative w-full sm:w-72">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            placeholder="Search customer or subject..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-9 pr-3 py-2 text-sm rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent"
          />
        </div>
        <div className="flex gap-2 flex-wrap">
          {statusFilters.map((status) => (
            <button
              key={status}
              onClick={() => setStatusFilter(status)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium capitalize transition-colors ${
                statusFilter === status
                  ? 'bg-accent text-white'
                  : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
              }`}
            >
              {status}
            </button>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
        {filteredTickets.length === 0 ? (
          <div className="p-8 text-center text-slate-400 text-sm">
            No tickets match your search or filter.
          </div>
        ) : (
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
              {filteredTickets.map((ticket) => (
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
        )}
      </div>
    </div>
  )
}

export default TicketList
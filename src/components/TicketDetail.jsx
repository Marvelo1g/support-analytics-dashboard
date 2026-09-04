import { X } from 'lucide-react'

const statusStyles = {
  open: 'bg-status-open/10 text-status-open',
  pending: 'bg-status-pending/10 text-status-pending',
  resolved: 'bg-status-resolved/10 text-status-resolved',
  closed: 'bg-slate-200 text-slate-600',
}

function formatDateTime(isoString) {
  if (!isoString) return '—'
  return new Date(isoString).toLocaleString('en-US', {
    month: 'short', day: 'numeric', year: 'numeric', hour: '2-digit', minute: '2-digit',
  })
}

function TicketDetail({ ticket, onClose }) {
  if (!ticket) return null

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />
      <div className="relative w-full max-w-md bg-white h-full shadow-xl overflow-y-auto">
        <div className="sticky top-0 bg-white border-b border-slate-200 px-6 py-4 flex items-start justify-between">
          <div>
            <h3 className="text-lg font-semibold text-slate-800">{ticket.subject}</h3>
            <p className="text-sm text-slate-500">{ticket.customer}</p>
          </div>
          <button onClick={onClose} className="text-slate-400 hover:text-slate-600">
            <X size={20} />
          </button>
        </div>

        <div className="px-6 py-4 border-b border-slate-100 space-y-2">
          <div className="flex items-center justify-between text-sm">
            <span className="text-slate-500">Status</span>
            <span className={`px-2.5 py-1 rounded-full text-xs font-medium capitalize ${statusStyles[ticket.status]}`}>
              {ticket.status}
            </span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-slate-500">Created</span>
            <span className="font-mono text-slate-700">{formatDateTime(ticket.created_at)}</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-slate-500">First response</span>
            <span className="font-mono text-slate-700">{formatDateTime(ticket.first_response_at)}</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-slate-500">Resolved</span>
            <span className="font-mono text-slate-700">{formatDateTime(ticket.resolved_at)}</span>
          </div>
        </div>

        <div className="px-6 py-4 space-y-3">
          <h4 className="text-xs font-medium text-slate-500 uppercase">Conversation</h4>
          {ticket.messages.map((msg, i) => (
            <div
              key={i}
              className={`max-w-[85%] rounded-lg px-4 py-2.5 text-sm ${
                msg.sender === 'agent'
                  ? 'bg-accent/10 text-slate-800 ml-auto'
                  : 'bg-slate-100 text-slate-800'
              }`}
            >
              <p>{msg.text}</p>
              <p className="text-xs text-slate-400 font-mono mt-1">{formatDateTime(msg.timestamp)}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default TicketDetail
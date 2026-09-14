import { LayoutDashboard, Ticket, Settings, X } from 'lucide-react'

function Sidebar({ isOpen, onClose }) {
  const navItems = [
    { icon: LayoutDashboard, label: 'Dashboard', active: true, enabled: true },
    { icon: Ticket, label: 'Tickets', active: false, enabled: false },
    { icon: Settings, label: 'Settings', active: false, enabled: false },
  ]

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      <aside
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-ink text-white flex flex-col transform transition-transform duration-200 ease-in-out
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}
          lg:translate-x-0 lg:static lg:z-auto`}
      >
        <div className="p-6 border-b border-slate-800 flex items-center justify-between">
          <div>
            <h1 className="text-xl font-bold">SupportDesk</h1>
            <p className="text-sm text-slate-400">Analytics Dashboard</p>
          </div>
          <button onClick={onClose} className="text-slate-400 hover:text-white lg:hidden">
            <X size={20} />
          </button>
        </div>
        <nav className="flex-1 p-4 space-y-1">
          {navItems.map((item) => {
            const Icon = item.icon
            if (!item.enabled) {
              return (
                <div
                  key={item.label}
                  className="flex items-center justify-between px-4 py-2.5 rounded-lg text-slate-500 cursor-not-allowed"
                  title="Coming soon"
                >
                  <div className="flex items-center gap-3">
                    <Icon size={18} />
                    <span className="text-sm font-medium">{item.label}</span>
                  </div>
                  <span className="text-[10px] uppercase tracking-wide bg-slate-800 text-slate-400 px-1.5 py-0.5 rounded">
                    Soon
                  </span>
                </div>
              )
            }
            return (
              
                <a key={item.label}
                 href="#"
                  className="flex items-center gap-3 px-4 py-2.5 rounded-lg transition-colors bg-accent text-white"
                >
                  <Icon size={18} />
                  <span className="text-sm font-medium">{item.label}</span>
                </a>
            )
          })}
        </nav>
      </aside>
    </>
  )
}

export default Sidebar
import { LayoutDashboard, Ticket, Settings } from 'lucide-react'

function Sidebar() {
  const navItems = [
    { icon: LayoutDashboard, label: 'Dashboard', active: true },
    { icon: Ticket, label: 'Tickets', active: false },
    { icon: Settings, label: 'Settings', active: false },
  ]

  return (
        <aside className="w-64 bg-ink text-white flex flex-col min-h-screen">
      <div className="p-6 border-b border-slate-800">
        <h1 className="text-xl font-bold">SupportDesk</h1>
        <p className="text-sm text-slate-400">Analytics Dashboard</p>
      </div>
      <nav className="flex-1 p-4 space-y-1">
        {navItems.map((item) => {
          const Icon = item.icon
          return (
            
            <a key={item.label}
              href="#"
              className={
                item.active
               ? 'flex items-center gap-3 px-4 py-2.5 rounded-lg transition-colors bg-accent text-white'
                  : 'flex items-center gap-3 px-4 py-2.5 rounded-lg transition-colors text-slate-300 hover:bg-slate-800'
              }
            >
              <Icon size={18} />
              <span className="text-sm font-medium">{item.label}</span>
            </a>
         
        )
        })}
      </nav>
    </aside>
  )
}

export default Sidebar
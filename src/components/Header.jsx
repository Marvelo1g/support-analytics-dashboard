import { Menu } from 'lucide-react'

function Header({ onMenuClick }) {
  const today = new Date().toLocaleDateString('en-US', {
    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
  })

  return (
    <header className="bg-white border-b border-slate-200 px-4 sm:px-8 py-4 sm:py-5 flex items-center gap-3">
      <button onClick={onMenuClick} className="text-slate-500 hover:text-slate-700 lg:hidden">
        <Menu size={22} />
      </button>
      <div>
        <h2 className="text-xl sm:text-2xl font-bold text-slate-800">Dashboard</h2>
        <p className="text-xs sm:text-sm text-slate-500 font-mono">{today}</p>
      </div>
    </header>
  )
}

export default Header
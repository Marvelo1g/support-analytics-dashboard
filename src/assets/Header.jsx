function Header() {
  const today = new Date().toLocaleDateString('en-US', {
    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
  })

  return (
    <header className="bg-white border-b border-slate-200 px-8 py-5 flex items-center justify-between">
      <div>
        <h2 className="text-2xl font-bold text-slate-800">Dashboard</h2>
        <p className="text-sm text-slate-500">{today}</p>
      </div>
    </header>
  )
}

export default Header
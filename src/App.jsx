import Sidebar from './components/Sidebar'
import Header from './components/Header'

function App() {
  return (
    <div className="flex min-h-screen bg-slate-50">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="flex-1 p-8">
          <div className="bg-white rounded-xl border border-slate-200 p-8 text-slate-400 text-center">
            Ticket list will go here (Day 4)
          </div>
        </main>
      </div>
    </div>
  )
}

export default App
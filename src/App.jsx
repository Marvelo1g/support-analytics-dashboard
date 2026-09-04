import Sidebar from './components/Sidebar'
import Header from './components/Header'
import TicketList from './components/TicketList'

function App() {
  return (
    <div className="flex min-h-screen bg-slate-50">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="flex-1 p-8">
          <TicketList />
        </main>
      </div>
    </div>
  )
}

export default App
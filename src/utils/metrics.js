export function getTotalTickets(tickets) {
  return tickets.length
}

export function getOpenCount(tickets) {
  return tickets.filter((t) => t.status === 'open').length
}

export function getAverageResponseHours(tickets) {
  const withResponse = tickets.filter((t) => t.first_response_at)
  if (withResponse.length === 0) return 0
  const totalHours = withResponse.reduce((sum, t) => {
    const created = new Date(t.created_at)
    const responded = new Date(t.first_response_at)
    return sum + (responded - created) / (1000 * 60 * 60)
  }, 0)
  return totalHours / withResponse.length
}

export function getResolvedTodayCount(tickets) {
  const today = new Date()
  return tickets.filter((t) => {
    if (!t.resolved_at) return false
    const resolvedDate = new Date(t.resolved_at)
    return (
      resolvedDate.getFullYear() === today.getFullYear() &&
      resolvedDate.getMonth() === today.getMonth() &&
      resolvedDate.getDate() === today.getDate()
    )
  }).length
}



export function getStatusBreakdown(tickets) {
  const counts = { open: 0, pending: 0, resolved: 0, closed: 0 }
  tickets.forEach((t) => {
    if (counts[t.status] !== undefined) counts[t.status]++
  })
  return [
    { name: 'Open', value: counts.open, color: '#EF4444' },
    { name: 'Pending', value: counts.pending, color: '#F59E0B' },
    { name: 'Resolved', value: counts.resolved, color: '#14B8A6' },
    { name: 'Closed', value: counts.closed, color: '#94A3B8' },
  ]
}



export function getResponseTimeTrend(tickets) {
  const grouped = {}
  tickets.forEach((t) => {
    if (!t.first_response_at) return
    const key = new Date(t.created_at).toISOString().split('T')[0]
    const hours = (new Date(t.first_response_at) - new Date(t.created_at)) / (1000 * 60 * 60)
    if (!grouped[key]) grouped[key] = []
    grouped[key].push(hours)
  })
  return Object.entries(grouped)
    .map(([date, hoursArray]) => ({
      date,
      avgHours: hoursArray.reduce((a, b) => a + b, 0) / hoursArray.length,
    }))
    .sort((a, b) => new Date(a.date) - new Date(b.date))
}


export function getTicketsOverTime(tickets) {
  const counts = {}
  tickets.forEach((t) => {
    const date = new Date(t.created_at)
    const key = date.toISOString().split('T')[0]
    counts[key] = (counts[key] || 0) + 1
  })
  return Object.entries(counts)
    .map(([date, count]) => ({ date, count }))
    .sort((a, b) => new Date(a.date) - new Date(b.date))
}
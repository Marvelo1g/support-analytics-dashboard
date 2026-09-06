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
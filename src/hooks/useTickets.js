import { useState, useEffect, useCallback } from 'react'

const API_URL = 'http://localhost:3001/tickets'

export function useTickets() {
  const [tickets, setTickets] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const fetchTickets = useCallback(() => {
    setLoading(true)
    setError(null)
    fetch(API_URL)
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch tickets')
        return res.json()
      })
      .then((data) => {
        setTickets(data)
        setLoading(false)
      })
      .catch((err) => {
        setError(err.message)
        setLoading(false)
      })
  }, [])

  useEffect(() => {
    fetchTickets()
  }, [fetchTickets])

  return { tickets, loading, error, refetch: fetchTickets }
}
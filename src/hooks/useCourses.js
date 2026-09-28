import { useEffect, useState } from 'react'
import { getCourses } from '@/services/courseService'

/** Active/inactive courses from the backend Course API, for the public site. */
export function useCourses() {
  const [courses, setCourses] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    let cancelled = false

    const fetchCourses = async () => {
      try {
        setLoading(true)
        setError('')

        const response = await getCourses()
        const data = Array.isArray(response) ? response : response?.data || []

        if (!cancelled) setCourses(data)
      } catch (err) {
        if (!cancelled) setError(err.response?.data?.message || 'Failed to load courses.')
      } finally {
        if (!cancelled) setLoading(false)
      }
    }

    fetchCourses()

    return () => {
      cancelled = true
    }
  }, [])

  return { courses, loading, error }
}

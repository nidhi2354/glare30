import { useState } from 'react'
import PageHeader from '@/components/dashboard/ui/PageHeader'
import Panel from '@/components/dashboard/ui/Panel'
import Button from '@/components/ui/Button'
import { useSeo } from '@/hooks/useSeo'
import { registerAdmin } from '@/services/authService'

const inputClass =
  'w-full h-12 rounded-xl border border-navy-100 bg-white px-4 text-sm text-navy-800 placeholder:text-navy-300 focus:border-navy-400 focus:outline-none focus:ring-1 focus:ring-navy-400'

export default function AddAdmin() {
  useSeo({ title: 'Add Admin · Admin' })

  const [form, setForm] = useState({ name: '', email: '', password: '' })
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  const update = (key, value) => setForm((f) => ({ ...f, [key]: value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setSuccess('')
    setSubmitting(true)

    try {
      await registerAdmin(form)
      setSuccess(`${form.name} can now sign in with the email and password you set.`)
      setForm({ name: '', email: '', password: '' })
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to create admin.')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div className="flex flex-col gap-6">
      <PageHeader
        title="Add Admin"
        description="Create another admin account for this dashboard. Only signed-in admins can do this."
      />

      <Panel className="max-w-lg">
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          {error && (
            <p className="rounded-xl bg-red-50 px-3.5 py-2.5 text-sm font-semibold text-red-600">{error}</p>
          )}

          {success && (
            <p className="rounded-xl bg-leaf-50 px-3.5 py-2.5 text-sm font-semibold text-leaf-700">{success}</p>
          )}

          <label className="flex flex-col gap-1.5">
            <span className="text-xs font-semibold text-navy-600">Full Name</span>
            <input
              className={inputClass}
              value={form.name}
              onChange={(e) => update('name', e.target.value)}
              placeholder="Admin's full name"
              required
            />
          </label>

          <label className="flex flex-col gap-1.5">
            <span className="text-xs font-semibold text-navy-600">Email Address</span>
            <input
              type="email"
              className={inputClass}
              value={form.email}
              onChange={(e) => update('email', e.target.value)}
              placeholder="admin@example.com"
              required
            />
          </label>

          <label className="flex flex-col gap-1.5">
            <span className="text-xs font-semibold text-navy-600">Password</span>
            <input
              type="password"
              className={inputClass}
              value={form.password}
              onChange={(e) => update('password', e.target.value)}
              placeholder="At least 6 characters"
              minLength={6}
              required
            />
          </label>

          <Button type="submit" variant="navy" size="md" disabled={submitting} className="mt-1 w-fit">
            {submitting ? 'Creating…' : 'Create Admin Account'}
          </Button>
        </form>
      </Panel>
    </div>
  )
}

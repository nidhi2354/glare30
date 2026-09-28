import { useState } from 'react'
import Icon from '@/components/ui/Icon'
import Button from '@/components/ui/Button'

const EMPTY_COURSE = {
  id: '',
  classes: '',
  title: '',
  summary: '',
  note: '',
  accent: '',
  icon: '',
  featured: false,
  isActive: true,
  subjects: '',
  highlights: '',
  overview: '',
  outcome: '',
  covers: [],
  streams: [],
}

const inputClass =
  'w-full rounded-xl border border-navy-100 bg-white px-3.5 py-2.5 text-sm text-navy-800 placeholder:text-navy-300 focus:border-navy-400 focus:outline-none focus:ring-1 focus:ring-navy-400'

function Field({ label, required, children }) {
  return (
    <label className="flex flex-col gap-1.5">
      <span className="text-xs font-semibold text-navy-600">
        {label}
        {required && <span className="text-red-500"> *</span>}
      </span>
      {children}
    </label>
  )
}

/** A course fetched from the API → the flat shape this form edits. */
function toFormState(course) {
  if (!course) return EMPTY_COURSE

  return {
    id: course.id ?? '',
    classes: course.classes ?? '',
    title: course.title ?? '',
    summary: course.summary ?? '',
    note: course.note ?? '',
    accent: course.accent ?? '',
    icon: course.icon ?? '',
    featured: Boolean(course.featured),
    isActive: course.isActive ?? true,
    subjects: (course.subjects ?? []).join(', '),
    highlights: (course.highlights ?? []).join('\n'),
    overview: course.detail?.overview ?? '',
    outcome: course.detail?.outcome ?? '',
    covers: course.detail?.covers ?? [],
    streams: course.streams ?? [],
  }
}

/** This form's flat shape → the payload the Course API expects. */
function toPayload(form) {
  return {
    id: form.id.trim(),
    classes: form.classes.trim(),
    title: form.title.trim(),
    summary: form.summary.trim(),
    note: form.note.trim(),
    accent: form.accent.trim(),
    icon: form.icon.trim(),
    featured: form.featured,
    isActive: form.isActive,
    subjects: form.subjects
      .split(',')
      .map((s) => s.trim())
      .filter(Boolean),
    highlights: form.highlights
      .split('\n')
      .map((s) => s.trim())
      .filter(Boolean),
    detail: {
      overview: form.overview.trim(),
      outcome: form.outcome.trim(),
      covers: form.covers.filter((c) => c.title.trim() || c.description.trim()),
    },
    streams: form.streams.filter((s) => s.code.trim() || s.for.trim()),
  }
}

/**
 * Add / edit form for a Course, in a modal overlay.
 * `course` — pass an existing course to edit, or omit to create a new one.
 */
export default function CourseFormModal({ course, onClose, onSave }) {
  const [form, setForm] = useState(() => toFormState(course))
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState('')

  const isEditing = Boolean(course)

  const update = (key, value) => setForm((f) => ({ ...f, [key]: value }))

  const updateCover = (index, key, value) =>
    setForm((f) => ({
      ...f,
      covers: f.covers.map((c, i) => (i === index ? { ...c, [key]: value } : c)),
    }))

  const addCover = () =>
    setForm((f) => ({ ...f, covers: [...f.covers, { title: '', description: '' }] }))

  const removeCover = (index) =>
    setForm((f) => ({ ...f, covers: f.covers.filter((_, i) => i !== index) }))

  const updateStream = (index, key, value) =>
    setForm((f) => ({
      ...f,
      streams: f.streams.map((s, i) => (i === index ? { ...s, [key]: value } : s)),
    }))

  const addStream = () =>
    setForm((f) => ({ ...f, streams: [...f.streams, { code: '', for: '', icon: '' }] }))

  const removeStream = (index) =>
    setForm((f) => ({ ...f, streams: f.streams.filter((_, i) => i !== index) }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setSaving(true)

    try {
      await onSave(toPayload(form))
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to save course.')
    } finally {
      setSaving(false)
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-navy-900/50 p-4">
      <div className="flex max-h-[90vh] w-full max-w-2xl flex-col overflow-hidden rounded-2xl bg-white shadow-card">
        <header className="flex shrink-0 items-center justify-between border-b border-navy-50 px-5 py-4 sm:px-6">
          <h2 className="text-base font-bold text-navy-800">
            {isEditing ? 'Edit Course' : 'Add Course'}
          </h2>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="rounded-full p-1.5 text-navy-400 hover:bg-navy-50 hover:text-navy-700"
          >
            <Icon name="close" className="size-5" />
          </button>
        </header>

        <form onSubmit={handleSubmit} className="flex flex-1 flex-col overflow-hidden">
          <div className="flex-1 space-y-5 overflow-y-auto px-5 py-5 sm:px-6">
            {error && (
              <p className="rounded-xl bg-red-50 px-3.5 py-2.5 text-sm font-semibold text-red-600">
                {error}
              </p>
            )}

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <Field label="Course ID (slug)" required>
                <input
                  className={inputClass}
                  value={form.id}
                  onChange={(e) => update('id', e.target.value)}
                  placeholder="foundation"
                  disabled={isEditing}
                  required
                />
              </Field>

              <Field label="Classes" required>
                <input
                  className={inputClass}
                  value={form.classes}
                  onChange={(e) => update('classes', e.target.value)}
                  placeholder="Class 6th – 8th"
                  required
                />
              </Field>
            </div>

            <Field label="Title" required>
              <input
                className={inputClass}
                value={form.title}
                onChange={(e) => update('title', e.target.value)}
                placeholder="Foundation Program"
                required
              />
            </Field>

            <Field label="Summary" required>
              <textarea
                className={inputClass}
                rows={2}
                value={form.summary}
                onChange={(e) => update('summary', e.target.value)}
                required
              />
            </Field>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <Field label="Subjects (comma separated)">
                <input
                  className={inputClass}
                  value={form.subjects}
                  onChange={(e) => update('subjects', e.target.value)}
                  placeholder="Mathematics, Science, English"
                />
              </Field>

              <Field label="Accent">
                <input
                  className={inputClass}
                  value={form.accent}
                  onChange={(e) => update('accent', e.target.value)}
                  placeholder="leaf / navy / gold"
                />
              </Field>
            </div>

            <Field label="Highlights (one per line)">
              <textarea
                className={inputClass}
                rows={3}
                value={form.highlights}
                onChange={(e) => update('highlights', e.target.value)}
              />
            </Field>

            <Field label="Note">
              <input
                className={inputClass}
                value={form.note}
                onChange={(e) => update('note', e.target.value)}
              />
            </Field>

            <Field label="Overview" required>
              <textarea
                className={inputClass}
                rows={3}
                value={form.overview}
                onChange={(e) => update('overview', e.target.value)}
                required
              />
            </Field>

            <Field label="Outcome">
              <textarea
                className={inputClass}
                rows={2}
                value={form.outcome}
                onChange={(e) => update('outcome', e.target.value)}
              />
            </Field>

            <div>
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-navy-600">What's Covered</span>
                <button
                  type="button"
                  onClick={addCover}
                  className="text-xs font-semibold text-navy-500 hover:text-navy-800"
                >
                  + Add row
                </button>
              </div>

              <div className="mt-2 flex flex-col gap-2">
                {form.covers.map((cover, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <div className="grid flex-1 grid-cols-1 gap-2 sm:grid-cols-2">
                      <input
                        className={inputClass}
                        value={cover.title}
                        onChange={(e) => updateCover(i, 'title', e.target.value)}
                        placeholder="Title"
                      />
                      <input
                        className={inputClass}
                        value={cover.description}
                        onChange={(e) => updateCover(i, 'description', e.target.value)}
                        placeholder="Description"
                      />
                    </div>
                    <button
                      type="button"
                      onClick={() => removeCover(i)}
                      aria-label="Remove row"
                      className="mt-1 shrink-0 rounded-full p-1.5 text-navy-300 hover:bg-navy-50 hover:text-red-500"
                    >
                      <Icon name="close" className="size-4" />
                    </button>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-navy-600">Streams</span>
                <button
                  type="button"
                  onClick={addStream}
                  className="text-xs font-semibold text-navy-500 hover:text-navy-800"
                >
                  + Add row
                </button>
              </div>

              <div className="mt-2 flex flex-col gap-2">
                {form.streams.map((stream, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <div className="grid flex-1 grid-cols-1 gap-2 sm:grid-cols-3">
                      <input
                        className={inputClass}
                        value={stream.code}
                        onChange={(e) => updateStream(i, 'code', e.target.value)}
                        placeholder="PCM"
                      />
                      <input
                        className={inputClass}
                        value={stream.for}
                        onChange={(e) => updateStream(i, 'for', e.target.value)}
                        placeholder="IIT-JEE Preparation"
                      />
                      <input
                        className={inputClass}
                        value={stream.icon}
                        onChange={(e) => updateStream(i, 'icon', e.target.value)}
                        placeholder="calculator"
                      />
                    </div>
                    <button
                      type="button"
                      onClick={() => removeStream(i)}
                      aria-label="Remove row"
                      className="mt-1 shrink-0 rounded-full p-1.5 text-navy-300 hover:bg-navy-50 hover:text-red-500"
                    >
                      <Icon name="close" className="size-4" />
                    </button>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-5">
              <label className="flex items-center gap-2 text-sm font-semibold text-navy-700">
                <input
                  type="checkbox"
                  checked={form.featured}
                  onChange={(e) => update('featured', e.target.checked)}
                  className="size-4 rounded border-navy-200"
                />
                Featured
              </label>

              <label className="flex items-center gap-2 text-sm font-semibold text-navy-700">
                <input
                  type="checkbox"
                  checked={form.isActive}
                  onChange={(e) => update('isActive', e.target.checked)}
                  className="size-4 rounded border-navy-200"
                />
                Active
              </label>
            </div>
          </div>

          <footer className="flex shrink-0 justify-end gap-3 border-t border-navy-50 px-5 py-4 sm:px-6">
            <Button type="button" variant="outline" size="sm" onClick={onClose} disabled={saving}>
              Cancel
            </Button>
            <Button type="submit" variant="navy" size="sm" disabled={saving}>
              {saving ? 'Saving…' : isEditing ? 'Save Changes' : 'Add Course'}
            </Button>
          </footer>
        </form>
      </div>
    </div>
  )
}

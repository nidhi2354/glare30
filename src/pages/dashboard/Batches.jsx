import { useEffect, useMemo, useState } from 'react'
import Badge from '@/components/dashboard/ui/Badge'
import DataTable from '@/components/dashboard/ui/DataTable'
import PageHeader from '@/components/dashboard/ui/PageHeader'
import Panel from '@/components/dashboard/ui/Panel'
import Toolbar, { SearchInput } from '@/components/dashboard/ui/Toolbar'
import CourseFormModal from '@/components/admin/CourseFormModal'
import Button from '@/components/ui/Button'
import Icon from '@/components/ui/Icon'
import { useSeo } from '@/hooks/useSeo'
import { createCourse, deleteCourse, getCourses, updateCourse } from '@/services/courseService'

export default function Batches() {
  useSeo({ title: 'Batches · Admin' })

  const [rows, setRows] = useState([])
  const [query, setQuery] = useState('')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  const [modalCourse, setModalCourse] = useState(null)
  const [showModal, setShowModal] = useState(false)

  const fetchCourses = async () => {
    try {
      setLoading(true)
      setError('')

      const response = await getCourses()
      const courses = Array.isArray(response) ? response : response?.data || []

      setRows(courses)
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to load courses.')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchCourses()
  }, [])

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()

    if (!q) return rows

    return rows.filter((row) =>
      `${row.title || ''} ${row.classes || ''} ${(row.subjects || []).join(' ')}`
        .toLowerCase()
        .includes(q),
    )
  }, [rows, query])

  const openAddModal = () => {
    setModalCourse(null)
    setShowModal(true)
  }

  const openEditModal = (course) => {
    setModalCourse(course)
    setShowModal(true)
  }

  const closeModal = () => setShowModal(false)

  const handleSave = async (payload) => {
    if (modalCourse) {
      await updateCourse(modalCourse.id, payload)
    } else {
      await createCourse(payload)
    }

    setShowModal(false)
    await fetchCourses()
  }

  const handleDelete = async (course) => {
    if (!window.confirm(`Delete "${course.title}"? This can't be undone.`)) return

    try {
      await deleteCourse(course.id)
      setRows((prev) => prev.filter((r) => r.id !== course.id))
    } catch (err) {
      alert(err.response?.data?.message || 'Failed to delete course.')
    }
  }

  return (
    <div className="flex flex-col gap-6">
      <PageHeader
        title="Batches"
        description={`${rows.length} course${rows.length === 1 ? '' : 's'} configured`}
      >
        <Button size="sm" variant="navy" icon="plus" iconPosition="left" onClick={openAddModal}>
          Add Course
        </Button>
      </PageHeader>

      <Panel
        padded={false}
        title={`${filtered.length} ${filtered.length === 1 ? 'course' : 'courses'}`}
        subtitle="Courses served from the backend Course API."
      >
        <Toolbar className="border-b border-navy-50 px-5 py-4 sm:px-6">
          <SearchInput
            value={query}
            onChange={setQuery}
            placeholder="Search title, class or subject..."
          />
        </Toolbar>

        {loading ? (
          <div className="px-6 py-10 text-center text-sm text-navy-400">Loading courses...</div>
        ) : error ? (
          <div className="px-6 py-10 text-center">
            <p className="text-sm font-semibold text-red-600">{error}</p>
            <p className="mt-1 text-xs text-navy-400">Please refresh the page and try again.</p>
          </div>
        ) : (
          <DataTable
            caption="Course list"
            rows={filtered}
            empty={{
              title: 'No courses found',
              description: query ? 'Try a different search term.' : 'No courses have been added yet.',
            }}
            columns={[
              {
                key: 'title',
                header: 'Course',
                render: (row) => (
                  <div>
                    <p className="font-semibold text-navy-800">{row.title || '-'}</p>
                    <p className="text-xs text-navy-400">{row.id}</p>
                  </div>
                ),
              },
              {
                key: 'classes',
                header: 'Classes',
                render: (row) => row.classes || '-',
              },
              {
                key: 'subjects',
                header: 'Subjects',
                render: (row) => (
                  <span className="block max-w-xs truncate text-navy-600">
                    {(row.subjects || []).join(', ') || '-'}
                  </span>
                ),
              },
              {
                key: 'status',
                header: 'Status',
                render: (row) => (
                  <div className="flex flex-wrap gap-1.5">
                    <Badge tone={row.isActive ? 'good' : 'neutral'}>
                      {row.isActive ? 'Active' : 'Inactive'}
                    </Badge>
                    {row.featured && <Badge tone="warning">Featured</Badge>}
                  </div>
                ),
              },
              {
                key: 'actions',
                header: '',
                align: 'right',
                render: (row) => (
                  <div className="flex justify-end gap-1.5">
                    <button
                      type="button"
                      onClick={() => openEditModal(row)}
                      aria-label={`Edit ${row.title}`}
                      className="rounded-full p-2 text-navy-400 hover:bg-navy-50 hover:text-navy-700"
                    >
                      <Icon name="edit" className="size-4" />
                    </button>
                    <button
                      type="button"
                      onClick={() => handleDelete(row)}
                      aria-label={`Delete ${row.title}`}
                      className="rounded-full p-2 text-navy-400 hover:bg-red-50 hover:text-red-500"
                    >
                      <Icon name="trash" className="size-4" />
                    </button>
                  </div>
                ),
              },
            ]}
          />
        )}
      </Panel>

      {showModal && (
        <CourseFormModal course={modalCourse} onClose={closeModal} onSave={handleSave} />
      )}
    </div>
  )
}

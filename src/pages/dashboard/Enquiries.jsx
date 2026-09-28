
import { useEffect, useMemo, useState } from 'react'
import { deleteInquiry, getInquiries, updateInquiry } from '@/services/inquiryService'
import DataTable from '@/components/dashboard/ui/DataTable'
import Icon from '@/components/ui/Icon'
import PageHeader from '@/components/dashboard/ui/PageHeader'
import Panel from '@/components/dashboard/ui/Panel'
import Toolbar, { SearchInput } from '@/components/dashboard/ui/Toolbar'
import { STATUS_TONE, TONE_CLASSES } from '@/components/dashboard/ui/statusTone'
import { useSeo } from '@/hooks/useSeo'

const ENQUIRY_STATUSES = ['New', 'Contacted', 'Demo booked', 'Admitted', 'Closed']

export default function Enquiries() {
  useSeo({ title: 'Enquiries · Admin' })

  const [rows, setRows] = useState([])
  const [query, setQuery] = useState('')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [updatingId, setUpdatingId] = useState('')

  useEffect(() => {
    const fetchInquiries = async () => {
      try {
        setLoading(true)
        setError('')

        const response = await getInquiries()

        console.log('ENQUIRIES PAGE API RESPONSE:', response)

        // API response handling
        const inquiries = Array.isArray(response)
          ? response
          : response?.data || []

        setRows(inquiries)
      } catch (error) {
        console.error('ENQUIRIES PAGE API ERROR:', error)
        console.error('ERROR RESPONSE:', error.response?.data)

        setError(
          error.response?.data?.message ||
          'Failed to load enquiries.'
        )
      } finally {
        setLoading(false)
      }
    }

    fetchInquiries()
  }, [])

  const handleStatusChange = async (row, status) => {
    const previous = row.status

    setRows((prev) => prev.map((r) => (r._id === row._id ? { ...r, status } : r)))
    setUpdatingId(row._id)

    try {
      await updateInquiry(row._id, { status })
    } catch (err) {
      setRows((prev) => prev.map((r) => (r._id === row._id ? { ...r, status: previous } : r)))
      alert(err.response?.data?.message || 'Failed to update status.')
    } finally {
      setUpdatingId('')
    }
  }

  const handleDelete = async (row) => {
    if (!window.confirm(`Delete the enquiry from "${row.name}"? This can't be undone.`)) return

    try {
      await deleteInquiry(row._id)
      setRows((prev) => prev.filter((r) => r._id !== row._id))
    } catch (err) {
      alert(err.response?.data?.message || 'Failed to delete enquiry.')
    }
  }

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()

    if (!q) return rows

    return rows.filter((row) =>
      `${row.name || ''} ${row.mobile || ''} ${row.classStream || ''} ${row.message || ''} `
        .toLowerCase()
        .includes(q)
    )
  }, [rows, query])

  return (
    <div className="flex flex-col gap-6">
      <PageHeader
        title="Enquiries"
        description="All enquiries submitted through the website form."
      />

      <Panel
        padded={false}
        title={`${filtered.length} ${filtered.length === 1 ? 'enquiry' : 'enquiries'
          } `}
        subtitle="Real enquiries received from the website."
      >
        <Toolbar className="border-b border-navy-50 px-5 py-4 sm:px-6">
          <SearchInput
            value={query}
            onChange={setQuery}
            placeholder="Search name, phone or class..."
          />
        </Toolbar>

        {loading ? (
          <div className="px-6 py-10 text-center text-sm text-navy-400">
            Loading enquiries...
          </div>
        ) : error ? (
          <div className="px-6 py-10 text-center">
            <p className="text-sm font-semibold text-red-600">
              {error}
            </p>
            <p className="mt-1 text-xs text-navy-400">
              Please refresh the page and try again.
            </p>
          </div>
        ) : (
          <DataTable
            caption="Website enquiry list"
            rows={filtered}
            getRowKey={(r) => r._id}
            empty={{
              title: 'No enquiries found',
              description:
                query
                  ? 'Try a different search term.'
                  : 'No enquiries have been submitted yet.',
            }}
            columns={[
              {
                key: 'name',
                header: 'Student / Parent',
                render: (row) => (
                  <span className="font-semibold text-navy-800">
                    {row.name || '-'}
                  </span>
                ),
              },

              {
                key: 'mobile',
                header: 'Mobile',
                cellClassName: 'tabular-nums',
                render: (row) => row.mobile || '-',
              },

              {
                key: 'classStream',
                header: 'Class / Stream',
                render: (row) => row.classStream || '-',
              },

              {
                key: 'message',
                header: 'Message',
                render: (row) => (
                  <span className="block max-w-xs truncate text-navy-600">
                    {row.message || '-'}
                  </span>
                ),
              },

              {
                key: 'createdAt',
                header: 'Received',
                cellClassName: 'whitespace-nowrap',
                render: (row) =>
                  row.createdAt
                    ? new Date(row.createdAt).toLocaleDateString(
                      'en-IN',
                      {
                        day: '2-digit',
                        month: 'short',
                        year: 'numeric',
                      }
                    )
                    : '-',
              },

              {
                key: 'status',
                header: 'Status',
                render: (row) => {
                  const tone = STATUS_TONE[row.status] ?? 'neutral'
                  return (
                    <select
                      value={row.status || 'New'}
                      disabled={updatingId === row._id}
                      onChange={(e) => handleStatusChange(row, e.target.value)}
                      className={`h-8 rounded-full border-0 px-2.5 text-xs font-semibold ring-1 ring-inset focus:outline-none disabled:opacity-60 ${TONE_CLASSES[tone] ?? TONE_CLASSES.neutral
                        }`}
                    >
                      {ENQUIRY_STATUSES.map((status) => (
                        <option key={status} value={status}>
                          {status}
                        </option>
                      ))}
                    </select>
                  )
                },
              },

              {
                key: 'actions',
                header: '',
                align: 'right',
                render: (row) => (
                  <button
                    type="button"
                    onClick={() => handleDelete(row)}
                    aria-label={`Delete enquiry from ${row.name}`}
                    className="rounded-full p-2 text-navy-400 hover:bg-red-50 hover:text-red-500"
                  >
                    <Icon name="trash" className="size-4" />
                  </button>
                ),
              },
            ]}
          />
        )}
      </Panel>
    </div>
  )
}


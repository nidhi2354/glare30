
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import { getInquiries } from '@/services/inquiryService'

import Icon from '@/components/ui/Icon'
import DataTable from '@/components/dashboard/ui/DataTable'
import PageHeader from '@/components/dashboard/ui/PageHeader'
import Panel from '@/components/dashboard/ui/Panel'

import { useSeo } from '@/hooks/useSeo'

import { dashboardMeta } from '@/data/dashboard'

function ViewAll({ to, children }) {
  return (
    <Link
      to={to}
      className="inline-flex items-center gap-1.5 text-sm font-semibold text-navy-600 hover:text-navy-800"
    >
      {children}
      <Icon name="arrowRight" className="size-4" />
    </Link>
  )
}

export default function Overview() {
  const [recentInquiries, setRecentInquiries] = useState([])
  const [loadingInquiries, setLoadingInquiries] = useState(true)

  useSeo({ title: 'Admin Dashboard' })

  useEffect(() => {
    const fetchInquiries = async () => {
      try {
        const response = await getInquiries()

        const inquiries = Array.isArray(response)
          ? response
          : response?.data || []

        setRecentInquiries(inquiries)
      } catch (error) {
        console.error('Failed to fetch inquiries:', error)
        setRecentInquiries([])
      } finally {
        setLoadingInquiries(false)
      }
    }

    fetchInquiries()
  }, [])

  return (
    <div className="flex flex-col gap-6">

      {/* =========================
          PAGE HEADER
      ========================= */}
      <PageHeader
        title="Overview"
        description={`Academic session ${dashboardMeta.session} · updated ${dashboardMeta.updatedAt} `}
      >
        <ViewAll to="/admin/enquiries">
          Go to enquiries
        </ViewAll>
      </PageHeader>

      {/* =========================
          RECENT REAL ENQUIRIES
      ========================= */}
      <Panel
        title="Recent enquiries"
        subtitle="Latest enquiries from the website"
        padded={false}
        action={
          <ViewAll to="/admin/enquiries">
            View all
          </ViewAll>
        }
      >
        {loadingInquiries ? (
          <div className="px-6 py-8 text-center text-sm text-navy-400">
            Loading enquiries...
          </div>
        ) : recentInquiries.length === 0 ? (
          <div className="px-6 py-8 text-center text-sm text-navy-400">
            No enquiries found.
          </div>
        ) : (
          <DataTable
            caption="The six most recent enquiries"
            rows={recentInquiries.slice(0, 6)}
            getRowKey={(r) => r._id}
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
                render: (row) =>
                  row.classStream || '-',
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
                    ? new Date(
                      row.createdAt
                    ).toLocaleDateString('en-IN', {
                      day: '2-digit',
                      month: 'short',
                      year: 'numeric',
                    })
                    : '-',
              },
            ]}
          />
        )}
      </Panel>
    </div>
  )
}

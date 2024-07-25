import React from 'react'
import DataTable from 'react-data-table-component'

const AssetsReactTable = () => {
    const columns = [
      {
        name: <span className="font-weight-bold fs-13">ASSET NAME</span>,
        selector: (row) => row.Address,
        sortable: true,
      },
      {
        name: <span className="font-weight-bold fs-13">ASSET TYPE</span>,
        selector: (row) => row.Website,
        sortable: true,
      },
      {
        name: <span className="font-weight-bold fs-13">OPERATING SYSTEM</span>,
        selector: (row) => row.Phone,
        sortable: true,
      },
      {
        name: <span className="font-weight-bold fs-13">DOMAIN</span>,
        selector: (row) => row.Phone,
        sortable: true,
      },
      {
        name: <span className="font-weight-bold fs-13">MANUFACTURER</span>,
        selector: (row) => row.Phone,
        sortable: true,
      },
      {
        name: <span className="font-weight-bold fs-13">MODEL</span>,
        selector: (row) => row.Phone,
        sortable: true,
      },
      {
        name: <span className="font-weight-bold fs-13">SERIAL NUMBER</span>,
        selector: (row) => row.Phone,
        sortable: true,
      },
      {
        name: <span className="font-weight-bold fs-13">BACKUP REQUIRED</span>,
        selector: (row) => row.Phone,
        sortable: true,
      },
      {
        name: <span className="font-weight-bold fs-13">SITE NAME</span>,
        selector: (row) => row.Phone,
        sortable: true,
      },
    ];
  return (
   <><DataTable columns={columns} pagination/></>
  )
}

export default AssetsReactTable
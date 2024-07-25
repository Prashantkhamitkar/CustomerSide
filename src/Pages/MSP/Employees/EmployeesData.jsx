import React from 'react'
import DataTable from 'react-data-table-component'

const EmployeesData = () => {
  const columns = [
    {
      name: <span className="font-weight-bold fs-13">FIRST NAME</span>,
      selector: (row) => row.Address,
      sortable: true,
    },
    {
      name: <span className="font-weight-bold fs-13">LAST NAME</span>,
      selector: (row) => row.Website,
      sortable: true,
    },
    {
      name: <span className="font-weight-bold fs-13">EMAIL</span>,
      selector: (row) => row.Phone,
      sortable: true,
    },
    {
      name: <span className="font-weight-bold fs-13">PHONE</span>,
      selector: (row) => row.Phone,
      sortable: true,
    },
    {
      name: <span className="font-weight-bold fs-13">DEPARTMENT NAME</span>,
      selector: (row) => row.Phone,
      sortable: true,
    },
    {
      name: <span className="font-weight-bold fs-13">ADDITIONAL INFO</span>,
      selector: (row) => row.Phone,
      sortable: true,
    },
    {
      name: <span className="font-weight-bold fs-13">SITE</span>,
      selector: (row) => row.Phone,
      sortable: true,
    },
  ];
    return (
    <>
    <DataTable columns={columns} pagination/>
    </>
  )
}

export default EmployeesData
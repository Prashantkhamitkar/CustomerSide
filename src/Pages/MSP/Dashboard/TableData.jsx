import React from 'react'
import DataTable from 'react-data-table-component';

const TableData = ({data}) => {

     const columns = [
    

      
       {
         name: <span className="font-weight-bold fs-13">USERNAME</span>,
         selector: (row) => row.Address,
         sortable: true,
       },
       {
         name: <span className="font-weight-bold fs-13">OPEN TICKETS</span>,
         selector: (row) => row.Website,
         sortable: true,
       },
       {
         name: <span className="font-weight-bold fs-13">CLOSED TICKETS</span>,
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

export default TableData
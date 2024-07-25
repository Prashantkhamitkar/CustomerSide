import React from 'react'
import { Container } from 'reactstrap'
import Breadcrumbs from '../../../components/Common/Breadcrumb'
import EmployeesTable from './EmployeesTable';

const EmployeesIndex = () => {
  return (
    <>
      <div className="page-content">
        <Container fluid={true}>
          <Breadcrumbs title="" breadcrumbItem="Employees" />
          <EmployeesTable/>
        </Container>
      </div>
    </>
  );
}

export default EmployeesIndex
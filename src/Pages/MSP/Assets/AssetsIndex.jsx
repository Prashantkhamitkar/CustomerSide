import React from 'react'
import { Container } from 'reactstrap'
import Breadcrumbs from '../../../components/Common/Breadcrumb'
import AssetsTable from './AssetsTable';

const AssetsIndex = () => {
  return (
    <>
      <div className="page-content">
        <Container fluid={true}>
          <Breadcrumbs title="" breadcrumbItem="Assets" />
          <AssetsTable/>
        </Container>
      </div>
    </>
  );
}

export default AssetsIndex
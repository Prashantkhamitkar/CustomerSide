import React from 'react'
import { Container } from 'reactstrap'
import Breadcrumbs from '../../../../components/Common/Breadcrumb'

const CreateTicket = () => {
  return (
    <>
      <div className="page-content">
        <Container fluid={true}>
          <Breadcrumbs title="" breadcrumbItem="Create Ticket" />
        </Container>
      </div>
    </>
  );
}

export default CreateTicket
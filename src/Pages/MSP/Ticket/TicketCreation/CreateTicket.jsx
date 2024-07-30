import React from 'react'
import { Container } from 'reactstrap'
import Breadcrumbs from '../../../../components/Common/Breadcrumb'
import CreateTicketCard from './CreateTicketCard';

const CreateTicket = () => {
  return (
    <>
      <div className="page-content">
        <Container fluid={true}>
          <Breadcrumbs title="" breadcrumbItem="Ticket Creation" />
          <CreateTicketCard/>
        </Container>
      </div>
    </>
  );
}

export default CreateTicket
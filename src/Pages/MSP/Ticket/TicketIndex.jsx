import React from 'react'
import { Container } from 'reactstrap'
import Breadcrumbs from '../../../components/Common/Breadcrumb'
import TicketTable from './TicketTable';

const TicketIndex = () => {
  return (
    <>
      <div className="page-content">
        <Container fluid={true}>
          <Breadcrumbs title="" breadcrumbItem="Ticket"/>
          <TicketTable/>
        </Container>
      </div>
    </>
  );
}

export default TicketIndex
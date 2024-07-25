import React from "react";
import Breadcrumbs from "../../../components/Common/Breadcrumb";
import { Col, Container, Row } from "reactstrap";
import Incidents from "./Incidents";
import OpenTableByUser from "./OpenTableByUser";
import OpenTicketChart from "./OpenTicketChart";



const DashboardIndex = () => {
  return (
    <>
      <div className="page-content">
        <Container fluid={true}>
          <Breadcrumbs title="" breadcrumbItem="Dashboard" />
          <Incidents />
          <Row>
            <Col md={6}><OpenTableByUser/></Col>
            <Col md={6}><OpenTicketChart/></Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default DashboardIndex;

import React from 'react'

import { Card, CardBody, CardHeader, Col, Row } from 'reactstrap';
import BarChart from './BarChart';

const OpenTicketChart = () => {
  return (
    <>
      <Row>
        <Col lg={12}>
          <Card>
            <CardHeader>
              <h5 className="card-title mb-0">Open Tickets By Product</h5>
            </CardHeader>
            <CardBody>
             <BarChart/>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </>
  );
}

export default OpenTicketChart
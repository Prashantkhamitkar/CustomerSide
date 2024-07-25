import React from 'react'
import { Card, CardBody, CardHeader, Col, Row } from 'reactstrap';
import TableData from './TableData';

const OpenTableByUser = () => {
  return (
    <>
      <Row>
        <Col lg={12}>
          <Card>
            <CardHeader>
              <h5 className="card-title mb-0">Open Tickets By User</h5>
            </CardHeader>
            <CardBody>
             <TableData/>

            </CardBody>
          </Card>
        </Col>
      </Row>
    </>
  );
}

export default OpenTableByUser
import React, { useEffect, useState } from 'react'
import ActionButton from '../common/ActionButton';
import { Button, Card, CardBody, CardHeader, Col, Row } from 'reactstrap';
import AssetsReactTable from './AssetsReactTable';

const AssetsTable = () => {
const [ticketData,setTicketData]=useState([]);
const [searchTerm, setSearchTerm] = useState("");
 useEffect(() => {
   const filtered = ticketData.filter((item) =>
     Object.values(item).some((val) =>
       String(val).toLowerCase().includes(searchTerm.toLowerCase())
     )
   );
   setTicketData(filtered);
 }, [searchTerm]);
const resetRecord = () => {
  setTicketData(ticketData);
  setSearchTerm("");
};

  return (
    <>
      <Row>
        <Col lg={12}>
          <Card>
            <CardHeader>
              <h5 className="card-title mb-0">ASSETS DATA</h5>
            </CardHeader>
            <CardBody>
             
              <Row className="g-4">
                <Col className="col-sm">
                  <div className="app-search d-flex flex-column flex-sm-row mt-0 align-items-start align-items-sm-center gap-3">
                    <p className="text-muted mb-0">Summary</p>
                    <div className="position-relative">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Search..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                      />
                      <span
                        className="ri-search-line"
                        style={{ zIndex: "0" }}
                      ></span>
                    </div>
                 
                    <ActionButton data={ticketData} setdata={setTicketData} />
                    <Button
                      color="secondary"
                      className="btn btn-rounded btn-light waves-effect  d-flex align-items-center justify-content-center"
                      onClick={resetRecord}
                    >
                      CLEAR
                      <i
                        className="fas fa-times ms-2"
                        style={{ fontSize: "0.9rem" }}
                      ></i>
                    </Button>
                  </div>
                </Col>
              </Row>
              <AssetsReactTable/>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </>
  );
}

export default AssetsTable
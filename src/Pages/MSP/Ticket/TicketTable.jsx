import React, { useEffect, useState } from "react";
import { Button, Card, CardBody, CardHeader, Col, Row } from "reactstrap";
import Select from "react-select";
import ActionButton from "../common/ActionButton";
import CreateTicketButton from "./CreateTicketButton";

const TicketTable = () => {
  const [ticketData, setTicketData] = useState([]);
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
  const options = [
    {
      label: "Default",
      options: [
        { value: "primary-report", label: "1. Primary Report" },
        { value: "closed-tickets", label: "2. Closed Tickets" },
        { value: "open-tickets", label: "3. Open Tickets" },
        { value: "overdue-tickets", label: "4. Overdue Tickets" },
        { value: "security-incidents", label: "5. Security Incidents" },
        { value: "unassigned-tickets", label: "6. Unassigned Tickets" },
        {
          value: "vendor-security-reviews",
          label: "7. Vendor Security Reviews",
        },
      ],
    },
  ];
  const customStyles = {
    menu: (provided) => ({
      ...provided,
    }),
    menuPortal: (base) => ({ ...base, zIndex: 9999 }),
  };

  return (
    <>
      <Row>
        <Col lg={12}>
          <Card>
            <CardHeader>
              <h5 className="card-title mb-0">TICKETS DATA</h5>
            </CardHeader>
            <CardBody>
              <Row>
                <Col
                  md="12"
                  className="col-sm d-flex justify-content-end align-items-center"
                >
                  <CreateTicketButton />
                </Col>
              </Row>
              <Row className="g-4">
                <Col className="col-sm">
                  <div className="app-search d-flex flex-column flex-sm-row mt-0 align-items-start align-items-sm-center gap-3">
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
                    <div>
                      <Select
                        classNamePrefix="select2-selection"
                        menuPlacement="auto"
                        menuPortalTarget={document.body}
                        placeholder="Select the option ......."
                        options={options}
                        styles={customStyles}
                      />
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
            </CardBody>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default TicketTable;

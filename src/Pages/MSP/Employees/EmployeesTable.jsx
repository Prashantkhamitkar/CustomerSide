import React, { useEffect, useState } from 'react'
import ActionButton from '../common/ActionButton';
import { Button, Card, CardBody, CardHeader, Col, Row } from 'reactstrap';
import EmployeesData from './EmployeesData';
import OffboardingModal from './OFFBOARDING/OffboardingModal';

const EmployeesTable = () => {
const [employeedata,setemployeedata]=useState([]);
const [searchTerm, setSearchTerm] = useState("");
const [toggle,settoggle]=useState(false);
 useEffect(() => {
   const filtered = employeedata.filter((item) =>
     Object.values(item).some((val) =>
       String(val).toLowerCase().includes(searchTerm.toLowerCase())
     )
   );
   setemployeedata(filtered);
 }, [searchTerm]);
const resetRecord = () => {
  setemployeedata(employeedata);
  setSearchTerm("");
};
const handleclick=()=>{
    settoggle(!toggle);
}
  return (
    <>
      <Row>
        <Col lg={12}>
          <Card>
            <CardHeader>
              <h5 className="card-title mb-0">EMPLOYEE DATA</h5>
            </CardHeader>
            <CardBody>
              <Row>
                <Col
                  md="12"
                  className="col-sm d-flex justify-content-end align-items-center"
                >
                 <Button color='success' className='btn btn-rounded waves-effect ' onClick={handleclick}>
                    OFFBOARDING
                 </Button>
                </Col>
              </Row>
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

                    <ActionButton
                      data={employeedata}
                      setdata={setemployeedata}
                    />
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
              <EmployeesData/>
              <OffboardingModal modal={toggle} toggle={handleclick}/>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </>
  );
}

export default EmployeesTable
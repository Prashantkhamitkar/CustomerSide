import React, { useState } from 'react'
import { Button, Card, CardBody, CardHeader, Col, Input, InputGroup,InputGroupText, Label, Modal, ModalFooter, Row } from 'reactstrap';
import Select from "react-select"
const OnboardingIndex = ({toggle,isOpen}) => {
const [signature,setSignature]=useState("");

const [isEditable, setIsEditable] = useState(true);
    const customStyles = {
      menu: (provided) => ({
        ...provided,
        zIndex: 9999,
      }),
      menuPortal: (base) => ({
        ...base,
        zIndex: 9999,
      }),
    };
    const togglePreview = () =>{ 
        setIsEditable(!isEditable);
    };
  return (
    <>
      <Modal size="xl" isOpen={isOpen} toggle={toggle} centered>
        <div className="modal-header">
          <h5 className="modal-title mt-0" id="myLargeModalLabel">
            New Hire Employee Onboarding
          </h5>
          <button
            onClick={toggle}
            type="button"
            className="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className="modal-body">
          <Row>
            <Col lg={6}>
              <Card>
                <CardHeader className=" mt-0 text-center">EMPLOYEE INFORMATION</CardHeader>
                <CardBody>
                  <Row>
                    <Col lg="6">
                      <div className="mb-3">
                        <Label
                          style={{
                            position: "relative",
                            display: "inline-block",
                          }}
                        >
                          FIRST NAME
                          <i
                            className="fas fa-asterisk"
                            style={{
                              color: "red",
                              fontSize: "0.5em",
                              position: "absolute",
                              top: "0.5em",
                              right: "-1.5em",
                            }}
                          ></i>
                        </Label>
                        <Input
                          type="text"
                          placeholder="Enter First Name"
                          className="custominput"
                        />
                      </div>
                      <div className="mb-3">
                        <Label>PHONE</Label>
                        <Input
                          type="tel"
                          placeholder="Enter Phone"
                          className="custominput"
                        />
                      </div>
                    </Col>
                    <Col lg="6">
                      <div className="mb-3">
                        <Label>LAST NAME</Label>
                        <Input
                          type="text"
                          placeholder="Enter Last Name"
                          className="custominput"
                        />
                      </div>
                      <div className="mb-3">
                        <Label>MOBILE</Label>
                        <Input
                          type="tel"
                          placeholder="Enter Mobile Number"
                          className="custominput"
                        />
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <div className="mb-3">
                        <Label>ADDITIONAL INFO</Label>
                        <Input
                          type="textarea"
                          placeholder="Enter Additional Info"
                          className="custominput"
                          rows="5"
                        />
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <div className="mb-3">
                        <Label>SITE</Label>
                        <Select
                          placeholder="Select Site"
                          classNamePrefix="select2-selection"
                          menuPlacement="auto"
                          menuPortalTarget={document.body}
                          styles={customStyles}
                        />
                      </div>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </Col>
            <Col lg={6}>
              <Card>
                <CardHeader className="mt-0 text-center">EMAIL ACCOUNT</CardHeader>
                <CardBody>
                  <Row>
                    <Col>
                      <div className="mb-3">
                        <Label
                          style={{
                            position: "relative",
                            display: "inline-block",
                          }}
                        >
                          CREATE EMAIL ACCOUNT
                          <i
                            className="fas fa-asterisk"
                            style={{
                              color: "red",
                              fontSize: "0.5em",
                              position: "absolute",
                              top: "0.5em",
                              right: "-1.5em",
                            }}
                          ></i>
                        </Label>
                        <Input
                          type="text"
                          placeholder="Enter Email"
                          className="custominput"
                        />
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <div className="mb-3">
                        <Label>EMAIL SIGNATURE</Label>
                        <InputGroup>
                          <Input
                            type="textarea"
                            placeholder={signature ? "" : "Nothing To Preview"}
                            value={signature}
                            onChange={(e) => setSignature(e.target.value)}
                            rows="5"
                            className="custominput"
                            readOnly={!isEditable}
                          />
                          <InputGroupText className="d-flex justify-content-start align-items-start custominput">
                            <Button
                              color={isEditable ? "warning" : "success"} // Change color based on mode
                              className="btn btn-rounded"
                              onClick={togglePreview}
                            >
                              {isEditable ? "Preview" : "Edit"} 
                            </Button>
                          </InputGroupText>
                        </InputGroup>
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <div className="mb-3">
                        <Label>MICROSOFT LICENSE</Label>
                        <Input
                          type="text"
                          placeholder="Enter Microsoft License"
                          className="custominput"
                        />
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <div className="mb-3">
                        <Label>ADD TO DISTRIBUTION GROUP</Label>
                        <Input
                          type="text"
                          placeholder="Enter Distribution Group"
                          className="custominput"
                        />
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <div className="mb-3">
                        <Label>SHARED MAILBOXES</Label>
                        <Input
                          type="text"
                          placeholder="Enter Mailboxes"
                          className="custominput"
                        />
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <div className="mb-3">
                        <Label>ONE DRIVE</Label>
                        <Input
                          type="text"
                          placeholder="Enter One Drive"
                          className="custominput"
                        />
                      </div>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col lg={12}>
              <Card>
                <CardHeader className="mt-0 text-center">
                  COMPUTER/LAPTOP ACCOUNT
                </CardHeader>
                <CardBody>
                  <Row>
                    <Col lg="6">
                      <div className="mb-3">
                        <Label>CREATE PC LOGIN</Label>
                        <Input
                          type="text"
                          placeholder="Enter PC Login Details"
                          className="custominput"
                        />
                      </div>
                    </Col>
                    <Col lg="6">
                      <div className="mb-3">
                        <Label>USE PASSWORD</Label>
                        <Input
                          type="text"
                          placeholder="Enter Use Password"
                          className="custominput"
                        />
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col lg="6">
                      <div className="mb-3">
                        <Label>ADD TO SECURITY GROUP</Label>
                        <Input
                          type="text"
                          placeholder="Enter Security Group Details"
                          className="custominput"
                        />
                      </div>
                    </Col>
                    <Col lg="6">
                      <div className="mb-3">
                        <Label>ADD TO COMPANY SHARED FOLDER</Label>
                        <Input
                          type="text"
                          placeholder="Enter Shared Folder Details"
                          className="custominput"
                        />
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col lg="6">
                      <div className="mb-3">
                        <Label>ADD PRINTER/SCANNER</Label>
                        <Input
                          type="text"
                          placeholder="Enter Printer/Scanner Details"
                          className="custominput"
                        />
                      </div>
                    </Col>
                    <Col lg="6">
                      <div className="mb-3">
                        <Label>ON-LINE MEETING SOFTWARE</Label>
                        <Input
                          type="text"
                          placeholder="Enter Software Details"
                          className="custominput"
                        />
                      </div>
                    </Col>
                    <Col lg="6">
                      <div className="mb-3">
                        <Label>IT SOFTWARE SUPPORT</Label>
                        <Input
                          type="text"
                          placeholder="Enter Support Details"
                          className="custominput"
                        />
                      </div>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <ModalFooter>
            <Button color="info" type="submit">
              CREATE TICKET
            </Button>
            <Button color="secondary" onClick={toggle}>
              CANCEL
            </Button>
          </ModalFooter>
        </div>
      </Modal>
    </>
  );
}

export default OnboardingIndex
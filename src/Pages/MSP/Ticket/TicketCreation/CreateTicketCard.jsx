import React, { useState } from "react";
import Dropzone from "react-dropzone";
import {  Link } from "react-router-dom";
import { Button, Card, CardBody, CardFooter, CardTitle, Col, Form, Input, Label, Row } from "reactstrap";
import Select from "react-select";
const CreateTicketCard = () => {
  const [selectedFiles, setSelectedFiles] = useState([]);

  const handleAcceptedFiles = (files) => {
    const formattedFiles = files.map((file) =>
      Object.assign(file, {
        preview: URL.createObjectURL(file),
        formattedSize: formatBytes(file.size),
      })
    );
    setSelectedFiles(formattedFiles);
  };

  const formatBytes = (bytes, decimals = 2) => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
  };

  const truncateString = (str, numWords) => {
    const words = str.split(" ");
    const truncated = words.slice(0, numWords).join(" ");
    if (words.length > numWords) {
      return truncated + "...";
    }
    return truncated;
  };
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
  return (
    <>
      <Row>
        <Col md={12}>
          <CardTitle className="mt-0">Create Ticket</CardTitle>
          <Card body>
            <CardBody>
              <Row>
                <Col lg="6">
                  <div className="mb-3">
                    <Label>SUBJECT</Label>
                    <Input
                      type="text"
                      placeholder="Enter Subject..."
                      className="custominput"
                    />
                  </div>
                  <div className="mb-3">
                    <Label>CATEGORY</Label>
                    <Select
                      placeholder="Select Category"
                      classNamePrefix="select2-selection"
                      menuPlacement="auto"
                      menuPortalTarget={document.body}
                    />
                  </div>
                  <div className="mb-3">
                    <Label>PRODUCT</Label>
                    <Select
                      placeholder="Select Product"
                      classNamePrefix="select2-selection"
                      menuPlacement="auto"
                      menuPortalTarget={document.body}
                    />
                  </div>{" "}
                </Col>

                <Col lg="6">
                  <div className="mb-3">
                    <Label>DESCRIPTION</Label>
                    <div>
                      <textarea
                        placeholder="Enter Description"
                        required
                        className="form-control custominput"
                        rows="5"
                      ></textarea>
                    </div>
                  </div>
                  <Row>
                    <Col lg="6">
                      <div className="mb-3">
                        <Label>SEVERITY</Label>
                        <Select
                          placeholder="Select Severity"
                          //   value={selectedSeverity}
                          //   onChange={handleSelectSeverity}
                          //   options={severityData}
                          classNamePrefix="select2-selection"
                          styles={customStyles}
                          menuPlacement="auto"
                          menuPortalTarget={document.body}
                        />
                      </div>
                    </Col>
                    <Col lg="6">
                      <div className="mb-3">
                        <Label>URGENCY</Label>
                        <Select
                          placeholder="Select Urgency"
                          //   value={selectedUrgency}
                          //   onChange={handleSelectUrgency}
                          //   options={urgencyData}
                          classNamePrefix="select2-selection"
                          styles={customStyles}
                          menuPlacement="auto"
                          menuPortalTarget={document.body}
                        />
                      </div>
                    </Col>
                  </Row>
                </Col>
              </Row>

              <Row>
                <Col lg="6">
                  <div className="mb-3">
                    <Label>UPLOAD</Label>
                    <Form className="dropzone">
                      <Dropzone
                        onDrop={(acceptedFiles) => {
                          handleAcceptedFiles(acceptedFiles);
                        }}
                      >
                        {({ getRootProps, getInputProps }) => (
                          <div style={{ textAlign: "center" }}>
                            <div
                              className="dz-message needsclick mt-4"
                              {...getRootProps()}
                            >
                              <input {...getInputProps()} />
                              <div className="mb-3">
                                <i className="display-4 text-muted mdi mdi-cloud-upload-outline"></i>
                              </div>
                              <h4>Drop files here to upload</h4>
                            </div>
                          </div>
                        )}
                      </Dropzone>
                      <div
                        className="dropzone-previews mt-2"
                        id="file-previews"
                      >
                        {selectedFiles.map((file, index) => (
                          <Card
                            className="mt-1 mb-0 shadow-none border dz-processing dz-image-preview dz-success dz-complete"
                            key={index + "-file"}
                          >
                            <div className="p-2">
                              <Row className="align-items-center">
                                <Col className="col-auto">
                                  <img
                                    data-dz-thumbnail=""
                                    height="80"
                                    className="avatar-sm rounded bg-light"
                                    alt={file.name}
                                    src={file.preview}
                                  />
                                </Col>
                                <Col>
                                  <Link
                                    to="#"
                                    className="text-muted font-weight-bold"
                                  >
                                    {truncateString(file.name, 4)}
                                  </Link>
                                  <p className="mb-0">
                                    <strong>{file.formattedSize}</strong>
                                  </p>
                                </Col>
                              </Row>
                            </div>
                          </Card>
                        ))}
                      </div>
                    </Form>
                  </div>
                </Col>
                <div className="d-flex justify-content-end">
                  <Button color="primary" className="me-2">
                    <i
                      className="fas fa-plus me-1"
                      style={{ color: "#E1FCFF" }}
                    ></i>{" "}
                    CREATE
                  </Button>
                  <Button color="danger">
                    <i
                      className="fas fa-window-close me-2"
                      style={{ color: "#FFD7DA" }}
                    ></i>
                    CANCEL
                  </Button>
                </div>
              </Row>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default CreateTicketCard;

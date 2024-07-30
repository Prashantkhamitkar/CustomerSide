import React, { useState } from "react";
import Dropzone from "react-dropzone";
import { Link } from "react-router-dom";
import {
  Button,
  Card,
  CardBody,
  CardTitle,
  Col,
  Form,
  Input,
  Label,
  Row,
  FormFeedback,
} from "reactstrap";
import Select from "react-select";
import { useFormik } from "formik";
import * as Yup from "yup";

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

  const formik = useFormik({
    initialValues: {
      subject: "",
      description: "",
      category: null,
      product: null,
      severity: null,
      urgency: null,
    },
    validationSchema: Yup.object({
      subject: Yup.string().required("Please Enter Subject"),
      description: Yup.string().required("Please Enter Description"),
    }),
    onSubmit: (values) => {
      console.log("Form values:", {
        ...values,
        category: values.category ? values.category.label : null,
        product: values.product ? values.product.label : null,
        severity: values.severity ? values.severity.label : null,
        urgency: values.urgency ? values.urgency.label : null,
      });
      console.log("file data is ",selectedFiles);
    },
  });

  const handleCancel = () => {
    formik.resetForm(); // Reset form fields
    setSelectedFiles([]);
    formik.setFieldValue("category", null); // Reset category
    formik.setFieldValue("product", null); // Reset product
    formik.setFieldValue("severity", null); // Reset severity
    formik.setFieldValue("urgency", null); // Reset urgency
    // Clear selected files
  };

  const categoryOptions = [
    { value: "cat1", label: "Category 1" },
    { value: "cat2", label: "Category 2" },
    { value: "cat3", label: "Category 3" },
  ];

  const productOptions = [
    { value: "prod1", label: "Product 1" },
    { value: "prod2", label: "Product 2" },
    { value: "prod3", label: "Product 3" },
  ];

  const severityOptions = [
    { value: "sev1", label: "Severity 1" },
    { value: "sev2", label: "Severity 2" },
    { value: "sev3", label: "Severity 3" },
  ];

  const urgencyOptions = [
    { value: "urg1", label: "Urgency 1" },
    { value: "urg2", label: "Urgency 2" },
    { value: "urg3", label: "Urgency 3" },
  ];

  return (
    <>
      <Row>
        <Col md={12}>
          <CardTitle className="mt-0">Create Ticket</CardTitle>
          <Card body>
            <CardBody>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  formik.handleSubmit();
                }}
              >
                <Row>
                  <Col lg="6">
                    <div className="mb-3">
                      <Label
                        style={{
                          position: "relative",
                          display: "inline-block",
                        }}
                      >
                        SUBJECT
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
                        name="subject"
                        placeholder="Enter Subject..."
                        className="custominput"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.subject}
                        invalid={
                          formik.touched.subject && formik.errors.subject
                            ? true
                            : false
                        }
                      />
                      {formik.touched.subject && formik.errors.subject ? (
                        <FormFeedback>{formik.errors.subject}</FormFeedback>
                      ) : null}
                    </div>
                    <div className="mb-3">
                      <Label>CATEGORY</Label>
                      <Select
                        placeholder="Select Category"
                        classNamePrefix="select2-selection"
                        menuPlacement="auto"
                        menuPortalTarget={document.body}
                        options={categoryOptions}
                        value={formik.values.category}
                        onChange={(option) =>
                          formik.setFieldValue("category", option)
                        }
                        styles={customStyles}
                      />
                    </div>
                    <div className="mb-3">
                      <Label>PRODUCT</Label>
                      <Select
                        placeholder="Select Product"
                        classNamePrefix="select2-selection"
                        menuPlacement="auto"
                        menuPortalTarget={document.body}
                        options={productOptions}
                        value={formik.values.product}
                        onChange={(option) =>
                          formik.setFieldValue("product", option)
                        }
                        styles={customStyles}
                      />
                    </div>
                  </Col>

                  <Col lg="6">
                    <div className="mb-3">
                      <Label
                        style={{
                          position: "relative",
                          display: "inline-block",
                        }}
                      >
                        DESCRIPTION
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
                      <div>
                        <Input
                          name="description"
                          placeholder="Enter Description"
                          type="textarea"
                          className="form-control custominput"
                          rows="5"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.description}
                          invalid={
                            formik.touched.description &&
                            formik.errors.description
                              ? true
                              : false
                          }
                        ></Input>
                        {formik.touched.description &&
                        formik.errors.description ? (
                          <FormFeedback>
                            {formik.errors.description}
                          </FormFeedback>
                        ) : null}
                      </div>
                    </div>
                    <Row>
                      <Col lg="6">
                        <div className="mb-3">
                          <Label>SEVERITY</Label>
                          <Select
                            placeholder="Select Severity"
                            classNamePrefix="select2-selection"
                            styles={customStyles}
                            menuPlacement="auto"
                            menuPortalTarget={document.body}
                            options={severityOptions}
                            value={formik.values.severity}
                            onChange={(option) =>
                              formik.setFieldValue("severity", option)
                            }
                          />
                        </div>
                      </Col>
                      <Col lg="6">
                        <div className="mb-3">
                          <Label>URGENCY</Label>
                          <Select
                            placeholder="Select Urgency"
                            classNamePrefix="select2-selection"
                            styles={customStyles}
                            menuPlacement="auto"
                            menuPortalTarget={document.body}
                            options={urgencyOptions}
                            value={formik.values.urgency}
                            onChange={(option) =>
                              formik.setFieldValue("urgency", option)
                            }
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
                      <div className="dropzone">
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
                          {selectedFiles.map((f, i) => (
                            <Card
                              className="mt-1 mb-0 shadow-none border dz-processing dz-image-preview dz-success dz-complete"
                              key={i + "-file"}
                            >
                              <div className="p-2">
                                <Row className="align-items-center">
                                  <Col className="col-auto">
                                    <img
                                      data-dz-thumbnail=""
                                      height="80"
                                      className="avatar-sm rounded bg-light"
                                      alt={f.name}
                                      src={f.preview}
                                    />
                                  </Col>
                                  <Col>
                                    <Link
                                      to="#"
                                      className="text-muted font-weight-bold"
                                    >
                                      {truncateString(f.name, 10)}
                                    </Link>
                                    <p className="mb-0">
                                      <strong>{f.formattedSize}</strong>
                                    </p>
                                  </Col>
                                </Row>
                              </div>
                            </Card>
                          ))}
                        </div>
                      </div>
                    </div>
                  </Col>
                  <div className="d-flex justify-content-end">
                    <Button color="primary" type="submit" className="me-2">
                      <i
                        className="fas fa-plus me-1"
                        style={{ color: "#E1FCFF" }}
                      ></i>{" "}
                      CREATE
                    </Button>
                    <Button color="danger" onClick={handleCancel}>
                      <i
                        className="fas fa-window-close me-2"
                        style={{ color: "#FFD7DA" }}
                      ></i>
                      CANCEL
                    </Button>
                  </div>
                </Row>
              </form>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default CreateTicketCard;

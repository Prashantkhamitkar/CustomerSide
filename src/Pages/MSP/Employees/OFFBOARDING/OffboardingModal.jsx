import React from "react";
import {
  Button,
  Col,
  FormFeedback,
  FormGroup,
  Label,
  Modal,
  ModalFooter,
  Row,
} from "reactstrap";
import Select from "react-select";
import * as Yup from "yup";
import {  Field, Form, Formik } from "formik";

const OffboardingModal = ({ modal, toggle }) => {
  const checkboxes = [
    "Printer/Scanner",
    "Company Share Folder",
    "Distribution Group",
    "Security Group",
    "Email Account",
    "PC Login",
    "IT Software Support",
    "Microsoft License",
    "On-line Meeting Software",
    "OneDrive",
    "Shared Mailboxes",
  ];

  const initialValues = {
    selectedContact: null,
    checkboxes: checkboxes.reduce(
      (acc, checkbox) => ({ ...acc, [checkbox]: false }),
      {}
    ),
  };

  const validationSchema = Yup.object().shape({
    selectedContact: Yup.object().required("Contact is required"),
  });

  const handleSubmit = (values) => {
    console.log(values);
    toggle();
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

  const contacts = [
    { value: "1", label: "John Doe" },
    { value: "2", label: "Jane Smith" },
    { value: "3", label: "Michael Johnson" },
    { value: "4", label: "Emily Davis" },
    { value: "5", label: "William Brown" },
  ];

  return (
    <Modal size="lg" isOpen={modal} toggle={toggle} centered>
      <div className="modal-header">
        <h5 className="modal-title mt-0" id="myLargeModalLabel">
          Offboarding
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
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
          enableReinitialize
        >
          {({ setFieldValue, errors, touched }) => (
            <Form>
              <FormGroup>
                <Row>
                  <Col md={12}>
                    <Row className="mt-3 mb-0 mb-lg-5">
                      <Col lg="8">
                        <Label
                          style={{
                            position: "relative",
                            display: "inline-block",
                          }}
                        >
                          CONTACT
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
                        <Field name="selectedContact">
                          {({ field, form }) => (
                            <Select
                              options={contacts}
                              onChange={(option) =>
                                form.setFieldValue(field.name, option)
                              }
                              value={field.value}
                              menuPortalTarget={document.body}
                              styles={customStyles}
                              placeholder="Select Contact"
                              classNamePrefix="select2-selection"
                              menuPlacement="auto"
                              
                            />
                          )}
                        </Field>
                        {touched.selectedContact && errors.selectedContact && (
                          <FormFeedback
                            type="invalid"
                            style={{ display: "block" }}
                          >
                            {errors.selectedContact}
                          </FormFeedback>
                        )}
                      </Col>
                    </Row>
                    <Row className="mt-3 mb-0 mb-lg-5">
                      <Col lg="12">
                        <Label>DISABLE</Label>
                        <Row>
                          {checkboxes.map((item, index) => (
                            <Col key={index} lg="4" md="6" sm="12">
                              <div className="form-check">
                                <Field
                                  className="form-check-input"
                                  type="checkbox"
                                  id={item}
                                  name={`checkboxes.${item}`}
                                />
                                <Label htmlFor={item}>{item}</Label>
                              </div>
                            </Col>
                          ))}
                        </Row>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </FormGroup>
              <ModalFooter>
                <Button color="info" type="submit">
                  CREATE TICKET
                </Button>
                <Button color="secondary" onClick={toggle}>
                  CANCEL
                </Button>
              </ModalFooter>
            </Form>
          )}
        </Formik>
      </div>
    </Modal>
  );
};

export default OffboardingModal;

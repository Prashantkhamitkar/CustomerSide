import React from 'react'
import { Link } from 'react-router-dom';

const CreateTicketButton = () => {
  return (
    <>
      <div className="d-flex flex-wrap gap-2  justify-content-end">
        <Link
          to={"/createticket"}
          className="btn btn-rounded btn-info waves-effect waves-light d-flex justify-content-center align-items-center"
        >
          {" "}
          <i className="fas fa-plus me-2"></i>
          Create New Ticket
        </Link>

        <button
          type="button"
          className="btn btn-rounded btn-success waves-effect waves-light d-flex justify-content-center align-items-center"
        >
          <i className="fas fa-user-plus me-2"></i> Ticket For New Hire
          Onboarding
        </button>
      </div>
    </>
  );
}

export default CreateTicketButton
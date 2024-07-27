import React from 'react'
import { ClimbingBoxLoader } from 'react-spinners';

const Loader = () => {
  return (
    <>
      {" "}
      <div className="container-fluid d-flex align-items-center justify-content-center min-vh-100">
        <ClimbingBoxLoader color="#1ea0a0" size={30} speedMultiplier={1} />
      </div>
    </>
  );
}

export default Loader
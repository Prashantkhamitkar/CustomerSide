import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const AnimateButton = () => {
    const [isanimate,setIsanimate]=useState(false);
 const navigate=useNavigate();
    const handleclick=()=>{
navigate("/createticket")
  };

    return (
      <>
        <div>
          <button className="" onClick={handleclick}>
            Create Ticket
          </button>
        </div>
      </>
    );
}

export default AnimateButton
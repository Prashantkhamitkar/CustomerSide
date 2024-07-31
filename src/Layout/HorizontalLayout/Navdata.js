import React from "react";

const Navdata = () => {
  const NavnavData = [
    {
      id: 1,
      label: "Dashboard",
      icon: "fas fa-home me-2",
      isdropDown: true,
      isdashboard: true,

      click: function () {},
    },
    {
      id: 2,
      label: "Assets",
      icon: "fas fa-hand-holding-usd me-2",
      isdropDown: true,
      url: "/assets",
      click: function () {},
    },
    {
      id: 3,
      label: "Employees",
      icon: "fas fa-users me-2",
      isdropDown: true,
      url: "/employees",
    },
    {
      id: 4,
      label: "Tickets",
      icon: "fas fa-ticket-alt me-2",
      isdropDown: true,
      url: "/customertickets",
    },
    {
      id: 5,
      label: "Knowledge Base",
      icon: "fas fa-info-circle me-2",
      isdropDown: true,
      url: "/knowledge-base",
    },
  ];
  return <React.Fragment>{NavnavData}</React.Fragment>;
};

export default Navdata;

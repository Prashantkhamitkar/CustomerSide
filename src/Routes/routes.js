import React from "react";
import { Navigate } from "react-router-dom";

import DashboardIndex from "../Pages/MSP/Dashboard/DashboardIndex.jsx";

import AssetsIndex from "../Pages/MSP/Assets/AssetsIndex.jsx";
import EmployeesIndex from "../Pages/MSP/Employees/EmployeesIndex.jsx";

import Login from "../Pages/MSP/publicpages/Login.jsx";
import CreateTicket from "../Pages/MSP/Ticket/TicketCreation/CreateTicket.jsx";
import KnowledgeBaseIndex from "../Pages/MSP/CustomerKnowledgeBase/KnowledgeBaseIndex.jsx";
import TicketIndex from "../Pages/MSP/Ticket/TicketIndex.jsx";

const authProtectedRoutes = [
  //dashboard
  { path: "/dashboard", component: <DashboardIndex /> },

  //msp pages

  { path: "/knowledge-base", component: <KnowledgeBaseIndex /> },

  { path: "/assets", component: <AssetsIndex /> },
  { path: "/employees", component: <EmployeesIndex /> },
  { path: "/customertickets", component: <TicketIndex /> },
  { path: "/createticket", component: <CreateTicket /> },

  {
    path: "/",
    exact: true,
    component: <Navigate to="/dashboard" />,
  },
];

const publicRoutes = [
  // Authentication Page

  { path: "/login", component: <Login /> },

  // Utility Pages
];

export { authProtectedRoutes, publicRoutes };

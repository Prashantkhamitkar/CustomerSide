import React, { useEffect, useState } from "react";
import PropTypes from 'prop-types';
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

//i18n
import { withTranslation } from "react-i18next";
// Redux
import { connect, useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import withRouter from "../withRouter";

// users
import user1 from "../../../assets/images/users/avatar-8.jpg";

import { logout } from "../../../store/actions";

const ProfileMenu = props => {
  // Declare a new state variable, which we'll call "menu"
  const [menu, setMenu] = useState(false);

  const [username, setusername] = useState("");
  const {data} = useSelector((state) => state.customerreducer || {});
  const navigate=useNavigate();
  const dispatch =useDispatch();
 useEffect(()=>{
  setusername(data.firstName+" "+data.lastName);
 },[data])

const handleLogout=()=>{dispatch(logout());
  sessionStorage.removeItem("authToken");
  navigate("/login");
}
  return (
    <React.Fragment>
      <Dropdown
        isOpen={menu}
        toggle={() => setMenu(!menu)}
        className="d-inline-block"
      >
        <DropdownToggle
          className="btn header-item "
          id="page-header-user-dropdown"
          tag="button"
        >
          <img
            className="rounded-circle header-profile-user"
            src={user1}
            alt="Header Avatar"
          />
          

          <span className="d-none d-xl-inline-block ms-2 me-2">{username}</span>
          <i className="mdi mdi-chevron-down d-none d-xl-inline-block" />
        </DropdownToggle>
        <DropdownMenu className="dropdown-menu-end">
          <DropdownItem tag={Link} to="/userprofile">
            {" "}
            <i className="ri-user-line align-middle me-2" />
            {props.t("Profile")}{" "}
          </DropdownItem>
          <DropdownItem tag={Link} to="/dashboard">
            <i className="ri-wallet-2-line align-middle me-2" />
            {props.t("My Wallet")}
          </DropdownItem>
          <DropdownItem tag={Link} to="/dashboard">
            <span className="badge bg-success float-end mt-1">11</span>
            <i className="ri-settings-2-line align-middle me-2" />
            {props.t("Settings")}
          </DropdownItem>
          <DropdownItem tag={Link} to="/auth-lock-screen">
            <i className="ri-lock-unlock-line align-middle me-2" />
            {props.t("Lock screen")}
          </DropdownItem>
          <div className="dropdown-divider" />
          <button
           onClick={handleLogout}
            className="dropdown-item"
          >
            <i className="ri-shut-down-line align-middle me-2 text-danger" />
            <span>{props.t("Logout")}</span>
          </button>
        </DropdownMenu>
      </Dropdown>
    </React.Fragment>
  );
};

ProfileMenu.propTypes = {
  success: PropTypes.any,
  t: PropTypes.any
};

const mapStatetoProps = state => {
  const { error, success } = state.profile;
  return { error, success };
};

export default withRouter(
  connect(mapStatetoProps, {})(withTranslation()(ProfileMenu))
);

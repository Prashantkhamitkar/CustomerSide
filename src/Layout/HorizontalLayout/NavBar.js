import React, { useEffect } from "react";
import { Collapse, Row, Col, Container } from "reactstrap";
import classname from "classnames";

import { withTranslation } from "react-i18next";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import withRouter from "../../components/Common/withRouter";

// Import Data
import navdata from "./Navdata";

const Navbar = (props) => {
  const navData = navdata().props.children;


  useEffect(() => {
    var matchingMenuItem = null;
    var ul = document.getElementById("navigation");
    var items = ul.getElementsByTagName("a");
    removeActivation(items);
    for (var i = 0; i < items.length; ++i) {
      if (window.location.pathname === items[i].pathname) {
        matchingMenuItem = items[i];
        break;
      }
    }
    if (matchingMenuItem) {
      activateParentDropdown(matchingMenuItem);
    }
  });

  const removeActivation = items => {
    for (var i = 0; i < items.length; ++i) {
      var item = items[i];
      const parent = items[i].parentElement;
      if (item && item.classList.contains("active")) {
        item.classList.remove("active");
      }
      if (parent) {
        if (parent.classList.contains("active")) {
          parent.classList.remove("active");
        }
      }
    }
  };

  function activateParentDropdown(item) {
    item.classList.add("active");
    const parent = item.parentElement;
    if (parent) {
      parent.classList.add("active"); // li
      const parent2 = parent.parentElement;
      parent2.classList.add("active"); // li
      const parent3 = parent2.parentElement;
      if (parent3) {
        parent3.classList.add("active"); // li
        const parent4 = parent3.parentElement;
        if (parent4) {
          parent4.classList.add("active"); // li
          const parent5 = parent4.parentElement;
          if (parent5) {
            parent5.classList.add("active"); // li
            const parent6 = parent5.parentElement;
            if (parent6) {
              parent6.classList.add("active"); // li
            }
          }
        }
      }
    }
    return false;
  }
  
  return (
    <React.Fragment>
      <div className="topnav">
        <Container fluid>
          <nav
            className="navbar navbar-light navbar-expand-lg topnav-menu"
            id="navigation"
          >
            <Collapse
              isOpen={props.leftMenu}
              className="navbar-collapse"
              id="topnav-menu-content"
            >
              <ul className="navbar-nav">
                {(navData || []).map((item, key) => (
                  <React.Fragment key={key}>
                    {item.isdropDown && item.isdashboard ? (
                      <li key={key} className="nav-item dropdown">
                        <Link
                          to="/#"
                          className="nav-link dropdown-toggle arrow-none"
                          onClick={item.click}
                        >
                          <i className={item.icon}></i>
                          {props.t(item.label)}
                        </Link>
                      </li>
                    ) : (
                      <li
                        key={key}
                        
                      >
                        <Link
                          to={`${item.url}`}
                          className="nav-link dropdown-toggle arrow-none"
                          onClick={item.click}
                        >
                          <i className={item.icon}></i>
                          {props.t(item.label)}{" "}
                          
                        </Link>

                      
                      </li>
                    )}
                  </React.Fragment>
                ))}
              </ul>
            </Collapse>
          </nav>
        </Container>
      </div>
    </React.Fragment>
  );
};

const mapStatetoProps = (state) => {
  const { leftMenu } = state.Layout;
  return { leftMenu };
};

export default withRouter(
  connect(mapStatetoProps, {})(withTranslation()(Navbar))
);

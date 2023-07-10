import React, { useState } from "react";
import logo from "../assets/fulllogo.png";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBBtn,
  MDBCollapse,
} from "mdb-react-ui-kit";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { counterAction } from "./store/CounterSlice";
const Nav = () => {
  const [showBasic, setShowBasic] = useState(false);
  const [clr, setClr] = useState("light");
  const dispatch = useDispatch();
  // const navigate = useNavigate(false);
  const changeHandler = () => {
    setClr(clr === "light" ? "dark" : "light");
    dispatch(counterAction.colorHandler());
  };
  return (
    <div>
      <MDBNavbar expand="lg" light bgColor={clr}>
        <MDBContainer fluid>
          <MDBNavbarBrand href="#">
            <img src={logo} height="30" alt="" loading="lazy" />
          </MDBNavbarBrand>

          <MDBNavbarToggler
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => setShowBasic(!showBasic)}
          >
            <MDBIcon icon="bars" fas />
          </MDBNavbarToggler>

          <MDBCollapse navbar show={showBasic}>
            <MDBNavbarNav className="mr-auto mb-2 mb-lg-0"></MDBNavbarNav>

            <form
              className="d-flex input-group w-80"
              style={{ position: "fixed", left: "18%", width: "60%" }}
            >
              <input
                type="search"
                className="form-control"
                placeholder="Search"
                aria-label="Search"
              />
              <MDBBtn style={{ backgroundColor: "#FF5700" }}>
                <i class="fas fa-search"></i>
              </MDBBtn>
            </form>
            <MDBBtn
              style={{
                width: "20%",
                fontWeight: "bolder",
                backgroundColor: "#FF5700",
              }}
              onClick={changeHandler}
            >
              Dark / Light
            </MDBBtn>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
    </div>
  );
};
export default Nav;

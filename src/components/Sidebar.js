import "./Sidebar.css";
import { PiStudentBold } from "react-icons/pi";
import { TbDashboard } from "react-icons/tb";
import { AiOutlineArrowRight } from "react-icons/ai";
import { MdPayments } from "react-icons/md";
import { LuActivity } from "react-icons/lu";
import { MdFeedback, MdAccountTree } from "react-icons/md";
import { SiGeneralelectric } from "react-icons/si";
import { FaHotel } from "react-icons/fa";
import { FcServices } from "react-icons/fc";
import { BiExit } from "react-icons/bi";

import {
  MDBBtn,
  MDBDropdown,
  MDBDropdownItem,
  MDBDropdownMenu,
  MDBDropdownToggle,
  MDBRipple,
} from "mdb-react-ui-kit";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const color = useSelector((state) => state.color1);
  const color1 = useSelector((state) => state.color2);
  const color2 = useSelector((state) => state.color3);
  const navigate = useNavigate();
  const logoutHandler = () => {
    navigate("/");
  };
  return (
    <>
      <div className="sidebar" style={{ backgroundColor: color }}>
        <div className="bttns">
          <MDBRipple
            className="bg-image hover-overlay rounded"
            rippleTag="div"
            rippleColor="dark"
            style={{ width: "100%" }}
          >
            <MDBBtn
              className="me-1"
              style={{
                textTransform: "unset",
                backgroundColor: color1,
                textAlign: "start",
                width: "99%",
                color: color2,
                boxShadow: "none",
                fontSize: "15px",
              }}
            >
              <TbDashboard /> Dashboard
            </MDBBtn>
            <a href="#!">
              <div
                className="mask"
                // style={{ backgroundColor: "#FF5700" }}
                style={{
                  backgroundColor: "rgba(255, 87, 0, 0.5)",
                  width: "99%",
                }}
              ></div>
            </a>
          </MDBRipple>
          <MDBDropdown>
            <MDBDropdownToggle
              style={{
                textTransform: "unset",
                textAlign: "start",
                width: "99%",
                backgroundColor: color1,
                color: color2,
                boxShadow: "none",
                fontSize: "15px",
              }}
            >
              <PiStudentBold /> Students
            </MDBDropdownToggle>
            <MDBDropdownMenu responsive="end">
              <MDBDropdownItem link>
                <AiOutlineArrowRight /> Menu item 1
              </MDBDropdownItem>
              <MDBDropdownItem link>
                <AiOutlineArrowRight /> Menu item 2
              </MDBDropdownItem>
              <MDBDropdownItem link>
                <AiOutlineArrowRight /> Menu item 3
              </MDBDropdownItem>
            </MDBDropdownMenu>
          </MDBDropdown>

          <MDBDropdown>
            <MDBDropdownToggle
              style={{
                textTransform: "unset",
                backgroundColor: "#252a3b",
                textAlign: "start",
                width: "99%",
                backgroundColor: color1,
                color: color2,
                boxShadow: "none",
                fontSize: "15px",
              }}
            >
              <MdPayments /> Bills & Payment
            </MDBDropdownToggle>
            <MDBDropdownMenu responsive="end">
              <MDBDropdownItem link>
                <AiOutlineArrowRight /> Menu item 1
              </MDBDropdownItem>
              <MDBDropdownItem link>
                <AiOutlineArrowRight /> Menu item 2
              </MDBDropdownItem>
              <MDBDropdownItem link>
                <AiOutlineArrowRight /> Menu item 3
              </MDBDropdownItem>
            </MDBDropdownMenu>
          </MDBDropdown>

          <MDBDropdown>
            <MDBDropdownToggle
              style={{
                textTransform: "unset",
                backgroundColor: "#252a3b",
                textAlign: "start",
                width: "99%",
                backgroundColor: color1,
                color: color2,
                boxShadow: "none",
                fontSize: "15px",
                // marginTop: "10px",
              }}
            >
              <LuActivity /> Activities
            </MDBDropdownToggle>
            <MDBDropdownMenu responsive="end">
              <MDBDropdownItem link>
                <AiOutlineArrowRight /> Menu item 1
              </MDBDropdownItem>
              <MDBDropdownItem link>
                <AiOutlineArrowRight /> Menu item 2
              </MDBDropdownItem>
              <MDBDropdownItem link>
                <AiOutlineArrowRight /> Menu item 3
              </MDBDropdownItem>
            </MDBDropdownMenu>
          </MDBDropdown>

          <MDBDropdown>
            <MDBDropdownToggle
              style={{
                textTransform: "unset",
                backgroundColor: "#252a3b",
                textAlign: "start",
                width: "99%",
                backgroundColor: color1,
                color: color2,
                fontSize: "15px",
                boxShadow: "none",
                // marginTop: "10px",
              }}
            >
              <FcServices /> Services
            </MDBDropdownToggle>
            <MDBDropdownMenu responsive="end">
              <MDBDropdownItem link>
                <AiOutlineArrowRight /> Menu item 1
              </MDBDropdownItem>
              <MDBDropdownItem link>
                <AiOutlineArrowRight /> Menu item 2
              </MDBDropdownItem>
              <MDBDropdownItem link>
                <AiOutlineArrowRight /> Menu item 3
              </MDBDropdownItem>
            </MDBDropdownMenu>
          </MDBDropdown>

          <hr />
          <MDBRipple
            className="bg-image hover-overlay rounded"
            rippleTag="div"
            rippleColor="dark"
            style={{ width: "100%" }}
          >
            <MDBBtn
              className="me-1"
              style={{
                textTransform: "unset",
                backgroundColor: "#9a9b9c00",
                textAlign: "start",
                width: "99%",
                backgroundColor: color1,
                color: color2,
                fontSize: "15px",
                boxShadow: "none",
              }}
              // onMouseOver={() => {
              //   setcolor15("#FF5700");
              // }}
              // onMouseOut={() => setcolor15(color1)}
            >
              <MdAccountTree /> Accounts
            </MDBBtn>
            <a href="#!">
              <div
                className="mask"
                // style={{ backgroundColor: "#FF5700" }}
                style={{
                  backgroundColor: "rgba(255, 87, 0, 0.5)",
                  width: "99%",
                }}
              ></div>
            </a>
          </MDBRipple>
          <MDBRipple
            className="bg-image hover-overlay rounded"
            rippleTag="div"
            rippleColor="dark"
            style={{ width: "100%" }}
          >
            <MDBBtn
              className="me-1"
              style={{
                textTransform: "unset",
                backgroundColor: "#9a9b9c00",
                textAlign: "start",
                width: "99%",
                backgroundColor: color1,
                color: color2,
                fontSize: "15px",
                boxShadow: "none",
              }}
              // onMouseOver={() => {
              //   setcolor17("#FF5700");
              // }}
              // onMouseOut={() => setcolor17("whitesmoke")}
            >
              <FaHotel /> Hospitality
            </MDBBtn>
            <a href="#!">
              <div
                className="mask"
                // style={{ backgroundColor: "#FF5700" }}
                style={{
                  backgroundColor: "rgba(255, 87, 0, 0.5)",
                  width: "99%",
                }}
              ></div>
            </a>
          </MDBRipple>
          <MDBRipple
            className="bg-image hover-overlay rounded"
            rippleTag="div"
            rippleColor="dark"
            style={{ width: "100%" }}
          >
            <MDBBtn
              className="me-1"
              style={{
                textTransform: "unset",
                backgroundColor: "#9a9b9c00",
                textAlign: "start",
                width: "99%",
                backgroundColor: color1,
                color: color2,
                fontSize: "15px",
                boxShadow: "none",
              }}
              // onMouseOver={() => {
              //   setcolor18("#FF5700");
              // }}
              // onMouseOut={() => setcolor18("whitesmoke")}
            >
              <SiGeneralelectric /> General
            </MDBBtn>
            <a href="#!">
              <div
                className="mask"
                // style={{ backgroundColor: "#FF5700" }}
                style={{
                  backgroundColor: "rgba(255, 87, 0, 0.5)",
                  width: "99%",
                }}
              ></div>
            </a>
          </MDBRipple>
          <MDBRipple
            className="bg-image hover-overlay rounded"
            rippleTag="div"
            rippleColor="dark"
            style={{ width: "100%" }}
          >
            <MDBBtn
              className="me-1"
              style={{
                textTransform: "unset",
                backgroundColor: "#9a9b9c00",
                textAlign: "start",
                width: "99%",
                backgroundColor: color1,
                color: color2,
                fontSize: "15px",
                boxShadow: "none",
              }}
              // onMouseOver={() => {
              //   setcolor110("#FF5700");
              // }}
              // onMouseOut={() => setcolor110("whitesmoke")}
            >
              <MdFeedback /> Feedback
            </MDBBtn>
            <a href="#!">
              <div
                className="mask"
                // style={{ backgroundColor: "#FF5700" }}
                style={{
                  backgroundColor: "rgba(255, 87, 0, 0.5)",
                  width: "99%",
                }}
              ></div>
            </a>
          </MDBRipple>
          <MDBBtn
            className="me-1"
            style={{
              textTransform: "unset",
              backgroundColor: "#FF5700",
              textAlign: "start",
              width: "99%",
              // backgroundColor: color1,
              color: "white",
              fontSize: "15px",
              boxShadow: "none",
            }}
            onClick={logoutHandler}
          >
            <BiExit /> Logout
          </MDBBtn>
        </div>
      </div>
    </>
  );
};
export default Sidebar;

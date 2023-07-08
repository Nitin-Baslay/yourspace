import "./Home.css";
import logo from "../assets/logo.png";
import { FaCircle, FaAngleDoubleLeft } from "react-icons/fa";
import { LiaSearchSolid } from "react-icons/lia";
import { TbDashboard } from "react-icons/tb";
import {
  AiOutlinePlus,
  AiOutlineArrowRight,
  AiFillSwitcher,
} from "react-icons/ai";
import { PiCassetteTapeLight } from "react-icons/pi";
import { CgShoppingCart, CgMenuBoxed } from "react-icons/cg";
import { RiFolderReceivedLine, RiSecurePaymentFill } from "react-icons/ri";
import {
  MdOutlinePayments,
  MdOutlineAccountCircle,
  MdOutlineLiveHelp,
} from "react-icons/md";
import { BsPeopleFill } from "react-icons/bs";
import { IoMdNotificationsOutline } from "react-icons/io";
import {
  MDBInput,
  MDBBtn,
  MDBDropdown,
  MDBDropdownItem,
  MDBDropdownMenu,
  MDBDropdownToggle,
} from "mdb-react-ui-kit";

const Sidebar = () => {
  return (
    <>
      <div className="sidebar">
        <div className="first">
          <img src={logo} alt="logo" className="logo" />
          <h5 style={{ color: "#f9fafb" }}>Product Demo...</h5>
          <FaCircle className="circle" style={{ color: "#f9fafb" }} />
        </div>
        <p className="payment"> Vendor Payments</p>
        <p className="payment1"> Alt + /</p>
        <MDBInput
          label={<LiaSearchSolid style={{ color: "#f9fafb" }} />}
          id="form1"
          type="text"
        />
        <div>
          <MDBBtn
            className="me-1 create"
            color="success"
            style={{ textTransform: "unset", textAlign: "start" }}
          >
            <AiOutlinePlus /> Create
          </MDBBtn>
          <MDBBtn
            className="me-1"
            style={{
              textTransform: "unset",
              backgroundColor: "#252A3B",
              textAlign: "start",
            }}
          >
            <TbDashboard /> Dashboard
          </MDBBtn>
          <MDBBtn
            className="me-1"
            style={{
              textTransform: "unset",
              backgroundColor: "#252A3B",
              textAlign: "start",
            }}
          >
            <PiCassetteTapeLight /> Request
          </MDBBtn>
          <MDBDropdown>
            <MDBDropdownToggle
              style={{
                textTransform: "unset",
                backgroundColor: "#252A3B",
                textAlign: "start",
                width: "95%",
              }}
            >
              <CgShoppingCart /> Procure
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
                backgroundColor: "#252A3B",
                textAlign: "start",
                width: "95%",
              }}
            >
              <RiFolderReceivedLine /> Receive
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
                backgroundColor: "#252A3B",
                textAlign: "start",
                width: "95%",
              }}
            >
              <MdOutlinePayments /> Payables
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
                backgroundColor: "#252A3B",
                textAlign: "start",
                width: "95%",
              }}
            >
              <RiSecurePaymentFill /> Payments
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
                backgroundColor: "#252A3B",
                textAlign: "start",
                width: "95%",
              }}
            >
              <RiSecurePaymentFill /> Purchase
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
                backgroundColor: "#252A3B",
                textAlign: "start",
                width: "95%",
              }}
            >
              <BsPeopleFill /> Manage
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
          <MDBBtn
            className="me-1"
            style={{
              textTransform: "unset",
              backgroundColor: "#252A3B",
              textAlign: "start",
            }}
          >
            <AiFillSwitcher /> Switch Version
          </MDBBtn>
          <MDBBtn
            className="me-1"
            style={{
              textTransform: "unset",
              backgroundColor: "#252A3B",
              textAlign: "start",
            }}
          >
            <IoMdNotificationsOutline /> Notifications
          </MDBBtn>
          <MDBBtn
            className="me-1"
            style={{
              textTransform: "unset",
              backgroundColor: "#252A3B",
              textAlign: "start",
            }}
          >
            <FaAngleDoubleLeft /> Hide Menu
          </MDBBtn>
          <MDBBtn
            className="me-1"
            style={{
              textTransform: "unset",
              backgroundColor: "#252A3B",
              textAlign: "start",
            }}
          >
            <MdOutlineAccountCircle /> My Account
          </MDBBtn>
          <MDBBtn
            className="me-1"
            color="success"
            style={{ textTransform: "unset", textAlign: "start" }}
          >
            <MdOutlineLiveHelp /> Help Center
          </MDBBtn>
        </div>
      </div>
    </>
  );
};
export default Sidebar;

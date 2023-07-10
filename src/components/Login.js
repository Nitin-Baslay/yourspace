import React, { useState } from "react";
import "./Login.css";
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBInput,
} from "mdb-react-ui-kit";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [clr, setClr] = useState("black");
  const navigate = useNavigate();
  const emailHandler = (event) => {
    setEmail(event.target.value);
  };
  const passwordHandler = (event) => {
    setPassword(event.target.value);
  };
  const submitHandler = () => {
    axios
      .post(
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBEXYV30vRjeJos8EdwJJTUf-fR0vbHs7o",
        { email: email, password: password, returnSecureToken: true }
      )
      .then(() => {
        navigate("/home");
      })
      .catch((error) => {
        alert(error.response.data.error.message);
      });
  };
  return (
    <MDBContainer className="my-4">
      <MDBCard>
        <MDBRow className="g-0">
          <MDBCol md="6">
            <MDBCardImage
              src="https://www.your-space.in/wp-content/themes/online-courses/images/image_abt.png"
              alt="login form"
              className="rounded-start w-100"
            />
          </MDBCol>
          <MDBCol md="6" className="contain">
            <MDBCardBody className="d-flex flex-column">
              <div
                className="d-flex flex-row mt-2"
                style={{ marginLeft: "170px" }}
              >
                {/* <MDBIcon
                  fas
                  icon="cubes fa-3x me-3"
                  style={{ color: "#ff6219" }}
                /> */}
                <MDBCardImage
                  src="https://www.your-space.in/wp-content/themes/online-courses/images/logo.png"
                  alt="icon"
                  className="rounded-start w-50"
                  // style={{ animation: "slide 0.5s forwards", left: "0px" }}
                />
              </div>

              <h5
                className="fw-normal my-4 pb-3"
                style={{
                  letterSpacing: "1px",
                  textAlign: "center",
                }}
              >
                Sign into your account
              </h5>

              <MDBInput
                wrapperClass="mb-4"
                label="Email address"
                id="formControlLg"
                type="email"
                size="lg"
                onChange={emailHandler}
                style={{ cursor: "pointer" }}
              />
              <MDBInput
                wrapperClass="mb-4"
                label="Password"
                id="formControlLg"
                type="password"
                size="lg"
                onChange={passwordHandler}
                style={{ cursor: "pointer" }}
              />

              <MDBBtn
                className="mb-4 px-5 login"
                // color="dark"
                style={{ backgroundColor: clr }}
                size="lg"
                onClick={submitHandler}
                onMouseOver={() => {
                  setClr("#FF5700");
                }}
                onMouseOut={() => setClr("black")}
              >
                Login
              </MDBBtn>
              <a className="small text-muted" href="#!">
                Forgot password?
              </a>

              <div
                className="d-flex flex-row justify-content-start"
                style={{ marginTop: "50px" }}
              >
                <a href="#!" className="small text-muted me-1">
                  © Copyright 2023 All Rights Reserved by your space
                </a>
              </div>
            </MDBCardBody>
          </MDBCol>
        </MDBRow>
      </MDBCard>
    </MDBContainer>
  );
}

export default Login;

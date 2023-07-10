import { MDBCard, MDBCardBody } from "mdb-react-ui-kit";
import { CgMenuBoxed } from "react-icons/cg";
import "./Dashboard.css";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useSelector } from "react-redux";
import { Line, Bar } from "react-chartjs-2";
import "chart.js/auto";
import React, { useState, useEffect } from "react";
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";

const Dashboard = () => {
  const color1 = useSelector((state) => state.color2);
  const color2 = useSelector((state) => state.color3);
  const data = [
    {
      id: 1,
      name: "John",
      age: 25,
      location: "Delhi",
      active: 50,
      inactive: 25,
      pending: 10,
    },
    {
      id: 2,
      name: "Jane",
      age: 30,
      location: "Mumbai",
      active: 90,
      inactive: 30,
      pending: 15,
    },
    {
      id: 3,
      name: "Bob",
      age: 23,
      location: "Kolkata",
      active: 100,
      inactive: 10,
      pending: 25,
    },
    {
      id: 4,
      name: "Revi",
      age: 31,
      location: "Chennai",
      active: 70,
      inactive: 5,
      pending: 1,
    },
    {
      id: 5,
      name: "Mars",
      age: 39,
      location: "Banaglore",
      active: 120,
      inactive: 40,
      pending: 29,
    },
    {
      id: 6,
      name: "Park",
      age: 22,
      location: "NOIDA",
      active: 50,
      inactive: 10,
      pending: 5,
    },
    {
      id: 7,
      name: "Karl",
      age: 26,
      location: "Amritsar",
      active: 89,
      inactive: 12,
      pending: 25,
    },
    {
      id: 8,
      name: "Alex",
      age: 38,
      location: "TamilNadu",
      active: 125,
      inactive: 25,
      pending: 20,
    },
    {
      id: 9,
      name: "Wayne",
      age: 25,
      location: "Kanpur",
      active: 99,
      inactive: 10,
      pending: 18,
    },
    {
      id: 10,
      name: "Foer",
      age: 30,
      location: "Jammu",
      active: 60,
      inactive: 20,
      pending: 2,
    },
  ];
  const [chartData, setChartData] = useState({
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        label: "2023",
        data: [12, 19, 3, 5, 2, 3],
        fill: false,
        borderColor: "rgb(75, 192, 192)",
      },
    ],
  });

  useEffect(() => {
    const interval = setInterval(() => {
      // Update the chart data with new values
      const newData = {
        ...chartData,
        datasets: [
          {
            ...chartData.datasets[0],
            data: chartData.datasets[0].data.map(
              (value) => value + Math.random() * 10
            ),
          },
        ],
      };
      setChartData(newData);
    }, 3000);
  });
  return (
    <div className="right" style={{ backgroundColor: color1 }}>
      <div className="top" style={{ backgroundColor: color1 }}>
        <h5 style={{ marginLeft: "40px", color: color2 }}>
          DASHBOARD - YOUR SPACE
        </h5>
        {/* <CgMenuBoxed
          style={{ width: "70px", height: "30px", borderRadius: "10px" }}
        /> */}
      </div>
      <div className="masterOne">
        <div style={{ display: "flex" }}>
          <MDBCard
            style={{
              width: "45%",
              height: "52vh",
              margin: "auto",
              marginTop: "25px",
              color: "#FF3375",
              fontWeight: "bolder",
            }}
          >
            <MDBCardBody className="action">ALL STUDENT SECTION</MDBCardBody>

            <div className="bars">
              <div className="bar">
                <CircularProgressbar value={75} text={`75%`} />
                <h5 className="text">Total Students</h5>
              </div>
              <div className="bar">
                <CircularProgressbar value={50} text={`50%`} />
                <h5 className="text">Active Students</h5>
              </div>
              <div className="bar">
                <CircularProgressbar value={15} text={`15%`} />
                <h5 className="text">Pending Students</h5>
              </div>
            </div>
          </MDBCard>
          <MDBCard
            style={{
              width: "45%",
              margin: "auto",
              marginTop: "25px",
              color: "#F6B500",
              fontWeight: "bolder",
            }}
          >
            <MDBCardBody className="action">PHYSICAL CHECK-IN</MDBCardBody>
            <div style={{ height: "40vh" }}>
              <Line
                data={chartData}
                options={{
                  animation: {
                    duration: 0, // Disable initial animation
                  },
                }}
              />
            </div>
          </MDBCard>
        </div>
        <MDBCard
          style={{
            width: "97%",
            margin: "auto",
            marginTop: "25px",
            color: "#6FCA9D",
            fontWeight: "bolder",
          }}
        >
          <MDBCardBody className="action">REQUESTS</MDBCardBody>
          <hr
            style={{
              width: "97%",
              margin: "auto",
              marginTop: "-15px",
              marginBottom: "10px",
              borderTop: "5px solid #A4A4A4",
            }}
          />
          <div className="smallCard">
            <div className="card1">
              <h5>2</h5>
              <p className="cardtext">FEES CHANGE</p>
            </div>
            <div className="card1">
              <h5>5</h5>
              <p className="cardtext">SD REQUEST</p>
            </div>
            <div className="card1">
              <h5>10</h5>
              <p className="cardtext">NEW SD</p>
            </div>
            <div className="card1">
              <h5>12</h5>
              <p className="cardtext">FORFEITURE</p>
            </div>
            <div className="card1">
              <h5>20</h5>
              <p className="cardtext">SD ADJUSTMENT</p>
            </div>
          </div>
        </MDBCard>
        <div style={{ display: "flex" }}>
          <MDBCard
            style={{
              width: "45%",
              margin: "auto",
              marginTop: "25px",
              color: "#F6B500",
              fontWeight: "bolder",
            }}
          >
            <MDBCardBody className="action">MONTH WISE REVENUE</MDBCardBody>
            <hr
              style={{
                width: "97%",
                margin: "auto",
                marginTop: "-15px",
                borderTop: "5px solid #A4A4A4",
              }}
            />

            <div style={{ height: "40vh" }}>
              <Bar
                data={chartData}
                options={{
                  animation: {
                    duration: 0, // Disable initial animation
                  },
                  scales: {
                    y: {
                      beginAtZero: true,
                    },
                  },
                }}
              />
            </div>
          </MDBCard>
          <MDBCard
            style={{
              width: "45%",
              height: "50vh",
              margin: "auto",
              marginTop: "25px",
              color: "#FF3375",
              fontWeight: "bolder",
            }}
          >
            <MDBCardBody className="action">RENT</MDBCardBody>
            <hr
              style={{
                width: "97%",
                margin: "auto",
                marginTop: "-65px",
                marginBottom: "20px",
                borderTop: "5px solid #A4A4A4",
              }}
            />

            <div className="smallCard">
              <div className="card two">
                <h5>50</h5>
                <p className="cardtext">PAID</p>
              </div>
              <div className="card two">
                <h5>70</h5>
                <p className="cardtext">PARTIAL PAID</p>
              </div>
              <div className="card two">
                <h5>2479</h5>
                <p className="cardtext">PENDING</p>
              </div>
            </div>

            <MDBCardBody
              className="action"
              style={{ color: "black", marginTop: "-10px" }}
            >
              DEFAULTERS
            </MDBCardBody>
            <hr
              style={{
                width: "97%",
                margin: "auto",
                marginTop: "-35px",
                marginBottom: "20px",
                borderTop: "5px solid #A4A4A4",
              }}
            />
            <div className="smallCard">
              <div className="card two">
                <h5>8</h5>
                <p className="cardtext">JUNE</p>
              </div>
              <div className="card two">
                <h5>6</h5>
                <p className="cardtext">MAY</p>
              </div>
              <div className="card two">
                <h5>15</h5>
                <p className="cardtext">APRIL</p>
              </div>
            </div>
          </MDBCard>
        </div>
      </div>
      <div className="cardThree">
        <div className="three">
          <MDBCard
            style={{
              width: "97%",
              margin: "auto",
              marginTop: "25px",
              color: "#578CB8",
              fontWeight: "bolder",
            }}
          >
            <MDBCardBody className="action">COMPLAINTS</MDBCardBody>
            <hr
              style={{
                width: "97%",
                margin: "auto",
                marginTop: "-15px",
                borderTop: "5px solid #A4A4A4",
                marginBottom: "20px",
              }}
            />
            <div className="smallCard">
              <div className="card two">
                <h5>56</h5>
                <p className="cardtext">TOTAL COMPLAINTS</p>
              </div>
              <div className="card two">
                <h5>40</h5>
                <p className="cardtext">CLOSED COMPLAINTS</p>
              </div>
              <div className="card two">
                <h5>16</h5>
                <p className="cardtext">OPEN COMPLAINTS</p>
              </div>
              <div className="card two">
                <h5>6</h5>
                <p className="cardtext">ESCALATED COMPLAINTS</p>
              </div>
            </div>
          </MDBCard>
        </div>
        <div className="four">
          <MDBCard
            style={{
              width: "100%",
              margin: "auto",
              marginTop: "25px",
              color: "#FF3375",
              fontWeight: "bolder",
            }}
          >
            <MDBCardBody className="action">GATEPASS</MDBCardBody>
            <hr
              style={{
                width: "97%",
                margin: "auto",
                marginTop: "-15px",
                borderTop: "5px solid #A4A4A4",
                marginBottom: "20px",
              }}
            />
            <div className="smallCard">
              <div className="card two">
                <h5>2</h5>
                <p className="cardtext">APPROVED</p>
              </div>
              <div className="card two">
                <h5>10</h5>
                <p className="cardtext">PENDING</p>
              </div>
            </div>
          </MDBCard>
        </div>
      </div>
      <MDBCard
        style={{
          width: "97%",
          margin: "auto",
          marginTop: "25px",
          color: "#6FCA9D",
          fontWeight: "bolder",
        }}
      >
        <MDBCardBody className="action">FOOD</MDBCardBody>
        <hr
          style={{
            width: "97%",
            margin: "auto",
            marginTop: "-15px",
            marginBottom: "10px",
            borderTop: "5px solid #A4A4A4",
          }}
        />
        <div className="smallCard">
          <div className="card1">
            <h5>120</h5>
            <p className="cardtext">UPDATED</p>
          </div>
          <div className="card1">
            <h5>20</h5>
            <p className="cardtext">PENDING</p>
          </div>
        </div>
      </MDBCard>
      <MDBCard
        style={{
          width: "97%",
          margin: "auto",
          marginTop: "25px",
          color: "#FF5700",
          fontWeight: "bolder",
        }}
      >
        <MDBCardBody className="action">PROPERTY MANAGERS</MDBCardBody>
        <hr
          style={{
            width: "97%",
            margin: "auto",
            marginTop: "-15px",
            marginBottom: "10px",
            borderTop: "5px solid #A4A4A4",
          }}
        />
        <div>
          <Table>
            <TableHead>
              <TableRow
                style={{ backgroundColor: "#FF5700", textAlign: "center" }}
              >
                <TableCell>ID</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Property Location</TableCell>
                <TableCell>Active Students</TableCell>
                <TableCell>Inactive Students</TableCell>
                <TableCell>Pending Agreements</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((item) => (
                <TableRow key={item.id}>
                  <TableCell>{item.id}</TableCell>
                  <TableCell>{item.name}</TableCell>
                  <TableCell>{item.location}</TableCell>
                  <TableCell>{item.active}</TableCell>
                  <TableCell>{item.inactive}</TableCell>
                  <TableCell>{item.pending}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </MDBCard>
    </div>
  );
};
export default Dashboard;

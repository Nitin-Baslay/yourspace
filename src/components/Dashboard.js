import { MDBCard, MDBCardBody } from "mdb-react-ui-kit";
import { CgMenuBoxed } from "react-icons/cg";
const Dashboard = () => {
  return (
    <div className="right">
      <div className="top">
        <h5 style={{ marginLeft: "40px" }}>DASHBOARD - Vendor Payments</h5>
        <CgMenuBoxed style={{ width: "70px", height: "30px" }} />
      </div>
      <div className="masterOne">
        <div>
          <MDBCard
            style={{
              width: "97%",
              margin: "auto",
              marginTop: "25px",
              color: "#FF3375",
              fontWeight: "bolder",
            }}
          >
            <MDBCardBody className="action">AWAITING ACTIONS</MDBCardBody>
            <hr
              style={{
                width: "97%",
                margin: "auto",
                marginTop: "-15px",
                marginBottom: "30px",
                borderTop: "5px solid #A4A4A4",
              }}
            />
          </MDBCard>
        </div>
        <div>
          <MDBCard
            style={{
              width: "97%",
              margin: "auto",
              marginTop: "25px",
              color: "#F6B500",
              fontWeight: "bolder",
            }}
          >
            <MDBCardBody className="action">PAYMENT TICKETS</MDBCardBody>
            <hr
              style={{
                width: "97%",
                margin: "auto",
                marginTop: "-15px",
                borderTop: "5px solid #A4A4A4",
              }}
            />
            <MDBCardBody className="action" style={{ color: "black" }}>
              COMPANY PAYMENT TICKETS
            </MDBCardBody>
            <div className="smallCard">
              <div className="card">
                <h5>10</h5>
                <p className="cardtext">All</p>
              </div>
              <div className="card">
                <h5>0</h5>
                <p className="cardtext">Processing</p>
              </div>
              <div className="card">
                <h5>3</h5>
                <p className="cardtext">Pending Credit</p>
              </div>
              <div className="card">
                <h5>0</h5>
                <p className="cardtext">Scheduled</p>
              </div>
              <div className="card">
                <h5>0</h5>
                <p className="cardtext">Partially Completed</p>
              </div>
              <div className="card">
                <h5>0</h5>
                <p className="cardtext">Failed</p>
              </div>
            </div>
            <hr
              style={{
                width: "97%",
                margin: "auto",
                marginTop: "10px",
                borderBottom: "5px solid #A4A4A4",
              }}
            />
            <MDBCardBody className="action" style={{ color: "black" }}>
              MY PAYMENT TICKETS
            </MDBCardBody>
            <div className="smallCard">
              <div className="card">
                <h5>10</h5>
                <p className="cardtext">All</p>
              </div>
              <div className="card">
                <h5>0</h5>
                <p className="cardtext">Processing</p>
              </div>
              <div className="card">
                <h5>3</h5>
                <p className="cardtext">Pending Credit</p>
              </div>
              <div className="card">
                <h5>0</h5>
                <p className="cardtext">Scheduled</p>
              </div>
              <div className="card">
                <h5>0</h5>
                <p className="cardtext">Partially Completed</p>
              </div>
              <div className="card">
                <h5>0</h5>
                <p className="cardtext">Failed</p>
              </div>
            </div>
          </MDBCard>
        </div>
        <div className="cardThree">
          <div className="three">
            <MDBCard
              style={{
                width: "97%",
                margin: "auto",
                marginTop: "25px",
                color: "#F6B500",
                fontWeight: "bolder",
              }}
            >
              <MDBCardBody className="action">PURCHASE ORDER</MDBCardBody>
              <hr
                style={{
                  width: "97%",
                  margin: "auto",
                  marginTop: "-15px",
                  borderTop: "5px solid #A4A4A4",
                }}
              />
              <MDBCardBody className="action" style={{ color: "black" }}>
                COMPANY PURCHASE ORDER
              </MDBCardBody>
              <div className="smallCard">
                <div className="card two">
                  <h5>1714</h5>
                  <p className="cardtext">All</p>
                </div>
                <div className="card two">
                  <h5>65</h5>
                  <p className="cardtext">Processing</p>
                </div>
                <div className="card two">
                  <h5>1478</h5>
                  <p className="cardtext">Approved</p>
                </div>
                <div className="card two">
                  <h5>4</h5>
                  <p className="cardtext">Send to Vendor</p>
                </div>
                <div className="card two">
                  <h5>0</h5>
                  <p className="cardtext">Vendor Confirmed</p>
                </div>
              </div>
              <hr
                style={{
                  width: "97%",
                  margin: "auto",
                  marginTop: "10px",
                  borderBottom: "5px solid #A4A4A4",
                }}
              />
              <MDBCardBody className="action" style={{ color: "black" }}>
                MY PURCHASE ORDER
              </MDBCardBody>
              <div className="smallCard">
                <div className="card two">
                  <h5>15</h5>
                  <p className="cardtext">All</p>
                </div>
                <div className="card two">
                  <h5>1</h5>
                  <p className="cardtext">Processing</p>
                </div>
                <div className="card two">
                  <h5>6</h5>
                  <p className="cardtext">Approved</p>
                </div>
                <div className="card two">
                  <h5>0</h5>
                  <p className="cardtext">Send to Vendor</p>
                </div>
                <div className="card two">
                  <h5>0</h5>
                  <p className="cardtext">Vendor Confirmed</p>
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
              <MDBCardBody className="action">INVOICES</MDBCardBody>
              <hr
                style={{
                  width: "97%",
                  margin: "auto",
                  marginTop: "-15px",
                  borderTop: "5px solid #A4A4A4",
                }}
              />
              <MDBCardBody className="action" style={{ color: "black" }}>
                COMPANY INVOICES
              </MDBCardBody>
              <div className="smallCard">
                <div className="card two">
                  <h5>4741</h5>
                  <p className="cardtext">All</p>
                </div>
                <div className="card two">
                  <h5>2085</h5>
                  <p className="cardtext">Processing</p>
                </div>
                <div className="card two">
                  <h5>2479</h5>
                  <p className="cardtext">Pending Amount</p>
                </div>
                <div className="card two">
                  <h5>127</h5>
                  <p className="cardtext">Paid</p>
                </div>
              </div>
              <hr
                style={{
                  width: "97%",
                  margin: "auto",
                  marginTop: "10px",
                  borderBottom: "5px solid #A4A4A4",
                }}
              />
              <MDBCardBody className="action" style={{ color: "black" }}>
                MY INVOICES
              </MDBCardBody>
              <div className="smallCard">
                <div className="card two">
                  <h5>19</h5>
                  <p className="cardtext">All</p>
                </div>
                <div className="card two">
                  <h5>13</h5>
                  <p className="cardtext">Processing</p>
                </div>
                <div className="card two">
                  <h5>3</h5>
                  <p className="cardtext">Pending Amount</p>
                </div>
                <div className="card two">
                  <h5>0</h5>
                  <p className="cardtext">Paid</p>
                </div>
              </div>
            </MDBCard>
          </div>
        </div>
      </div>
      <div>
        <MDBCard
          style={{
            width: "97%",
            margin: "auto",
            marginTop: "25px",
            color: "#6FCA9D",
            fontWeight: "bolder",
          }}
        >
          <MDBCardBody className="action">UTILITY BILLS</MDBCardBody>
          <hr
            style={{
              width: "97%",
              margin: "auto",
              marginTop: "-15px",
              borderTop: "5px solid #A4A4A4",
            }}
          />
          <MDBCardBody className="action" style={{ color: "black" }}>
            COMPANY UTILITY BILLS
          </MDBCardBody>
          <div className="smallCard">
            <div className="card">
              <h5>0</h5>
              <p className="cardtext">All</p>
            </div>
            <div className="card">
              <h5>0</h5>
              <p className="cardtext">Open</p>
            </div>
            <div className="card">
              <h5>0</h5>
              <p className="cardtext">Processing</p>
            </div>
            <div className="card">
              <h5>3</h5>
              <p className="cardtext">Pending Payment</p>
            </div>
            <div className="card">
              <h5>0</h5>
              <p className="cardtext">Rejected</p>
            </div>
            <div className="card">
              <h5>0</h5>
              <p className="cardtext">Paid</p>
            </div>
            <div className="card">
              <h5>0</h5>
              <p className="cardtext">Voided</p>
            </div>
            <div className="card">
              <h5>0</h5>
              <p className="cardtext">Expired</p>
            </div>
          </div>
        </MDBCard>
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
            <MDBCardBody className="action">PO ADVANCES</MDBCardBody>
            <hr
              style={{
                width: "97%",
                margin: "auto",
                marginTop: "-15px",
                borderTop: "5px solid #A4A4A4",
              }}
            />
            <MDBCardBody className="action" style={{ color: "black" }}>
              MY PO ADVANCES
            </MDBCardBody>
            <div className="smallCard">
              <div className="card two">
                <h5>1</h5>
                <p className="cardtext">All</p>
              </div>
              <div className="card two">
                <h5>1</h5>
                <p className="cardtext">To Be Processed</p>
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
            <MDBCardBody className="action">GRN</MDBCardBody>
            <hr
              style={{
                width: "97%",
                margin: "auto",
                marginTop: "-15px",
                borderTop: "5px solid #A4A4A4",
              }}
            />
            <MDBCardBody className="action" style={{ color: "black" }}>
              MY GRN
            </MDBCardBody>
            <div className="smallCard">
              <div className="card two">
                <h5>6</h5>
                <p className="cardtext">All</p>
              </div>
              <div className="card two">
                <h5>0</h5>
                <p className="cardtext">Due This Week</p>
              </div>
              <div className="card two">
                <h5>0</h5>
                <p className="cardtext">Due This Month</p>
              </div>
              <div className="card two">
                <h5>6</h5>
                <p className="cardtext">Overdue</p>
              </div>
              <div className="card two">
                <h5>0</h5>
                <p className="cardtext">Upcoming</p>
              </div>
            </div>
          </MDBCard>
        </div>
      </div>
    </div>
  );
};
export default Dashboard;

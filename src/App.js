import { Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Nav from "./components/Nav";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        {
          <Route
            path="/home"
            element={
              <>
                <Nav />
                <Sidebar />
                <Dashboard />
              </>
            }
          />
        }
      </Routes>
      {/* <Login /> */}
      {/* <Nav />
      <Sidebar /> */}
    </div>
  );
}

export default App;

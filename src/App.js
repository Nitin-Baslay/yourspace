import "./App.css";
import Central from "./components/Central";
import Test from "./components/Test";
import Sidebar from "./components/Sidebar";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <>
              {" "}
              <Sidebar />
              <Dashboard />
            </>
          }
        />
      </Routes>
      {/* <Test /> */}
      {/* <Central /> */}
    </div>
  );
}

export default App;

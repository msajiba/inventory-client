import "./App.css";
import { ToastContainer } from "react-toastify";
import Dashboard from "./Dashboard/Dashboard";
import { Routes, Route } from "react-router-dom";
import Chart from "./pages/Chart/Chart";
import routes from "./routes/routes";
import Login from "./Auth/Login";
import RequireAuth from "./Auth/RequireAuth";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="dashboard"
          element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          }
        >
          <Route index element={<Chart />} />
          {routes.map(({ path, Component }, index) => (
            <Route key={index} path={path} element={<Component />} />
          ))}
        </Route>
      </Routes>

      <ToastContainer />
    </>
  );
}

export default App;

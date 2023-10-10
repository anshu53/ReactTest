import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./comonents/Home";
import Todo from "./comonents/Todo";
import Login from "./comonents/Login";
import UsersList from "./comonents/UsersList";
import Logout from "./comonents/Logout";
import Navbars from "./comonents/Navbars";
import Protected from "./comonents/Protected";
function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <Navbars />
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Protected Component={Home} />} />
            <Route path="/todo" element={<Protected Component={Todo} />} />
            <Route
              path="/userlist"
              element={<Protected Component={UsersList} />}
            />
            <Route path="/logout" element={<Protected Component={Logout} />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;

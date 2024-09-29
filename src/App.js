import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import Home from "./Pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserList from './Pages/UserList';
import User from "./Pages/User";

function App() {
  return (
    <BrowserRouter>
      <Topbar />
      <div className="containerr">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path= "/userList" element={<UserList/>} />
          <Route path= "/user/:userId" element={<User/>} />
          <Route path="*" element={''} />
        </Routes>
        </div>
    </BrowserRouter>

  );
}

export default App;

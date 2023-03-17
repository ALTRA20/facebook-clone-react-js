import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Profile from "./pages/profile/Profile";
import Register from "./pages/register/Register";
import FriendRequest from "./pages/friendRequest/FriendRequest";
import Message from "./pages/message/Message";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="/profile/:id" element={<Profile />} />
          <Route path="/register" element={<Register />} />
          <Route path="/friendRequest" element={<FriendRequest />} />
          <Route path="/message" element={<Message />} />
        </Routes>
      </BrowserRouter>
    </>
    )
}

export default App;
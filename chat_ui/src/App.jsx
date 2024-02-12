import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import UpdateProfile from "./pages/UpdateProfile";
import { Toaster } from "react-hot-toast";
const App = () => {
  return (
    <BrowserRouter>
      <div className="m-auto">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/update" element={<UpdateProfile />} />
        </Routes>
        <Toaster />
      </div>
    </BrowserRouter>
  );
};

export default App;

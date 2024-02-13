import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import UpdateProfile from "./pages/UpdateProfile";
import { Toaster } from "react-hot-toast";
import useChatStore from "./lib/store/store";
const App = () => {
  const user = useChatStore((state) => state.user);
  return (
    <BrowserRouter>
      <div className="p-4 h-screen flex items-center justify-center">
        <Routes>
          <Route
            path="/"
            element={
              user ? <Home /> : <Navigate to={"/login"} replace={true} />
            }
          />
          <Route
            path="/login"
            element={!user ? <Login /> : <Navigate to={"/"} replace={true} />}
          />
          <Route
            path="/signup"
            element={!user ? <Signup /> : <Navigate to={"/"} replace={true} />}
          />
          <Route
            path="/update"
            element={
              user ? (
                <UpdateProfile />
              ) : (
                <Navigate to={"/login"} replace={true} />
              )
            }
          />
        </Routes>
        <Toaster />
      </div>
    </BrowserRouter>
  );
};

export default App;

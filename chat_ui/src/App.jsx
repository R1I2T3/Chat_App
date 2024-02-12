import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import UpdateProfile from "./pages/UpdateProfile";
import { Toaster } from "react-hot-toast";
import useChatStore from "./lib/store/store";
import { useEffect, useState } from "react";
const App = () => {
  const user = useChatStore((state) => state.user);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  useEffect(() => {
    if (user) {
      setIsAuthenticated(true);
    }
  }, [user]);
  return (
    <BrowserRouter>
      <div className="p-4 h-screen flex items-center justify-center">
        <Routes>
          <Route
            path="/"
            element={
              isAuthenticated ? (
                <Home />
              ) : (
                <Navigate to={"/login"} replace={true} />
              )
            }
          />
          <Route
            path="/login"
            element={
              !isAuthenticated ? (
                <Login />
              ) : (
                <Navigate to={"/"} replace={true} />
              )
            }
          />
          <Route
            path="/signup"
            element={
              !isAuthenticated ? (
                <Signup />
              ) : (
                <Navigate to={"/"} replace={true} />
              )
            }
          />
          <Route
            path="/update"
            element={
              isAuthenticated ? (
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

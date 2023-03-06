/* eslint-disable jsx-a11y/anchor-is-valid */
import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import { Home } from "../src/Components/home/home";
import { Register } from "./Components/register/register";
import { Login } from "./Components/register/login";
import { Viewposts } from "./Components/posts/viewposts";
import { Header } from "./Components/home/header";
import { AuthProvider } from "./Components/context";

function App() {
  
  return (
    <>
    <AuthProvider>
    <Header/>
       <div className="isolate">
          <Routes>
            <Route exact path="/home" element={<Home />} />
            <Route path="/" element={<Navigate replace to="/home" />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/ViewPosts" element={<Viewposts />} />
          </Routes>
      </div>
    </AuthProvider>
    </>
  );
}

export default App;

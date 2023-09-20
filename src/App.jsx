import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import LoginForm from "./components/LoginForm";

function App() {
  return (
    <>
      <ToastContainer position="top-right" autoClose={3000} />
      <LoginForm />
    </>
  );
}

export default App;

import Header from "./shared/Header";
import NotFound from "./shared/NotFound";
import Home from "./pages/Home";
import Details from "./pages/Details";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { Fragment } from "react";

function App() {
  return (
    <Fragment>
      <Header />
      <ToastContainer position="bottom-right" />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="details" element={<Details />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Fragment>
  );
}

export default App;

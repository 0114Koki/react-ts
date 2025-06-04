import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router";
import Header from "./components/Header";
import S20attributeChange from "./pages/S20attributeChange";
import Home from "./pages/Home";
import React from "react";
import S30onClickEvent from "./pages/S30onClickEvent";
import Ex30 from "./pages/Ex30";
import Ex50 from "./pages/Ex50";
import Ex70 from "./pages/Ex70";
import Ex80 from "./pages/Ex80";
import Ex90 from "./pages/Ex90";
import Ex100 from "./pages/Ex100";
import ZipSearch from "./pages/ZipSearch";
import Ex110 from "./pages/Ex110";
import Ex120 from "./pages/Ex120";
import Ex130 from "./pages/Ex130";
import Ex140 from "./pages/Ex140";
import Ex170 from "./pages/Ex170";
import Ex180 from "./pages/Ex180";
import S220 from "./pages/S220";

const App: React.FC = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/s20" element={<S20attributeChange />} />
          <Route path="/s30" element={<S30onClickEvent />} />
          <Route path="/ex30" element={<Ex30 />} />
          <Route path="/ex50" element={<Ex50 />} />
          <Route path="/ex70" element={<Ex70 />} />
          <Route path="/ex80" element={<Ex80 />} />
          <Route path="/ex90" element={<Ex90 />} />
          <Route path="/ex100" element={<Ex100 />} />
          <Route path="/zipsearch" element={<ZipSearch />} />
          <Route path="/ex110" element={<Ex110 />} />
          <Route path="/ex120" element={<Ex120 />} />
          <Route path="/ex130" element={<Ex130 />} />
          <Route path="/ex140" element={<Ex140 />} />
          <Route path="/ex170" element={<Ex170 />} />
          <Route path="/ex180" element={<Ex180 />} />
          <Route path="/s220" element={<S220 />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;

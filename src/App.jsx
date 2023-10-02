import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { useContext, useEffect } from "react";
import { server } from "./main";
import axios from "axios";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Search from "./components/Search";
import { MatchedStudents } from "./components/MatchedStudents";



function App() {
  return (

    <Router >
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/find" element={<Search />} />
        <Route path="/matchedStudents" element={<MatchedStudents />} />
        <Route path="*" element={<Home />} />
      </Routes>

      <Toaster
        toastOptions={{
          className: '',
          style: {
            // border: '1px solid ',
            padding: '10px',
            // color: '#713200',
            marginTop: '-2px'
          },
        }}

      />
      <Footer />
    </Router>

  );
}


export default App

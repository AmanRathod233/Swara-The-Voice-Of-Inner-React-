import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from "./pages/Home";
import Aboutus from "./pages/Aboutus";
import Service from "./pages/Service";
import Resource from "./pages/Resource";
import Contact from "./pages/Contact";
import Privacy_Policy from "./pages/Privacy_Policy";
import FAQs from "./pages/FAQs";
import Term_Condition from "./pages/Term_condition";
import SingleBlog1 from "./pages/SingleBlog1";
import SingleBlog2 from "./pages/SingleBlog2";
import SingleBlog3 from "./pages/SingleBlog3";
import Expert from "./pages/Expert";
import ScrollToTop from "./component/ScrolltoTop";


function App() {

  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Aboutus" element={<Aboutus />} />
        <Route path="/Service" element={<Service />} />
        <Route path="/Resource" element={<Resource />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Privacy & Policy" element={<Privacy_Policy />} />
        <Route path="/faqs" element={<FAQs />} />
        <Route path="/TermCondition" element={<Term_Condition />} />
        <Route path="/SingleBlog1" element={<SingleBlog1 />} />
        <Route path="/SingleBlog2" element={<SingleBlog2 />} />
        <Route path="/SingleBlog3" element={<SingleBlog3 />} />
        <Route path="/Expert" element={<Expert />} />
      </Routes>
    </Router>
  );
}

export default App;

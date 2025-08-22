import React from "react";
import styles from "../styles/components/Main.module.css";
import Home from "../views/Home";
import Lessons from "../views/Lessons";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Breadcrumbs from "./Breadcrumbs";

function Main() {
  return (
    <main className={styles.main}>
      <Router>
        <Breadcrumbs />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/lessons" element={<Lessons />} />
        </Routes>
      </Router>
    </main>
  );
}

export default Main;

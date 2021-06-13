import React, { useState } from "react";
import "./App.css";

function App() {
  const [showNav, setShowNav] = useState(false);
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button className="nav" onClick={() => setShowNav(true)}>
        |||
      </button>
      {showNav && (
        <div className="sidbar">
          <header className="header">
            <h1 className="title">Codding Addict</h1>
            <button onClick={() => setShowNav(false)}>X</button>
          </header>
          <div className="links">
            <ul className="linkCont">
              <li className="link">
                <p>
                  <span className="fa fa-home"></span>
                  <span className="text">Home</span>
                </p>
              </li>
              <li className="link">
                <p>
                  <span className="fa fa-users"></span>
                  <span className="text">Team</span>
                </p>
              </li>
              <li className="link">
                <p>
                  <span className="fa fa-folder-open"></span>
                  <span className="text">Projects</span>
                </p>
              </li>
              <li className="link">
                <p>
                  <span className="fa fa-calendar"></span>
                  <span className="text">Calender</span>
                </p>
              </li>
              <li className="link">
                <p>
                  <span className="fa fa-file"></span>
                  <span className="text">Documents</span>
                </p>
              </li>
            </ul>
          </div>
          <div className="social-links">
            <ul className="social-link">
              <li className="social">
                <span className="fa fa-facebook"></span>
              </li>
              <li className="social">
                <span className="fa fa-twitter"></span>
              </li>
              <li className="social">
                <span className="fa fa-linkedin"></span>
              </li>
              <li className="social">
                <span className="fa fa-diamond"></span>
              </li>
            </ul>
          </div>
        </div>
      )}

      <button className="openModal" onClick={() => setShowModal(true)}>
        Show Modal
      </button>

      {showModal && (
        <div className="modal">
          <header className="header">
            <h1 className="title">Modal</h1>
            <button onClick={() => setShowModal(false)}>X</button>
          </header>
        </div>
      )}
    </>
  );
}

export default App;

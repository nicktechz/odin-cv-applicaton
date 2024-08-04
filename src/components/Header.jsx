import Button from "./Button";
import "../styles/components/Header.css";
import Alert from "./Alert";
import { useState } from "react";

export default function Header() {
  const [modalActive, setModalActive] = useState(false);
  function showModal() {
    setModalActive(true);
    setTimeout(() => {
      setModalActive(false);
    }, 5000);
  }
  return (
    <nav className="header">
      <Alert isActive={modalActive} />
      <div className="headerWraper">
        <section className="headerFirstSection">
          <div>
            <a href="/">
              <img src="src/assets/img/logo.svg" alt="" className="logo" />
            </a>
          </div>
          <ul>
            <li>
              <a href="">Creator</a>
            </li>
            <li>
              <a
                href="https://github.com/nicktechz/odin-cv-applicaton"
                target="_blank"
                rel="noopen noreferrer"
              >
                Repository
              </a>
            </li>
            <li>
              <a href="mailto:nicolasrueda0510@gmail.com">Contact</a>
            </li>
          </ul>
        </section>
        <section>
          <Button text="Download PDF" onClick={showModal} />
        </section>
      </div>
    </nav>
  );
}

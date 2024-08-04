import Button from "./Button";
import "../styles/components/Header.css";

export default function Header() {
  return (
    <nav className="header">
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
              <a href="">Repository</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
          </ul>
        </section>
        <section>
          <Button text="Download PDF" />
        </section>
      </div>
    </nav>
  );
}

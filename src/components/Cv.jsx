import "../styles/components/Cv.css";
export default function Cv({ basicInfo }) {
  return (
    <section className="cvBox">
      <header className="cvHeader">
        <div className="cvHeaderBasicInfo">
          <img src="src/assets/icons/userMan.svg" alt="" className="cvAvatar" />
          <div>
            <h3>Nicolas Rueda 🇨🇴</h3>
            <span>Full Stack Engineer</span>
          </div>
        </div>
        <div className="cvHeaderContactInfo">
          <div className="cvContactDetail">
            <span className="cvContactItem">nicolasrueda0510@gmail.com</span>
            <img src="src/assets/icons/mail.svg" alt="" />
          </div>
          <div className="cvContactDetail">
            <span className="cvContactItem">+57 3244924308</span>
            <img src="src/assets/icons/phone.svg" alt="" />
          </div>
          <div className="cvContactDetail">
            <span className="cvContactItem">
              <a href="" style={{ color: "var(--color-pire-white)" }}>
                https://nicktechz.me
              </a>
            </span>
            <img src="src/assets/icons/globe.svg" alt="" />
          </div>
        </div>
      </header>
      <main className="cvBody">
        <section className="cvSection">
          <h3 className="cvSectionTitle">Biography</h3>
          <p className="cvSectionDetails">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum
            nihil omnis debitis porro voluptate assumenda, impedit architecto
            sint aliquam atque quos. Esse facere, aut eligendi molestiae
            necessitatibus illum sequi maxime.
          </p>
        </section>
        <section className="cvSection">
          <h3 className="cvSectionTitle">Educational experience</h3>
          <ul className="cvSectionDetails cvEducation">
            <li className="cvCard">
              <h4>Colegio Virtual Siglo XXI</h4>
              <p>Grado de bachiller académico</p>
              <p>2005 - 2024</p>
            </li>
            <li className="cvCard">
              <h4>Colegio Virtual Siglo XXI</h4>
              <p>Grado de bachiller académico</p>
              <p>2005 - 2024</p>
            </li>
            <li className="cvCard">
              <h4>Colegio Virtual Siglo XXI</h4>
              <p>Grado de bachiller académico</p>
              <p>2005 - 2024</p>
            </li>
            <li className="cvCard">
              <h4>Colegio Virtual Siglo XXI</h4>
              <p>Grado de bachiller académico</p>
              <p>2005 - 2024</p>
            </li>
          </ul>
        </section>
        <section className="cvSection">
          <h3 className="cvSectionTitle">Work experience</h3>
          <ul className="cvSectionDetails cvWork">
            <li className="cvCard cvWorkCard">
              <h4>Massa Mare - Full Stack Engineer</h4>
              <p>
                Durante el trabajo en la empresa estuve encargado de la
                elaboración y mantenimiento del sitio web.
              </p>
              <p>2005 - 2024</p>
            </li>
            <li className="cvCard cvWorkCard">
              <h4>Colegio Virtual Siglo XXI</h4>
              <p>Grado de bachiller académico</p>
              <p>2005 - 2024</p>
            </li>
            <li className="cvCard cvWorkCard">
              <h4>Colegio Virtual Siglo XXI</h4>
              <p>Grado de bachiller académico</p>
              <p>2005 - 2024</p>
            </li>
            <li className="cvCard cvWorkCard">
              <h4>Colegio Virtual Siglo XXI</h4>
              <p>Grado de bachiller académico</p>
              <p>2005 - 2024</p>
            </li>
          </ul>
        </section>
      </main>
    </section>
  );
}

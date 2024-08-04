import { useState } from "react";
import "../styles/components/Builder.css";
import "../styles/components/Configurator.css";
import "../styles/components/Cv.css";
import Button from "./Button";
export default function Builder() {
  const [basicInfo, setBasicInfo] = useState({
    firstName: "",
    lastName: "",
    job: "",
    email: "",
    phoneNumber: "",
    website: "",
  });
  const changeFirstName = (e) => {
    setBasicInfo({ ...basicInfo, firstName: e.target.value });
  };
  const changeLastName = (e) => {
    setBasicInfo({ ...basicInfo, lastName: e.target.value });
  };
  const changeJob = (e) => {
    setBasicInfo({ ...basicInfo, job: e.target.value });
  };
  const changeEmail = (e) => {
    setBasicInfo({ ...basicInfo, email: e.target.value });
  };
  const changePhone = (e) => {
    setBasicInfo({ ...basicInfo, phoneNumber: e.target.value });
  };
  const changeWebsite = (e) => {
    setBasicInfo({ ...basicInfo, website: e.target.value });
  };

  return (
    <section className="builder">
      <section className="configurator">
        <h2 className="configuratorTitle">Customization:</h2>
        <Button
          text="Load demo data"
          theme="black"
          link="#"
          styles={{ marginBottom: "12px" }}
        />
        <aside className="card">
          <div className="cardHeader">
            <h3>Personal information</h3>
            <img
              src="src/assets/icons/chevron-up.svg"
              alt=""
              className="collapseIcon"
            />
          </div>
          <div className="inputBox inputGroup">
            <div>
              <label htmlFor="">
                First name: <span className="requiredIcon">*</span>
              </label>
              <input
                type="text"
                onChange={changeFirstName}
                value={basicInfo.firstName}
              />
            </div>
            <div>
              <label htmlFor="">
                Last Name: <span className="requiredIcon">*</span>
              </label>
              <input type="text" onChange={changeLastName} />
            </div>
          </div>
          <div className="inputBox">
            <label htmlFor="">
              Job: <span className="requiredIcon">*</span>
            </label>
            <input type="text" value={basicInfo.job} onChange={changeJob} />
          </div>
          <div className="inputBox">
            <label htmlFor="">
              Email: <span className="requiredIcon">*</span>
            </label>
            <input
              type="email"
              value={basicInfo.email}
              onChange={changeEmail}
            />
          </div>
          <div className="inputBox">
            <label htmlFor="">
              Phone number: <span className="requiredIcon">*</span>
            </label>
            <input
              type="tel"
              value={basicInfo.phoneNumber}
              onChange={changePhone}
            />
          </div>
          <div className="inputBox">
            <label htmlFor="">
              Website: <span className="requiredIcon">*</span>
            </label>
            <input type="url" />
          </div>
        </aside>
      </section>
      <section className="cvBox">
        <header className="cvHeader">
          <div className="cvHeaderBasicInfo">
            <img
              src="src/assets/icons/userMan.svg"
              alt=""
              className="cvAvatar"
            />
            <div>
              <h3>
                {basicInfo.firstName ? basicInfo.firstName : "John"}{" "}
                {basicInfo.firstName ? basicInfo.lastName : "Doe"}
              </h3>
              <span>
                {basicInfo.job ? basicInfo.job : "Full Stack Engineer"}
              </span>
            </div>
          </div>
          <div className="cvHeaderContactInfo">
            <div className="cvContactDetail">
              <span className="cvContactItem">
                {basicInfo.email ? basicInfo.email : "johndoe@email.com"}
              </span>
              <img src="src/assets/icons/mail.svg" alt="" />
            </div>
            <div className="cvContactDetail">
              <span className="cvContactItem">
                {basicInfo.phoneNumber
                  ? basicInfo.phoneNumber
                  : "(123)-456-789"}
              </span>
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
    </section>
  );
}

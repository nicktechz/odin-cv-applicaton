import { useState } from "react";
import "../styles/components/Builder.css";
import "../styles/components/Configurator.css";
import "../styles/components/Cv.css";
import Button from "./Button";
import Cv from "./Cv";

export default function Builder() {
  const [basicInfo, setBasicInfo] = useState({
    firstName: "",
    lastName: "",
    job: "",
    email: "",
    phoneNumber: "",
    website: "",
    bio: "",
  });
  const [educationInfo, setEducationInfo] = useState([
    {
      name: "",
      academicTitle: "",
      startYear: "",
      endYear: "",
    },
  ]);
  const [basicInfoCollapse, setBasicInfoCollapse] = useState(true);

  const infoCollapse = () => {
    if (basicInfoCollapse === true) {
      setBasicInfoCollapse(false);
    } else {
      setBasicInfoCollapse(true);
    }
  };

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
  const changeBio = (e) => {
    setBasicInfo({ ...basicInfo, bio: e.target.value });
  };

  return (
    <section className="builder">
      <section className="configurator">
        <h2 className="configuratorTitle">Customization:</h2>
        {/* BASIC INFO */}
        <aside className="card">
          <div className="cardHeader">
            <h3>Personal information</h3>
            <img
              src="src/assets/icons/chevron-up.svg"
              alt=""
              className="collapseIcon"
              onClick={infoCollapse}
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
            <input
              type="url"
              value={basicInfo.website}
              onChange={changeWebsite}
            />
          </div>
          <div className="inputBox">
            <label htmlFor="">
              Biography: <span className="requiredIcon">*</span>
            </label>
            <textarea
              name=""
              id=""
              value={basicInfo.bio}
              onChange={changeBio}
            ></textarea>
          </div>
        </aside>
      </section>
      <Cv basicInfo={basicInfo} />
    </section>
  );
}

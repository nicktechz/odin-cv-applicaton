import { useState } from "react";
import "../styles/components/Builder.css";
import "../styles/components/Configurator.css";
import "../styles/components/Cv.css";
import Cv from "./Cv";
import Configurator from "./Configurator";

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
        <Configurator
          basicInfo={basicInfo}
          changeFirstName={changeFirstName}
          changeLastName={changeLastName}
          changeJob={changeJob}
          changeEmail={changeEmail}
          changePhone={changePhone}
          changeWebsite={changeWebsite}
          changeBio={changeBio}
        />
      </section>

      <Cv
        basicInfo={basicInfo}
        changeFirstName={changeFirstName}
        changeLastName={changeLastName}
      />
    </section>
  );
}

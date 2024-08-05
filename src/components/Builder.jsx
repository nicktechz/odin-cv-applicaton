import { useState } from "react";
import "../styles/components/Builder.css";
import "../styles/components/Configurator.css";
import "../styles/components/Cv.css";
import Cv from "./Cv";
import Configurator from "./Configurator";

export default function Builder() {
  const [basicInfo, setBasicInfo] = useState({
    firstName: "",
    img: "src/assets/icons/userMan.svg",
    lastName: "",
    job: "",
    email: "",
    phoneNumber: "",
    website: "",
    bio: "",
  });

  const deleteWhiteSpaces = (string) => {
    return string.replace(/\s/g, "");
  };

  const changeImageToMen = () => {
    setBasicInfo({ ...basicInfo, img: "src/assets/icons/userMan.svg" });
  };
  const changeImageToWomen = () => {
    setBasicInfo({ ...basicInfo, img: "src/assets/icons/userWomen.svg" });
  };

  const changeFirstName = (e) => {
    setBasicInfo({
      ...basicInfo,
      firstName: deleteWhiteSpaces(e.target.value),
    });
  };
  const changeLastName = (e) => {
    setBasicInfo({ ...basicInfo, lastName: deleteWhiteSpaces(e.target.value) });
  };
  const changeJob = (e) => {
    setBasicInfo({ ...basicInfo, job: e.target.value });
  };
  const changeEmail = (e) => {
    setBasicInfo({ ...basicInfo, email: deleteWhiteSpaces(e.target.value) });
  };
  const changePhone = (e) => {
    setBasicInfo({ ...basicInfo, phoneNumber: e.target.value });
  };
  const changeWebsite = (e) => {
    setBasicInfo({ ...basicInfo, website: deleteWhiteSpaces(e.target.value) });
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
          changeImageToMen={changeImageToMen}
          changeImageToWomen={changeImageToWomen}
          changeFirstName={changeFirstName}
          changeLastName={changeLastName}
          changeJob={changeJob}
          changeEmail={changeEmail}
          changePhone={changePhone}
          changeWebsite={changeWebsite}
          changeBio={changeBio}
        />
      </section>

      <Cv basicInfo={basicInfo} />
    </section>
  );
}

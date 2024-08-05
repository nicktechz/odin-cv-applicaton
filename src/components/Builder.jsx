import { useState } from "react";
import "../styles/components/Builder.css";
import "../styles/components/Configurator.css";
import "../styles/components/Cv.css";
import Cv from "./Cv";
import Configurator from "./Configurator";
import { basicInfo as basicInfoData } from "../utils/settingsObjects";
import { deleteWhiteSpaces } from "../utils/stringUtils";

export default function Builder() {
  const [basicInfo, setBasicInfo] = useState(basicInfoData);

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

  const basicInfoFunctions = {
    changeImageToMen,
    changeImageToWomen,
    changeFirstName,
    changeLastName,
    changeJob,
    changeEmail,
    changePhone,
    changeWebsite,
    changeBio,
  };

  return (
    <section className="builder">
      <section className="configurator">
        <h2 className="configuratorTitle">Customization:</h2>
        <Configurator
          basicInfo={basicInfo}
          basicInfoFunctions={basicInfoFunctions}
        />
      </section>

      <Cv basicInfo={basicInfo} />
    </section>
  );
}

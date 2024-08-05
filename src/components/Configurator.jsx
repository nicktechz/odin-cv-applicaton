import "../styles/components/Configurator.css";
import CardSettings from "./CardSettings";

export default function Configurator({
  basicInfo,
  changeFirstName,
  changeLastName,
  changeJob,
  changeEmail,
  changePhone,
  changeWebsite,
  changeBio,
}) {
  return (
    <>
      <CardSettings
        title={"Basic information"}
        basicInfo={basicInfo}
        changeFirstName={changeFirstName}
        changeLastName={changeLastName}
        changeJob={changeJob}
        changeEmail={changeEmail}
        changePhone={changePhone}
        changeWebsite={changeWebsite}
        changeBio={changeBio}
      />
      <CardSettings
        title={"Education experience"}
        basicInfo={basicInfo}
        changeFirstName={changeFirstName}
        changeLastName={changeLastName}
        changeJob={changeJob}
        changeEmail={changeEmail}
        changePhone={changePhone}
        changeWebsite={changeWebsite}
        changeBio={changeBio}
      />
    </>
  );
}

import "../styles/components/Configurator.css";
import BasicInfoSettings from "./BasicInfoSettings";

export default function Configurator({ basicInfo, basicInfoFunctions }) {
  return (
    <>
      <BasicInfoSettings
        title={"Basic information"}
        basicInfo={basicInfo}
        basicInfoFunctions={basicInfoFunctions}
      />
    </>
  );
}

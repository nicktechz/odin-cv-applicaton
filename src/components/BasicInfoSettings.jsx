import { useState } from "react";

export default function BasicInfoSettings({ basicInfo, basicInfoFunctions }) {
  const [collapse, setCollapse] = useState(true);
  const iconDownPath = "/icons/chevron-down.svg";
  const iconUpPath = "/icons/chevron-up.svg";

  function collapseAccordion() {
    if (collapse) {
      setCollapse(false);
    } else {
      setCollapse(true);
    }
  }
  return (
    <aside className="card">
      <div className="cardHeader">
        <h3>Personal information</h3>
        <img
          src={!collapse ? iconDownPath : iconUpPath}
          alt=""
          className="collapseIcon"
          onClick={collapseAccordion}
        />
      </div>
      {collapse ? (
        <>
          <div className="inputBox" style={{ paddingTop: "24px" }}>
            <span style={{ marginBottom: "12px", display: "block" }}>
              Gender:
            </span>
            <div style={{ display: "flex", gap: "8px" }}>
              <img
                src="/icons/userMan.svg"
                alt=""
                width="80px"
                style={{ cursor: "pointer" }}
                onClick={basicInfoFunctions.changeImageToMen}
                className={
                  basicInfo.img === "/icons/userMan.svg" ? "active" : null
                }
              />
              <img
                src="/icons/userWomen.svg"
                alt=""
                width="80px"
                style={{ cursor: "pointer" }}
                onClick={basicInfoFunctions.changeImageToWomen}
                className={
                  basicInfo.img === "/icons/userWomen.svg" ? "active" : null
                }
              />
            </div>
          </div>
          <div className="inputBox inputGroup">
            <div>
              <label htmlFor="">
                First name: <span className="requiredIcon">*</span>
              </label>
              <input
                type="text"
                onChange={basicInfoFunctions.changeFirstName}
                value={basicInfo.firstName}
              />
            </div>
            <div>
              <label htmlFor="">
                Last Name: <span className="requiredIcon">*</span>
              </label>
              <input
                type="text"
                onChange={basicInfoFunctions.changeLastName}
                value={basicInfo.lastName}
              />
            </div>
          </div>
          <div className="inputBox">
            <label htmlFor="">
              Job: <span className="requiredIcon">*</span>
            </label>
            <input
              type="text"
              value={basicInfo.job}
              onChange={basicInfoFunctions.changeJob}
            />
          </div>
          <div className="inputBox">
            <label htmlFor="">
              Email: <span className="requiredIcon">*</span>
            </label>
            <input
              type="text"
              onChange={basicInfoFunctions.changeEmail}
              value={basicInfo.email}
            />
          </div>
          <div className="inputBox">
            <label htmlFor="">
              Phone number: <span className="requiredIcon">*</span>
            </label>
            <input
              type="tel"
              value={basicInfo.phoneNumber}
              onChange={basicInfoFunctions.changePhone}
            />
          </div>
          <div className="inputBox">
            <label htmlFor="">
              Website: <span className="requiredIcon">*</span>
            </label>
            <input
              type="url"
              value={basicInfo.website}
              onChange={basicInfoFunctions.changeWebsite}
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
              onChange={basicInfoFunctions.changeBio}
            ></textarea>
          </div>
        </>
      ) : null}
    </aside>
  );
}

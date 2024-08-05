import { useState } from "react";

export default function CardSettings({
  title,
  basicInfo,
  changeFirstName,
  changeLastName,
  changeJob,
  changeEmail,
  changePhone,
  changeWebsite,
  changeBio,
}) {
  const [collapse, setCollapse] = useState(true);
  const iconDownPath = "src/assets/icons/chevron-down.svg";
  const iconUpPath = "src/assets/icons/chevron-up.svg";
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
        <h3>{title}</h3>
        <img
          src={!collapse ? iconDownPath : iconUpPath}
          alt=""
          className="collapseIcon"
          onClick={collapseAccordion}
        />
      </div>
      {collapse ? (
        <>
          <div className="inputBox inputGroup" style={{ paddingTop: "24px" }}>
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
        </>
      ) : null}
    </aside>
  );
}

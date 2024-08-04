import "../styles/components/Configurator.css";
import "../styles/components/Cv.css";
import Button from "./Button";
export default function Configurator({ basicInfo, onChange, keyChange }) {
  return (
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
              onChange={onChange}
              value={basicInfo.firstName}
            />
          </div>
          <div>
            <label htmlFor="">
              Last Name: <span className="requiredIcon">*</span>
            </label>
            <input type="text" />
          </div>
        </div>
        <div className="inputBox">
          <label htmlFor="">
            Job: <span className="requiredIcon">*</span>
          </label>
          <input type="text" />
        </div>
        <div className="inputBox">
          <label htmlFor="">
            Email: <span className="requiredIcon">*</span>
          </label>
          <input type="email" />
        </div>
        <div className="inputBox">
          <label htmlFor="">
            Phone number: <span className="requiredIcon">*</span>
          </label>
          <input type="tel" />
        </div>
        <div className="inputBox">
          <label htmlFor="">
            Website: <span className="requiredIcon">*</span>
          </label>
          <input type="url" />
        </div>
      </aside>
    </section>
  );
}

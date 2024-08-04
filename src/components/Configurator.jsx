import "../styles/components/Configurator.css";
export default function Configurator() {
  return (
    <section className="configurator">
      <h2 className="configuratorTitle">Configuration:</h2>
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
            <input type="text" />
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
      </aside>
    </section>
  );
}

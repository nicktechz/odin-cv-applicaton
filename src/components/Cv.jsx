import "../styles/components/Cv.css";
export default function Cv({ basicInfo }) {
  return (
    <section className="cvBox">
      <header className="cvHeader">
        <div className="cvHeaderBasicInfo">
          <img src={basicInfo.img} alt="" className="cvAvatar" />
          <div>
            <h3>
              {basicInfo.firstName ? basicInfo.firstName : "John"}{" "}
              {basicInfo.firstName ? basicInfo.lastName : "Doe"}
            </h3>
            <span>{basicInfo.job ? basicInfo.job : "Full Stack Engineer"}</span>
          </div>
        </div>
        <div className="cvHeaderContactInfo">
          <div className="cvContactDetail">
            <span className="cvContactItem">
              {basicInfo.email ? basicInfo.email : "johndoe@email.com"}
            </span>
            <img src="/icons/mail.svg" alt="" />
          </div>
          <div className="cvContactDetail">
            <span className="cvContactItem">
              {basicInfo.phoneNumber ? basicInfo.phoneNumber : "(123)-456-789"}
            </span>
            <img src="/icons/phone.svg" alt="" />
          </div>
          <div className="cvContactDetail">
            <span className="cvContactItem">
              <a
                href={basicInfo.website}
                style={{ color: "var(--color-pire-white)" }}
              >
                {basicInfo.website ? basicInfo.website : "https://example.com"}
              </a>
            </span>
            <img src="/icons/globe.svg" alt="" />
          </div>
        </div>
      </header>
      <main className="cvBody">
        <section className="cvSection">
          <h3 className="cvSectionTitle">Biography</h3>
          <p className="cvSectionDetails">
            {basicInfo.bio
              ? basicInfo.bio
              : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla blandit lacus risus, id bibendum risus suscipit eu. In laoreet feugiat massa, in euismod eros aliquam at. Praesent luctus, lacus ut cursus pretium, massa nibh efficitur nisi, eget sollicitudin augue dolor sed elit. Nam nec luctus magna, vel condimentum nunc. Nullam vestibulum libero et convallis pharetra. Vivamus sed risus id nulla luctus vestibulum et nec massa. Morbi mollis non mauris a cursus. Quisque ultrices libero id metus lacinia, eget suscipit sapien tempus. Curabitur ullamcorper mauris vel placerat facilisis. Morbi at erat felis."}
          </p>
        </section>
      </main>
    </section>
  );
}

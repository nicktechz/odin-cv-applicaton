import "../styles/components/Button.css";

export default function Button({
  text = "I'm a button",
  link = "#",
  theme = "light",
  onClick,
}) {
  if (theme === "light") {
    return (
      <button className="btn btn--primary" type="button" onClick={onClick}>
        <a href={link}>{text}</a>
      </button>
    );
  }
}

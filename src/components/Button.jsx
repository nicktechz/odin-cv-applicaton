import "../styles/components/Button.css";

export default function Button({
  text = "I'm a button",
  link = "#",
  theme = "light",
  onClick,
  styles,
}) {
  if (theme === "light") {
    return (
      <button className="btn btn--primary" type="button" onClick={onClick}>
        <a href={link}>{text}</a>
      </button>
    );
  } else if (theme === "black") {
    return (
      <button
        className="btn btn--black"
        type="button"
        onClick={onClick}
        style={styles}
      >
        <a href={link}>{text}</a>
      </button>
    );
  }
}

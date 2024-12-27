// Card.js
import "./Card.css";

function Card({ title, desc }) {
  const formLink =
    "https://docs.google.com/forms/d/e/1FAIpQLSd6fW16t9Hg89NJUL5c3qBPIc4j119-ee8U_aDFPI-qQwW3Gg/viewform?embedded=true";

  const handleClick = () => {
    window.open(formLink, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="Container" onClick={handleClick}>
      <h1>{title}</h1>
      <p>{desc}</p>
    </div>
  );
}

export default Card;

function Card({ img, title, description, color, bgColor }) {
  return (
    <div className="card">
      <div className="icon" style={{ color: color, backgroundColor: bgColor }}>
        {img}
      </div>
      <span></span>
      <h2>{title}</h2>
      <span className="line"></span>
      <p>{description}</p>
    </div>
  );
}

export default Card;

function Review({ stars, description, img, name, job }) {
  return (
    // Each rating part
    <div className="rating">
      <span className="stars">{stars}</span>
      <p className="description">{description}</p>

      {/* Each member info */}
      <div className="person">
        <img src={img} alt={name} />
        <div>
          <h3 className="text-primary">{name}</h3>
          <p>{job}</p>
        </div>
      </div>
    </div>
  );
}

export default Review;

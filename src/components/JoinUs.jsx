function JoinUs() {
  return (
    // Overall section content
    <section id="JoinUs">
      <div className="content">
        <p className="text-primary">Practice Advice</p>
        <h2>JOIN US</h2>
        <p>
          Have questions or need assistance? Reacth out to us thorugh our team,
          we are here to help and ensure you. Have the best experience possible!
        </p>

        {/* Form & Button*/}
        <form>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Your Email"
          />
          <button type="submit">Subscribe</button>
        </form>
      </div>
    </section>
  );
}

export default JoinUs;

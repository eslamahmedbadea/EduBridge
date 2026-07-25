import { cardData } from "../../data";
import Card from "./Card";

function Home() {
  return (
    <section id="home">
      {/* Home Container & Divs */}
      <div className="container">
        <div className="home-header">
          {/* Span & Title */}
          <span>Join Us</span>
          <h1>Best Learning Opportunities</h1>
          <p>
            We know how large objects will act, but things on a small scale just
            do not act that way.
          </p>

          {/* Home Buttons */}
          <a href="#" className="btn btn-red">
            Get Quote Now
          </a>
          <a href="#" className="btn btn-transparent">
            Learn More
          </a>
        </div>

        {/* Cards Container & Divs */}
        <div className="card-container">
          {cardData.map((card) => {
            const { title, id, bgColor, color, description, img } = card;
            return (
              <Card
                key={id}
                title={title}
                bgColor={bgColor}
                color={color}
                description={description}
                img={img}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Home;

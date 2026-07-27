import SectionHeader from "./SectionHeader";
import { ratingsData } from "../../data";
import Review from "./Review";

function Reviews() {
  return (
    // Reviews container & Data
    <section id="reviews">
      <div className="container">
        <SectionHeader
          title={"Each and every cliet is important"}
          description={
            "Discover what our students are saying in the reviews section! Real feedback from learners who have experienced and benefited from our courses."
          }
        />

        {/* Ratings loop & Data */}
        <div className="ratings">
          {ratingsData.map((rating) => {
            const { id, description, img, job, name, stars } = rating;
            return (
              <Review
                key={id}
                description={description}
                img={img}
                job={job}
                name={name}
                stars={stars}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Reviews;

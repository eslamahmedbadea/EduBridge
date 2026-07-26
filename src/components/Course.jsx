import { FaStar } from "react-icons/fa";
import { IoIosAlarm } from "react-icons/io";
import { FaMap } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";

function Course({
  img,
  title,
  department,
  description,
  rating,
  sales,
  price,
  discount,
  duration,
  lessons,
}) {
  return (
    // Course Card Container
    <div className="course">
      {/* Sales SPAN & Img */}
      <span className="sale">Sale</span>
      <img src={img} alt={title} />

      {/* Field & Rating */}
      <div className="content">
        <div>
          <div className="course-field">
            <p className="department">{department}</p>
            <p className="rating">
              <FaStar />
              {rating}
            </p>
          </div>

          {/* Title & Paragraph */}
          <h3>{title}</h3>
          <p className="description">{description}</p>

          {/* Sales count & Discount */}
          <p className="sales">{sales} Sales</p>
          <p className="price">
            <del>{price}</del>
            <span className="text-secondary">{discount}</span>
          </p>

          {/* Duration & Lessons */}
          <div className="course-info">
            <p>
              {" "}
              <IoIosAlarm />
              {duration}
            </p>
            <p>
              <FaMap />
              {lessons}
            </p>

            {/* Learn More */}
            <a href="#" className="btn-learn">
              Learn More
              <FaChevronRight />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Course;

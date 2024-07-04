import { ITestimonialsItem } from "../types/testimonialsItem";

export function TestimonialItem({testimonials, image, author, area}: ITestimonialsItem) {
    return (
        <div className="testimonials-item">
        <p>
            {testimonials}
        </p>
        <div className="testimonials-author">
            <div className="image">
                <img src={image} />
            </div>
            <div className="bio">
                <h3>{author}</h3>
                <p>{area}</p>
            </div>
        </div>
        </div>
    );
}

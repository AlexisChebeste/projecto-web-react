import { ITestimonialsItem } from "../../types/testimonialsItem";
import styles from "./Testimonial.module.css"

export function TestimonialItem({testimonials, image, author, area}: ITestimonialsItem) {
    return (
        <div className={styles.testimonialsItem}>
        <p>
            {testimonials}
        </p>
        <div className={styles.testimonialsAuthor}>
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

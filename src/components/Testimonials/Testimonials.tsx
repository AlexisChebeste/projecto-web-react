import { useEffect, useState } from "react";
import { ITestimonialsItem } from "../../types/testimonialsItem";
import { TestimonialItem } from "./TestimonialItem";
import styles from "./Testimonials.module.css"

export function Testimonials(){

    const [testimonials, setTestimonials] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/testimonials")
        .then((res) => res.json())
        .then((data) => setTestimonials(data));
    }, []);

    return(
        <section className={styles.testimonials}>
            <div className="container">
                <h2>
                Don't take our word for it. See what customers are saying about us.
                </h2>
                <div className={styles.testimonialsList}>
                    {testimonials.map((item: ITestimonialsItem) =>
                        <TestimonialItem 
                            key={item.id}
                            {...item}
                        />
                    )}
                </div>
            </div>
        </section>
    );
}
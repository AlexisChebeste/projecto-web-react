import { ITestimonialsItem } from "../../types/testimonialsItem";

export function TestimonialItem({testimonials, image, author, area}: ITestimonialsItem) {
    return (
        <div className="bg-white p-5">
        <p className="text-[18px]">
            {testimonials}
        </p>
        <div className="flex justify-start gap-7 mt-7">
            <div className="image">
                <img className="max-w-[70px]" src={image} />
            </div>
            <div className="bio">
                <h3>{author}</h3>
                <p>{area}</p>
            </div>
        </div>
        </div>
    );
}

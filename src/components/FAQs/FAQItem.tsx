import { IFaqItem } from "../../types/faqItem";

export function FAQItem({question, answer}: IFaqItem) {
    return (
        <div className="shadow-md cursor-pointer">
            <details className="bg-white rounded-md p-5">
                <summary className="bg-white text-heading-color text-lg font-semibold leading-6 marker:text-primary-color">{question}</summary>
                <p>{answer}</p>
            </details>
        </div>
    );
}

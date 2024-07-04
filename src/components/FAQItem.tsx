import { IFaqItem } from "../types/faqItem";

export function FAQItem({question, answer}: IFaqItem) {
    return (
        <div className="faqs-item">
            <details>
                <summary>{question}</summary>
                <p>{answer}</p>
            </details>
        </div>
    );
}

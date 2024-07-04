import { IFaqItem } from "../../types/faqItem";
import { Button } from "../Button/Button";
import { useState, useEffect } from "react";
import { FAQItem } from "./FAQItem";
import styles from "./FAQs.module.css";

export function FAQs(){

    const [faqs, setFaqs] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/faqs")
        .then((res) => res.json())
        .then((data) => setFaqs(data));
    }, []);

    return (
        <section className={styles.faq}>
            <div className={`container ${styles.faqsContainer}`}>
                <div className="left">
                    <h2>
                    If you don't see an answer to your question, you can send us an email
                    from our contact form.
                    </h2>
                    <p>
                    Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget
                    lacinia odio sem nec elit. Nullam quis risus eget urna mollis ornare.
                    </p>
                    <Button content="All FAQ" href="/faqs"/>
                </div>
                <div className="right">
                    <div className={styles.faqsList}>
                        {faqs.map((item: IFaqItem) =>
                            <FAQItem 
                                key={item.id}
                                {...item}
                            />
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
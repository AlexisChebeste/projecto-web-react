import { IFaqItem } from "../../types/faqItem";
import { Button } from "../Button/Button";
import { useState, useEffect } from "react";
import { FAQItem } from "./FAQItem";

export function FAQs(){

    const [faqs, setFaqs] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/faqs")
        .then((res) => res.json())
        .then((data) => setFaqs(data));
    }, []);

    return (
        <section className="bg-gray py-12 px-0 pb-24">
            <div className="container grid grid-cols-1 gap-20 md:gap-8 lg:grid-cols-2">
                <div className="left">
                    <h2 className="mb-5">
                    If you don't see an answer to your question, you can send us an email
                    from our contact form.
                    </h2>
                    <p className="mb-5">
                    Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget
                    lacinia odio sem nec elit. Nullam quis risus eget urna mollis ornare.
                    </p>
                    <Button content="All FAQ" href="/faqs"/>
                </div>
                <div className="right">
                    <div className="flex flex-col gap-5">
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
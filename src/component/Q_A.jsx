import React, { useState } from 'react';

function Q_A() {
    const leftItems = [
        {
            id: "faq1",
            question: "What is Swara?",
            answer: "Swara is an online counselling platform in India, offering online therapy and counselling & other related mental health support. We strive to change how mental health is perceived and break the stigma surrounding it. With Swara, we aim to help people manage life’s challenges by providing secure, safe, confidential and judgement-free online counselling."
        },
        {
            id: "faq2",
            question: "What are the different online mental health services offered by Swara?",
            answer:
                <>
                    <p>As an online therapy platform, Swara offers the following services:</p>
                    <ul>
                        <li>Depression therapy</li>
                        <li>Teen therapy</li>
                        <li>Couple therapy</li>
                        <li>Individual therapy</li>
                    </ul>
                </>
        },

        {
            id: "faq3",
            question: "Why is Swara the best online therapy platform?",
            answer: "Swara is one of the best online therapy platforms in India that helps people thrive in their personal and professional lives by providing a safe space to speak their mind. It’s more than just online counselling — it's a proactive step towards wellness, resilience and a better quality of life."
        },
        {
            id: "faq4",
            question: "How are online therapy and counselling sessions held?",
            answer: "Sessions are held through video calls, audio calls or chat-based platforms — all from the comfort and convenience of your location."
        },
        {
            id: "faq5",
            question: "In how many languages does Swara offer online therapy?",
            answer: "Swara offers therapy primarily in English and Hindi, but can also adapt to regional languages like Marathi, Gujarati, and others."
        },
        {
            id: "faq6",
            question: "How is my privacy protected?",
            answer: "Your privacy and confidentiality are our top priority. All conversations are encrypted and secure, ensuring a safe, judgement-free environment."
        }
    ];

    const rightItems = [
        {
            id: "faq7",
            question: "Is online therapy as effective as in-person consultation?",
            answer: "Yes. Online therapy is similar in effectiveness to in-person sessions. It's a comfortable and accessible way to manage stress and mental health challenges."
        },
        {
            id: "faq8",
            question: "What are the advantages of online counselling sessions?",
            answer: "Online counselling offers accessibility, flexibility, and convenience. You can choose between video, audio, or chat sessions from your home."
        },
        {
            id: "faq9",
            question: "Is Swara online counselling confidential and secure?",
            answer: "Yes. All your information is highly confidential and never shared with third parties. You can express yourself freely and without judgement."
        },
        {
            id: "faq10",
            question: "How can I start my online counselling at Swara?",
            answer: "Fill out the ‘Book A Session’ form on our website with your details and preferred time slot to begin your counselling journey."
        },
        {
            id: "faq11",
            question: "How long can I use Swara online therapy?",
            answer: "You can use Swara’s services for as long as you need, based on your personal therapeutic goals."
        },
        {
            id: "faq12",
            question: "What do I keep in mind during the sessions?",
            answer: "Make sure you have a stable internet connection and a quiet, comfortable space to speak openly with your counsellor."
        }
    ];

    // Accordion component for displaying FAQ items
    const Accordion = ({ items, accordionId, startIndex = 1 }) => {
        const [openItem, setOpenItem] = useState(null);

        const toggleItem = (itemId) => {
            setOpenItem(openItem === itemId ? null : itemId); // Close the accordion if it's already open, else open it
        };

        return (
            <div className="accordion" id={accordionId}>
                {items.map((item, index) => (
                    <div className="accordion-item faq-item" key={item.id}>
                        <h2 className="accordion-header" id={`heading${startIndex + index}`}>
                            <button
                                className="accordion-button"
                                type="button"
                                onClick={() => toggleItem(item.id)}
                                aria-expanded={openItem === item.id ? 'true' : 'false'}
                                aria-controls={item.id}
                            >
                                {item.question}
                            </button>
                        </h2>
                        <div
                            id={item.id}
                            className={`accordion-collapse collapse ${openItem === item.id ? 'show' : ''}`}
                            aria-labelledby={`heading${startIndex + index}`}
                        >
                            <div className="accordion-body">{item.answer}</div>
                        </div>
                    </div>
                ))}
            </div>
        );
    };

    return (
        <section className="faq_section faq_spacing">
            <div className="container">
                <div className="row">
                    <div className="faq_section_heading">
                        <h3 className="heading text-center">Frequently Asked Questions</h3>
                    </div>
                    <div className="col-lg-6">
                        <Accordion items={leftItems} accordionId="faqAccordion" startIndex={1} />
                    </div>
                    <div className="col-lg-6">
                        <Accordion items={rightItems} accordionId="faqAccordion2" startIndex={7} />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Q_A;

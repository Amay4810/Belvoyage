import './About.css';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useState } from 'react';

const About = () => {
    const [openFAQ, setOpenFAQ] = useState(null);

    const toggleFAQ = (index) => {
        setOpenFAQ(openFAQ === index ? null : index);
    };

    const faqs = [
        {
            question: "What does BelVoyage do?",
            answer: "BelVoyage designs bespoke journeys for individuals, families, and organisations seeking depth, discretion, and access - rather than standard travel planning.\n\nEach journey is conceived individually and shaped around personal intent, pace, and context."
        },
        {
            question: "Do you offer fixed packages or itineraries?",
            answer: "No.\n\nBelVoyage does not operate on pre-set packages or off-the-shelf itineraries.\n\nEvery journey begins with a private consultation and is designed from the ground up."
        },
        {
            question: "Who is BelVoyage best suited for?",
            answer: "BelVoyage is designed for clients who value:\n• Thoughtful design over speed\n• Privacy over publicity\n• Experience over explanation\n\nWe may not be the right fit for those seeking instant quotes or transactional bookings."
        },
        {
            question: "Do you work only in the destinations listed on the website?",
            answer: "No.\n\nOur Signature Destinations represent areas where BelVoyage's expertise runs deepest.\n\nBeyond these, journeys can be designed anywhere in the world."
        },
        {
            question: "How does the consultation process work?",
            answer: "Following a private consultation request, a BelVoyage consultant connects personally to understand intent, preferences, and expectations.\n\nFrom there, a tailored journey concept is developed."
        },
        {
            question: "Is there a minimum budget?",
            answer: "Budgets vary depending on destination, timing, and scope.\n\nBelVoyage works with clients who prioritise quality, discretion, and thoughtful design over price comparison."
        },
        {
            question: "Who will I be dealing with during my journey?",
            answer: "Each journey is managed by a dedicated BelVoyage consultant, supported by a discreet global network.\n\nSelect journeys continue to receive founder-level oversight."
        },
        {
            question: "Is BelVoyage a travel agency?",
            answer: "BelVoyage operates as a private travel house - designing, curating, and managing journeys rather than selling standard travel products.\n\nOperational support is provided through established infrastructure and trusted partners."
        },
        {
            question: "Do you maintain client confidentiality?",
            answer: "Discretion is foundational to how BelVoyage operates.\n\nJourneys, identities, and personal moments are treated with absolute privacy.\n\nMany of our most meaningful experiences remain deliberately unseen."
        }
       
    ];

    return (
        <div className="about-page">
            {/* Hero Section */}
            <div className="about-hero">
                <div className="container">
                    <h1>About BelVoyage</h1>
                </div>
            </div>

            {/* The Mind Behind BelVoyage */}
            <section className="section founder-section">
                <div className="container">
                    <h2 className="section-title">The Mind Behind BelVoyage</h2>

                    <div className="founder-content">
                        <p>
                            BelVoyage was founded with a singular intention - to create a travel house shaped by taste, discernment, and imagination, rather than scale.
                        </p>
                        <p>
                            In a world saturated with itineraries and excess, BelVoyage stands for something quieter: journeys designed with thought, restraint, and an intuitive understanding of what truly elevates travel.
                        </p>
                        <p>
                            Founded by <strong>Amay Malhotra</strong>, BelVoyage reflects a deeply personal approach to luxury - one informed by years of exposure to global travel ecosystems, cultural institutions, and the inner workings of luxury hospitality across continents.
                        </p>
                        <p>
                            Rooted in over 25 years of trusted experience through its parent company, MKM Air Travels, BelVoyage builds upon a legacy of reliability and operational excellence - reimagined through a more intimate, design-led luxury lens.
                        </p>
                        <p>
                            BelVoyage operates through a carefully curated global network of specialists and partners, while select journeys continue to benefit from the founder's direct involvement.
                        </p>
                    </div>

                    {/* Founder Feature */}
                    <div className="founder-feature">
                        <div className="founder-quote">
                            <blockquote>
                                <p>
                                    "BelVoyage was born from the belief that truly exceptional journeys cannot be mass-produced.
                                </p>
                                <p>
                                    Every experience we create is looked at personally - with care, imagination, and an obsession for detail. Whether a journey is intimate or expansive, I remain closely involved in shaping what makes it meaningful.
                                </p>
                                <p>
                                    When a client travels with BelVoyage, they are not handed over to a system. They are entrusted to a vision - one I stand behind personally."
                                </p>
                            </blockquote>
                            <p className="quote-attribution">Amay Malhotra<br />Founder, BelVoyage</p>
                        </div>
                        <div className="founder-image">
                            <img src="/Headshot.jpeg" alt="Amay Malhotra, Founder of BelVoyage" />
                        </div>
                    </div>

                    <p className="closing-line">
                        BelVoyage is not designed to be everywhere.<br />
                        It is designed to be unforgettable where it matters.
                    </p>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="section faq-section">
                <div className="container">
                    <h2 className="section-title">Frequently Asked Questions</h2>

                    <div className="faq-container">
                        {faqs.map((faq, index) => (
                            <motion.div
                                key={index}
                                className={`faq-item ${openFAQ === index ? 'open' : ''}`}
                                initial={false}
                            >
                                <button
                                    className="faq-question"
                                    onClick={() => toggleFAQ(index)}
                                >
                                    <span>{faq.question}</span>
                                    <span className="faq-icon">{openFAQ === index ? '−' : '+'}</span>
                                </button>
                                <motion.div
                                    className="faq-answer"
                                    initial="collapsed"
                                    animate={openFAQ === index ? "open" : "collapsed"}
                                    variants={{
                                        open: { opacity: 1, height: "auto", marginTop: "1rem" },
                                        collapsed: { opacity: 0, height: 0, marginTop: 0 }
                                    }}
                                    transition={{ duration: 0.3 }}
                                >
                                    {faq.answer.split('\n').map((line, i) => (
                                        <p key={i}>{line}</p>
                                    ))}
                                </motion.div>
                            </motion.div>
                        ))}
                    </div>

                    <div className="faq-cta">
                        <p>For further enquiries:</p>
                        <Link to="/consultation" className="btn btn-primary">
                            Request a Private Consultation
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;

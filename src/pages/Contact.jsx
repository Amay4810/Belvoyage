import './Contact.css';
import { Link } from 'react-router-dom';

const Contact = () => {
    return (
        <div className="contact-page">
            {/* Hero Section */}
            <div className="contact-hero">
                <div className="container">
                    <h1>Concierge & Access</h1>
                    <p className="hero-subtitle">
                        Travel, when done well, feels effortless.
                    </p>
                    <p className="hero-description">
                        Behind every BelVoyage journey lies a discreet infrastructure designed to support our clients wherever they are in the world.
                    </p>
                    <p className="hero-note">
                        This is not a list of services.<br />
                        It is the framework that allows journeys to unfold with ease, privacy, and confidence without ever drawing attention to itself.
                    </p>
                </div>
            </div>

            {/* Private Mobility */}
            <section className="section service-section">
                <div className="container">
                    <h2 className="section-title">Private Mobility</h2>

                    <div className="service-content">
                        <p>
                            Movement is an integral part of the experience.
                        </p>
                        <p>
                            From private aviation and luxury yachts to curated ground mobility, BelVoyage arranges seamless transitions designed around privacy, comfort, and timing.
                        </p>
                        <p>
                            Journeys are shaped to feel continuous - never transactional.
                        </p>
                        <p className="service-emphasis">
                            Arrivals are unhurried.<br />
                            Departures are instinctive.
                        </p>
                    </div>
                </div>
            </section>

            {/* Rare Access & Moments */}
            <section className="section service-section alternate">
                <div className="container">
                    <h2 className="section-title">Rare Access & Moments</h2>

                    <div className="service-content">
                        <p>
                            Some experiences exist beyond public availability.
                        </p>
                        <p>
                            Through trusted global relationships, BelVoyage facilitates access to moments shaped by context, occasion, and discretion — private events, cultural institutions, celebrations, and encounters not available through conventional channels.
                        </p>
                        <p className="service-emphasis">
                            Access is never advertised.<br />
                            It is extended.
                        </p>
                    </div>
                </div>
            </section>

            {/* Journey Infrastructure */}
            <section className="section service-section">
                <div className="container">
                    <h2 className="section-title">Journey Infrastructure</h2>

                    <div className="service-content">
                        <p>
                            Exceptional journeys rely on details that are quietly resolved.
                        </p>
                        <p>
                            Every BelVoyage experience is supported by a robust operational backbone ensuring documentation, permissions, reservations, and on-ground coordination are handled with precision and discretion.
                        </p>
                        <p>
                            Clients are free to remain fully immersed, knowing the details have already been considered.
                        </p>
                        <p className="service-emphasis">
                            What disappears is complexity.<br />
                            What remains is ease.
                        </p>
                    </div>
                </div>
            </section>

            {/* An Ongoing Relationship */}
            <section className="section service-section alternate">
                <div className="container">
                    <h2 className="section-title">An Ongoing Relationship</h2>

                    <div className="service-content">
                        <p>
                            For many clients, BelVoyage evolves beyond individual journeys.
                        </p>
                        <p>
                            Over time, the relationship may extend into ongoing support - offering discreet coordination across travel, personal celebrations, and meaningful moments throughout the year, and much more, explored through a private consultation.
                        </p>
                    </div>

                    <div className="cta-section">
                        <Link to="/consultation" className="btn btn-primary">
                            Request a Private Consultation
                        </Link>
                    </div>
                </div>
            </section>

            {/* Contact Details */}
            <section className="section contact-details">
                <div className="container">
                    <h2 className="section-title">Contact Details</h2>

                    <div className="contact-grid">
                        <div className="contact-item">
                            <h3>WhatsApp</h3>
                            <a href="https://wa.me/919873124466">+91 98731 24466</a>
                        </div>

                        <div className="contact-item">
                            <h3>Phone</h3>
                            <a href="tel:+919873124466">+91 98731 24466</a>
                        </div>

                        <div className="contact-item">
                            <h3>Email</h3>
                            <a href="mailto:concierge@thebelvoyage.com">concierge@thebelvoyage.com</a>
                        </div>

                        <div className="contact-item">
                            <h3>Office</h3>
                            <p>New Delhi, India</p>
                        </div>
                    </div>

                    <div className="discretion-note">
                        <p>All enquiries are handled with complete discretion.</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;

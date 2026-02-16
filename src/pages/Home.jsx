import HeroSection from '../components/HeroSection';
import ExperienceTile from '../components/ExperienceTile';
import './Home.css';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="home-page">
            <HeroSection
                logo="/logo.png"
                subline="The Art of Extraordinary Travel"
                ctaText="Request a Private Consultation"
                ctaLink="/consultation"
                backgroundVideo="/video.mp4"
                backgroundImage="/poster.jpeg"
            />

            {/* Opening Statement Section */}
            <section className="section opening-statement">
                <div className="container">
                    <h2 className="section-title">Experiences, Not Itineraries</h2>
                    <div className="opening-content">
                        <p>
                            BelVoyage is a boutique luxury travel and experience curator devoted to crafting journeys that feel instinctive, personal, and quietly extraordinary.
                        </p>
                        <p>
                            Luxury, in the BelVoyage universe, is not defined by excess or display.
                        </p>
                        <p className="indented-block">
                            It is defined by access.<br />
                            By intimacy.<br />
                            By the ease of knowing everything has been considered before the journey even begins.
                        </p>
                        <p>
                            Each journey is designed around the individual - their pace, passions, and purpose - and realised through a global network of trusted specialists and private relationships.
                        </p>
                        <p className="indented-block emphasis">
                            No templates.<br />
                            No standard routes.<br />
                            Only journeys that feel as though they could belong to no one else.
                        </p>
                    </div>
                </div>
            </section>

            {/* Experience Tiles */}
            <section className="section experience-tiles">
                <div className="container">
                    <div className="tiles-grid">
                        <ExperienceTile
                            title="Rare Asia"
                            description="Where ritual, heritage, and quiet exclusivity shape journeys of depth."
                            image="https://images.unsplash.com/photo-1545569341-9eb8b30979d9?q=80&w=2940&auto=format&fit=crop"
                            link="/experiences#rare-asia"
                        />
                        <ExperienceTile
                            title="Private Europe"
                            description="From private estates to after-hours access - Europe beyond the expected."
                            image="https://images.unsplash.com/photo-1467269204594-9661b134dd2b?q=80&w=2940&auto=format&fit=crop"
                            link="/experiences#private-europe"
                        />
                        <ExperienceTile
                            title="Once in a Lifetime Journeys"
                            description="Experiences designed not to be repeated, even by us."
                            image="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=2940&auto=format&fit=crop"
                            link="/experiences#once-in-a-lifetime"
                        />
                        <ExperienceTile
                            title="Desert & Wilderness"
                            description="Silence, scale, and presence. From the Thar Desert to East Africa's vast landscapes."
                            image="https://images.unsplash.com/photo-1509316785289-025f5b846b35?q=80&w=2940&auto=format&fit=crop"
                            link="/experiences#desert-wilderness"
                        />
                    </div>
                    <div className="tiles-cta">
                        <Link to="/experiences" className="btn btn-secondary">
                            Explore Signature Experiences
                        </Link>
                    </div>
                </div>
            </section>

            {/* Philosophy Highlight */}
            <section className="section philosophy-section">
                <div className="container philosophy-content">
                    <p className="philosophy-statement">
                        BelVoyage does not aim to show clients the world.
                    </p>
                    <p className="philosophy-statement">
                        It aims to help them <span className="highlight">EXPERIENCE</span> it differently.
                    </p>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section cta-section">
                <div className="container cta-content">
                    <h2>Begin the Conversation</h2>
                    <p className="cta-subtitle">
                        Journeys are created exclusively on request.<br />
                        Each enquiry is handled with complete discretion.
                    </p>
                    <Link to="/consultation" className="btn btn-primary">
                        Request a Private Consultation
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default Home;

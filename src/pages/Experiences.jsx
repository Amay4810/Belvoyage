import HeroSection from '../components/HeroSection';
import ExperienceCard from '../components/ExperienceCard';
import './Experiences.css';
import { Link } from 'react-router-dom';

const Experiences = () => {
    return (
        <div className="experiences-page">
            {/* Hero Section */}
            <div className="experiences-hero">
                <div className="container">
                    <h1>Signature Experiences</h1>
                    <p className="hero-subtitle">
                        Certain journeys defy categorisation.<br />
                        BelVoyage curates experience collections designed to inspire imagination.
                    </p>
                </div>
            </div>

            {/* Experience Collections */}
            <section className="section experiences-grid-section">
                <div className="container">
                    <div className="experiences-grid">
                        <ExperienceCard
                            title="Private Europe"
                            description="From privately accessed vineyards in Italy to after-hours museum viewings and time-honoured family estates, European journeys unfold far beyond guidebooks and crowds - featuring moments such as candlelit cellar tastings with winemakers, private art encounters after closing hours, and stays shaped by lineage rather than luxury alone.

Every detail is considered around pace, privacy, and personal taste."
                            ctaText="Discuss This Journey"
                            ctaLink="/consultation"
                            image="https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?q=80&w=2883&auto=format&fit=crop"
                            id="private-europe"
                        />

                        <ExperienceCard
                            title="Rare Asia"
                            description="In regions where ritual, philosophy, and living tradition shape daily life, BelVoyage designs journeys grounded in reverence and depth.

From monastic Himalayan kingdoms to Japan's ceremonial worlds, Asia reveals itself through silence, symbolism, and privileged access."
                            ctaText="Discuss This Journey"
                            ctaLink="/consultation"
                            image="https://images.unsplash.com/photo-1545569341-9eb8b30979d9?q=80&w=2940&auto=format&fit=crop"
                            reverse={true}
                            id="rare-asia"
                        />

                        <ExperienceCard
                            title="Bespoke Celebrations"
                            description="Anniversaries, milestones, and deeply personal moments deserve journeys designed to be remembered long after they end.

BelVoyage creates celebrations that are intimate, cinematic, and layered with meaning — experiences that live on as memory, not itinerary."
                            ctaText="Design a Celebration"
                            ctaLink="/consultation"
                            image="https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=2069&auto=format&fit=crop"
                            id="bespoke-celebrations"
                        />

                        <ExperienceCard
                            title="Once in a Lifetime Journeys"
                            description="Some journeys are created simply because they can be.

Rare access. Unrepeatable moments. Journeys that exist once and remain unforgettable."
                            ctaText="Begin a Private Conversation"
                            ctaLink="/consultation"
                            image="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=2940&auto=format&fit=crop"
                            reverse={true}
                            id="once-in-a-lifetime"
                        />

                        <ExperienceCard
                            title="Desert & Wilderness"
                            description="Silence, scale, and presence.

Whether in the golden stillness of the Thar Desert or the vast landscapes of East Africa, these journeys are designed around space, solitude, and refined immersion.

Destinations include: Jaisalmer, Tanzania"
                            ctaText="Explore Wilderness Journeys"
                            ctaLink="/consultation"
                            image="https://images.unsplash.com/photo-1509316785289-025f5b846b35?q=80&w=2940&auto=format&fit=crop"
                            id="desert-wilderness"
                        />

                        <ExperienceCard
                            title="Island Sanctuaries"
                            description="The world's most refined island destinations offer more than escape - they provide space for renewal.

From the Maldives to Croatia's pristine coastlines, BelVoyage curates island experiences grounded in privacy, architecture, and the quiet luxury of isolation."
                            ctaText="Discover Island Journeys"
                            ctaLink="/consultation"
                            image="https://images.unsplash.com/photo-1559827260-dc66d52bef19?q=80&w=2940&auto=format&fit=crop"
                            reverse={true}
                            id="island-sanctuaries"
                        />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Experiences;

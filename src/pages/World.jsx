import './World.css';

const World = () => {
    const destinations = [
        { name: 'Jaisalmer', description: 'Desert heritage, private fortresses, cinematic solitude' },
        { name: 'Italy', description: 'Private estates, vineyards, art, and family legacies' },
        { name: 'Bhutan', description: 'Spiritual immersion, nature, and quiet exclusivity' },
        { name: 'Tanzania', description: 'Refined wilderness, conservation-led luxury' },
        { name: 'Sri Lanka', description: 'Culture, tea country, coastlines, and slow travel' },
        { name: 'Japan', description: 'Ritual, precision, tradition, and contemporary culture' },
        { name: 'Bali', description: 'Design-led wellness and private sanctuaries' },
        { name: 'Croatia', description: 'Islands, yachting, understated elegance' },
        { name: 'Maldives', description: 'Privacy, architecture, ocean worlds' },
        { name: 'Romania', description: "Castles, forests, folklore, Europe's last secrets" },
    ];

    return (
        <div className="world-page">
            {/* Hero */}
            <section className="world-hero section">
                <div className="container">
                    <h1>The BelVoyage World</h1>
                    <p className="world-intro">
                        Where BelVoyage's expertise runs deep.
                    </p>
                    <p className="world-description">
                        Certain destinations form the backbone of BelVoyage's work — places where relationships,
                        cultural understanding, and on-ground presence allow journeys to unfold effortlessly.
                    </p>
                </div>
            </section>

            {/* Signature Destinations */}
            <section className="section destinations-section">
                <div className="container">
                    <h2 className="section-title">Signature Destinations</h2>

                    <div className="destinations-grid">
                        {destinations.map((dest, index) => (
                            <div key={index} className="destination-card">
                                <h3>{dest.name}</h3>
                                <p>{dest.description}</p>
                            </div>
                        ))}
                    </div>

                    <p className="destinations-note">
                        Within these destinations, BelVoyage operates with <em>fluency</em> rather than <em>familiarity</em>.
                    </p>
                </div>
            </section>

            {/* Beyond Borders */}
            <section className="section beyond-section">
                <div className="container">
                    <h2>Beyond Borders</h2>
                    <h3 className="beyond-subtitle">Bespoke Journeys, Anywhere</h3>

                    <div className="beyond-content">
                        <p>
                            Beyond its Signature Destinations, BelVoyage designs journeys anywhere in the world.
                        </p>
                        <p>
                            Clients may arrive with a destination — or simply a feeling they wish to experience. From there,
                            BelVoyage identifies the right people, unlocks the right access, and designs something entirely
                            personal.
                        </p>
                        <p className="beyond-closing">
                            The world is not divided into "covered" and "uncovered" places.<br />
                            Only into journeys designed with care — and those that are not.
                        </p>
                    </div>

                    <div className="destinations-closing">
                        <p>
                            Within these destinations, BelVoyage operates with fluency rather than familiarity — allowing journeys to feel instinctive, unforced, and deeply considered.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default World;

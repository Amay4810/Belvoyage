import HeroSection from '../components/HeroSection';
import './Philosophy.css';
import { motion } from 'framer-motion';

const Philosophy = () => {
    return (
        <div className="philosophy-page">
            <HeroSection
                headline={
                    <>
                        We don't sell Itineraries,<br />
                        We design Journeys
                    </>
                }
                backgroundImage="/Philosophy.jpeg"
            />

            {/* The BelVoyage Approach */}
            <section className="section belvoyage-approach">
                <div className="container">
                    <h2 className="section-title">The BelVoyage Approach</h2>

                    <div className="approach-grid">
                        <motion.div
                            className="approach-item"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <h3>Discretion</h3>
                            <p>
                                Privacy is not a feature, it is a foundation. Journeys are designed and delivered quietly, without spectacle.
                            </p>
                        </motion.div>

                        <motion.div
                            className="approach-item"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            viewport={{ once: true }}
                        >
                            <h3>Customisation & Curation</h3>
                            <p>
                                Every journey begins with intent, not destination. Nothing is pre-set. Nothing is assumed.
                            </p>
                        </motion.div>

                        <motion.div
                            className="approach-item"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            <h3>Access</h3>
                            <p>
                                BelVoyage unlocks places, moments, and encounters unavailable through conventional travel channels.
                            </p>
                        </motion.div>

                        <motion.div
                            className="approach-item"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            viewport={{ once: true }}
                        >
                            <h3>Trust</h3>
                            <p>
                                Relationships - with clients and partners alike - are built over time and protected fiercely.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Who BelVoyage Is For */}
            <section className="section target-audience">
                <div className="container">
                    <h2 className="section-title">Who BelVoyage Is For</h2>

                    <div className="audience-content">
                        <p className="intro-text">
                            BelVoyage is designed for individuals, families, and private groups who:
                        </p>

                        <ul className="audience-list">
                            <li>Value privacy over publicity</li>
                            <li>Seek meaning over momentum</li>
                            <li>Prefer depth over volume</li>
                            <li>Appreciate refinement and cultural intelligence</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* A Discreet Global Network */}
            <section className="section global-network">
                <div className="container">
                    <h2 className="section-title">A Discreet Global Network</h2>

                    <div className="network-content">
                        <p>
                            BelVoyage operates through a carefully cultivated global network of specialists - destination experts, heritage properties, conservation-led lodges, private hosts, and cultural institutions - aligned with the same standards of excellence, discretion, and integrity.
                        </p>
                        <p>
                            These relationships are built over time, not transactions.
                        </p>
                        <p>
                            They allow BelVoyage to design journeys that unfold seamlessly, often beyond public availability - without the need for visibility or promotion.
                        </p>
                        <p className="closing-statement">
                            No public lists.<br />
                            No visible affiliations.<br />
                            Only quiet access.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Philosophy;

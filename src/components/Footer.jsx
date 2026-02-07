import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="footer-content container">
                {/* Main Footer Text */}
                <div className="footer-main">
                    <h3 className="footer-tagline">BelVoyage — The Art of Extraordinary Travel</h3>
                    <p className="footer-subtitle">
                        Journeys curated privately and exclusively on request.
                    </p>
                </div>

                {/* Footer Links */}
                <div className="footer-links">
                    <div className="footer-col">
                        <h4>Explore</h4>
                        <Link to="/philosophy">Philosophy</Link>
                        <Link to="/experiences">Signature Experiences</Link>
                        <Link to="/world">The World</Link>
                        <Link to="/journeys">Sample Journeys</Link>
                    </div>

                    <div className="footer-col">
                        <h4>Connect</h4>
                        <Link to="/consultation">Private Consultation</Link>
                        <Link to="/about">About</Link>
                        <Link to="/contact">Concierge</Link>
                    </div>

                    <div className="footer-col">
                        <h4>Contact</h4>
                        <a href="mailto:concierge@thebelvoyage.com">concierge@thebelvoyage.com</a>
                        <p>New Delhi, India</p>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="footer-bottom">
                    <p className="footer-legal">
                        BelVoyage is a luxury travel brand operated by MKM Air Travels Pvt. Ltd.
                    </p>
                    <p className="footer-copyright">
                        © {currentYear} BelVoyage. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

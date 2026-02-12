import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import logoImage from '../assets/images/logo.png';
import './Header.css';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 100);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu when route changes
    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [location]);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Philosophy', path: '/philosophy' },
        { name: 'Experiences', path: '/experiences' },
        { name: 'The World', path: '/world' },
        { name: 'Sample Journeys', path: '/journeys' },
        { name: 'About', path: '/about' },
        { name: 'Concierge', path: '/contact' },
    ];

    return (
        <motion.header
            className={`header ${isScrolled ? 'scrolled' : ''}`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6 }}
        >
            <div className="header-container container">
                {/* Logo */}
                <Link to="/" className="header-logo">
                    <img src={logoImage} alt="BelVoyage" className="logo-image" />
                </Link>

                {/* Desktop Navigation */}
                <nav className="header-nav desktop-nav">
                    {navLinks.map((link) => (
                        <Link
                            key={link.path}
                            to={link.path}
                            className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>

                {/* CTA Button */}
                <Link to="/consultation" className="header-cta">
                    Private Consultation
                </Link>

                {/* Mobile Menu Toggle */}
                <button
                    className="mobile-menu-toggle"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Toggle menu"
                >
                    <span className={`burger-line ${isMobileMenuOpen ? 'open' : ''}`}></span>
                    <span className={`burger-line ${isMobileMenuOpen ? 'open' : ''}`}></span>
                    <span className={`burger-line ${isMobileMenuOpen ? 'open' : ''}`}></span>
                </button>
            </div>

            {/* Mobile Menu */}
            <motion.nav
                className={`mobile-nav ${isMobileMenuOpen ? 'open' : ''}`}
                initial={false}
                animate={{ height: isMobileMenuOpen ? 'auto' : 0 }}
                transition={{ duration: 0.3 }}
            >
                <div className="mobile-nav-content">
                    {navLinks.map((link) => (
                        <Link
                            key={link.path}
                            to={link.path}
                            className={`mobile-nav-link ${location.pathname === link.path ? 'active' : ''}`}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link to="/consultation" className="mobile-nav-cta">
                        Request Consultation
                    </Link>
                </div>
            </motion.nav>
        </motion.header>
    );
};

export default Header;

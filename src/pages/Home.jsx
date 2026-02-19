import { useState, useEffect, useRef, useCallback } from 'react';
import HeroSection from '../components/HeroSection';
import ExperienceTile from '../components/ExperienceTile';
import './Home.css';
import { Link } from 'react-router-dom';

// All 6 Signature Experiences — kept in sync with Experiences.jsx
const TILES = [
    {
        title: "Private Europe",
        description: "From private estates to after-hours access — Europe beyond the expected.",
        image: "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?q=80&w=2883&auto=format&fit=crop",
        link: "/experiences#private-europe",
    },
    {
        title: "Rare Asia",
        description: "Where ritual, heritage, and quiet exclusivity shape journeys of depth.",
        image: "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?q=80&w=2940&auto=format&fit=crop",
        link: "/experiences#rare-asia",
    },
    {
        title: "Bespoke Celebrations",
        description: "Anniversaries, milestones, and deeply personal moments — intimate, cinematic, unforgettable.",
        image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=2069&auto=format&fit=crop",
        link: "/experiences#bespoke-celebrations",
    },
    {
        title: "Once in a Lifetime Journeys",
        description: "Rare access. Unrepeatable moments. Journeys that exist once and remain unforgettable.",
        image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=2940&auto=format&fit=crop",
        link: "/experiences#once-in-a-lifetime",
    },
    {
        title: "Desert & Wilderness",
        description: "Silence, scale, and presence. From the Thar Desert to East Africa's vast landscapes.",
        image: "https://images.unsplash.com/photo-1509316785289-025f5b846b35?q=80&w=2940&auto=format&fit=crop",
        link: "/experiences#desert-wilderness",
    },
    {
        title: "Island Sanctuaries",
        description: "Privacy, architecture, and the quiet luxury of isolation — from the Maldives to Croatia.",
        image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?q=80&w=2940&auto=format&fit=crop",
        link: "/experiences#island-sanctuaries",
    },
];

const TOTAL = TILES.length; // 6

const Home = () => {
    const [current, setCurrent] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const [isDragging, setIsDragging] = useState(false);
    const touchStartX = useRef(null);
    const dragStartX = useRef(null);
    const carouselRef = useRef(null);

    const prev = useCallback(() => setCurrent((i) => (i - 1 + TOTAL) % TOTAL), []);
    const next = useCallback(() => setCurrent((i) => (i + 1) % TOTAL), []);
    const goTo = useCallback((i) => setCurrent(i), []);

    // Auto-play
    useEffect(() => {
        if (isPaused) return;
        const id = setInterval(() => setCurrent((i) => (i + 1) % TOTAL), 5000);
        return () => clearInterval(id);
    }, [isPaused]);

    // Keyboard
    useEffect(() => {
        const el = carouselRef.current;
        const onKey = (e) => {
            if (e.key === 'ArrowLeft') prev();
            if (e.key === 'ArrowRight') next();
        };
        el?.addEventListener('keydown', onKey);
        return () => el?.removeEventListener('keydown', onKey);
    }, [prev, next]);

    // Touch
    const onTouchStart = (e) => { touchStartX.current = e.touches[0].clientX; setIsPaused(true); };
    const onTouchEnd = (e) => {
        if (touchStartX.current === null) return;
        const d = touchStartX.current - e.changedTouches[0].clientX;
        if (Math.abs(d) > 50) d > 0 ? next() : prev();
        touchStartX.current = null;
        setIsPaused(false);
    };

    // Mouse drag
    const onMouseDown = (e) => { dragStartX.current = e.clientX; setIsDragging(true); setIsPaused(true); };
    const onMouseUp = (e) => {
        if (!isDragging || dragStartX.current === null) return;
        const d = dragStartX.current - e.clientX;
        if (Math.abs(d) > 50) d > 0 ? next() : prev();
        dragStartX.current = null; setIsDragging(false); setIsPaused(false);
    };
    const onMouseLeave = () => {
        if (isDragging) { dragStartX.current = null; setIsDragging(false); }
        setIsPaused(false);
    };

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

            {/* Opening Statement */}
            <section className="section opening-statement">
                <div className="container">
                    <h2 className="section-title">Experiences, Not Itineraries</h2>
                    <div className="opening-content">
                        <p>
                            BelVoyage is a boutique luxury travel and experience curator devoted to crafting journeys that feel instinctive, personal, and quietly extraordinary.
                        </p>
                        <p>Luxury, in the BelVoyage universe, is not defined by excess or display.</p>
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

            {/* ── Signature Experiences Carousel ── */}
            <section className="section experience-tiles">
                <div className="container">
                    <h2 className="section-title">Signature Experiences</h2>

                    {/* Counter */}
                    <div className="carousel-counter">
                        <span className="carousel-counter-current">{String(current + 1).padStart(2, '0')}</span>
                        <span className="carousel-counter-sep"> / </span>
                        <span className="carousel-counter-total">{String(TOTAL).padStart(2, '0')}</span>
                    </div>

                    <div
                        className={`carousel-root${isDragging ? ' is-dragging' : ''}`}
                        ref={carouselRef}
                        style={{ '--current': current, '--total': TOTAL }}
                        tabIndex={0}
                        aria-label="Signature Experiences carousel"
                        onMouseEnter={() => setIsPaused(true)}
                        onMouseLeave={onMouseLeave}
                        onTouchStart={onTouchStart}
                        onTouchEnd={onTouchEnd}
                        onMouseDown={onMouseDown}
                        onMouseUp={onMouseUp}
                    >
                        {/* Track: 1 tile per view, always */}
                        <div className="carousel-track-wrapper">
                            <div
                                className="carousel-track"
                                style={{ transform: `translateX(-${current * 100}%)` }}
                            >
                                {TILES.map((tile, i) => (
                                    <div
                                        key={tile.title}
                                        className={`carousel-slide${i === current ? ' is-active' : ''}`}
                                        aria-hidden={i !== current}
                                    >
                                        <ExperienceTile
                                            title={tile.title}
                                            description={tile.description}
                                            image={tile.image}
                                            link={tile.link}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Prev */}
                        <button className="carousel-btn carousel-btn--prev" onClick={prev} aria-label="Previous experience">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                                <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>

                        {/* Next */}
                        <button className="carousel-btn carousel-btn--next" onClick={next} aria-label="Next experience">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>

                        {/* Dots */}
                        <div className="carousel-dots" role="tablist">
                            {TILES.map((tile, i) => (
                                <button
                                    key={tile.title}
                                    className={`carousel-dot${i === current ? ' is-active' : ''}`}
                                    onClick={() => goTo(i)}
                                    role="tab"
                                    aria-selected={i === current}
                                    aria-label={tile.title}
                                />
                            ))}
                        </div>

                        {/* Progress bar */}
                        <div className="carousel-progress">
                            <div
                                className="carousel-progress-bar"
                                style={{ width: `${((current + 1) / TOTAL) * 100}%` }}
                            />
                        </div>
                    </div>

                    <div className="tiles-cta">
                        <Link to="/experiences" className="btn btn-secondary">
                            Explore Signature Experiences
                        </Link>
                    </div>
                </div>
            </section>

            {/* Philosophy */}
            <section className="section philosophy-section">
                <div className="container philosophy-content">
                    <p className="philosophy-statement">BelVoyage does not aim to show clients the world.</p>
                    <p className="philosophy-statement">
                        It aims to help them <span className="highlight">EXPERIENCE</span> it differently.
                    </p>
                </div>
            </section>

            {/* CTA */}
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

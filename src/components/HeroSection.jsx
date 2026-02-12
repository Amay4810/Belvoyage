import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import './HeroSection.css';

const HeroSection = ({
    headline,
    logo,
    subline,
    ctaText,
    ctaLink,
    backgroundImage,
    backgroundVideo
}) => {
    const videoRef = useRef(null);
    const [hasInteracted, setHasInteracted] = useState(false);

    useEffect(() => {
        const video = videoRef.current;
        if (!video || !backgroundVideo) return;

        // Attempt 1: Immediate play
        const attemptPlay = async () => {
            try {
                video.muted = true; // Ensure muted before play
                await video.play();
                setHasInteracted(true);
            } catch (error) {
                console.log('Initial autoplay blocked:', error);
                // Fallback to intersection observer
            }
        };

        // Attempt 2: Play when in viewport
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && !hasInteracted) {
                        video.play().then(() => {
                            setHasInteracted(true);
                        }).catch((err) => {
                            console.log('Intersection autoplay blocked:', err);
                        });
                    }
                });
            },
            { threshold: 0.5 } // Play when 50% visible
        );

        attemptPlay();
        observer.observe(video);

        return () => {
            observer.disconnect();
        };
    }, [backgroundVideo, hasInteracted]);

    return (
        <section className="hero-section">
            {/* Background Media */}
            <div className="hero-background">
                {backgroundVideo ? (
                    <video
                        ref={videoRef}
                        autoPlay
                        loop
                        muted
                        playsInline
                        webkit-playsinline="true"
                        preload="auto"
                        disablePictureInPicture
                        disableRemotePlayback
                        x5-playsinline="true"
                        poster={backgroundImage}
                        className="hero-video"
                    >
                        <source src={backgroundVideo} type="video/mp4" />
                    </video>
                ) : (
                    <div
                        className="hero-image"
                        style={{ backgroundImage: `url(${backgroundImage})` }}
                    />
                )}
                <div className="hero-overlay" />
            </div>

            {/* Content */}
            <div className="hero-content container">
                {logo ? (
                    <motion.img
                        src={logo}
                        alt="BelVoyage"
                        className="hero-logo"
                        initial={{ opacity: 0, y: 60 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                    />
                ) : (
                    <motion.h1
                        className="hero-headline"
                        initial={{ opacity: 0, y: 60 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                    >
                        {headline}
                    </motion.h1>
                )}

                <motion.p
                    className="hero-subline"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                    {subline}
                </motion.p>

                {ctaText && ctaLink && (
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
                    >
                        <a href={ctaLink} className="btn-primary hero-cta">
                            {ctaText}
                        </a>
                    </motion.div>
                )}
            </div>

            {/* Scroll Indicator */}
            <motion.div
                className="scroll-indicator"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1.5 }}
            >
                <div className="scroll-line" />
            </motion.div>
        </section>
    );
};

HeroSection.propTypes = {
    headline: PropTypes.string,
    logo: PropTypes.string,
    subline: PropTypes.string,
    ctaText: PropTypes.string.isRequired,
    ctaLink: PropTypes.string,
    backgroundImage: PropTypes.string,
    backgroundVideo: PropTypes.string,
};

HeroSection.defaultProps = {
    headline: '',
    logo: '',
    subline: '',
    ctaLink: '#',
    backgroundImage: '',
    backgroundVideo: '',
};

export default HeroSection;

import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import './ExperienceTile.css';

const ExperienceTile = ({ title, description, image, link }) => {
    return (
        <motion.a
            href={link}
            className="experience-tile"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            whileHover={{ y: -10 }}
        >
            <div className="tile-image-wrapper">
                <div
                    className="tile-image"
                    style={{ backgroundImage: `url(${image})` }}
                />
                <div className="tile-overlay" />
            </div>

            <div className="tile-content">
                <h3 className="tile-title">{title}</h3>
                <p className="tile-description">{description}</p>
            </div>

            <div className="tile-arrow">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </div>
        </motion.a>
    );
};

ExperienceTile.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    link: PropTypes.string,
};

ExperienceTile.defaultProps = {
    link: '#',
};

export default ExperienceTile;

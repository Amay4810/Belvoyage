import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './ExperienceCard.css';

const ExperienceCard = ({ title, description, image, cta }) => {
    return (
        <motion.div
            className="experience-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
        >
            <div
                className="experience-card-image"
                style={{ backgroundImage: `url(${image})` }}
            >
                <div className="experience-card-overlay" />
            </div>

            <div className="experience-card-content">
                <h3>{title}</h3>
                <p>{description}</p>
                <Link to="/consultation" className="experience-card-cta">
                    {cta}
                </Link>
            </div>
        </motion.div>
    );
};

ExperienceCard.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    cta: PropTypes.string.isRequired,
};

export default ExperienceCard;

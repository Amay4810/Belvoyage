import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { EMAILJS_CONFIG } from '../config/emailjs.config';
import './Consultation.css';

const Consultation = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const [submitted, setSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitError, setSubmitError] = useState(false);

    const onSubmit = async (data) => {
        setIsSubmitting(true);
        setSubmitError(false);

        // Prepare email data for EmailJS
        const emailData = {
            service_id: EMAILJS_CONFIG.SERVICE_ID,
            template_id: EMAILJS_CONFIG.TEMPLATE_ID,
            user_id: EMAILJS_CONFIG.PUBLIC_KEY,
            template_params: {
                from_name: data.fullName,
                from_email: data.email,
                phone: data.phone,
                destinations: data.destinations || 'Not specified',
                travel_dates: data.travelDates || 'Not specified',
                travelers: data.travelers || 'Not specified',
                budget: data.budget || 'Not specified',
                occasion: data.occasion || 'Not specified',
                experience: data.experience || 'Not specified',
            }
        };

        try {
            // Primary method: Direct EmailJS API call
            const emailjsResponse = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(emailData)
            });

            if (emailjsResponse.ok) {
                setSubmitted(true);
                reset();

                setTimeout(() => {
                    setSubmitted(false);
                }, 10000);
                return;
            }

            throw new Error('EmailJS request failed');

        } catch (emailjsError) {
            // Fallback method: Formspree (backup in case EmailJS has issues)
            try {
                const formspreeData = {
                    email: 'concierge@thebelvoyage.com',
                    subject: `New BelVoyage Consultation from ${data.fullName}`,
                    message: `
CONSULTATION REQUEST

CLIENT DETAILS:
Name: ${data.fullName}
Email: ${data.email}
Phone: ${data.phone}

TRAVEL PREFERENCES:
Destinations: ${data.destinations || 'Not specified'}
Travel Dates: ${data.travelDates || 'Not specified'}
Number of Travelers: ${data.travelers || 'Not specified'}
Budget: ${data.budget || 'Not specified'}
Occasion: ${data.occasion || 'Not specified'}

EXPERIENCE SEEKING:
${data.experience || 'Not specified'}

---
Submitted via BelVoyage Website
                    `,
                    _replyto: data.email,
                    _subject: `New BelVoyage Consultation from ${data.fullName}`
                };

                const formspreeResponse = await fetch('https://formspree.io/f/xanyrbja', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    },
                    body: JSON.stringify(formspreeData)
                });

                if (formspreeResponse.ok) {
                    setSubmitted(true);
                    reset();

                    setTimeout(() => {
                        setSubmitted(false);
                    }, 10000);
                    return;
                }

                throw new Error('Formspree also failed');

            } catch (formspreeError) {
                console.error('Email submission failed:', formspreeError);
                setSubmitError(true);
            }
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="consultation-page">
            {/* Hero */}
            <div className="consultation-hero section">
                <div className="container">
                    <h1>Request a Private Consultation</h1>
                    <p className="consultation-intro">
                        Each journey we design is bespoke.<br />
                        Kindly share a few details so our consultants can understand your expectations.
                    </p>
                </div>
            </div>

            {/* Form Section */}
            <section className="section form-section">
                <div className="container">
                    <form onSubmit={handleSubmit(onSubmit)} className="consultation-form">
                        {/* Full Name */}
                        <div className="form-group">
                            <label htmlFor="fullName">Full Name *</label>
                            <input
                                type="text"
                                id="fullName"
                                {...register('fullName', { required: 'Full name is required' })}
                                className={errors.fullName ? 'error' : ''}
                            />
                            {errors.fullName && <span className="error-message">{errors.fullName.message}</span>}
                        </div>

                        {/* Phone Number */}
                        <div className="form-group">
                            <label htmlFor="phone">Phone Number (WhatsApp preferred) *</label>
                            <input
                                type="tel"
                                id="phone"
                                {...register('phone', { required: 'Phone number is required' })}
                                className={errors.phone ? 'error' : ''}
                            />
                            {errors.phone && <span className="error-message">{errors.phone.message}</span>}
                        </div>

                        {/* Email */}
                        <div className="form-group full-width">
                            <label htmlFor="email">Email Address *</label>
                            <input
                                type="email"
                                id="email"
                                {...register('email', {
                                    required: 'Email is required',
                                    pattern: {
                                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                        message: 'Invalid email address'
                                    }
                                })}
                                className={errors.email ? 'error' : ''}
                            />
                            {errors.email && <span className="error-message">{errors.email.message}</span>}
                        </div>

                        {/* Destination(s) of Interest */}
                        <div className="form-group full-width">
                            <label htmlFor="destinations">Destination(s) of Interest</label>
                            <input
                                type="text"
                                id="destinations"
                                placeholder="e.g., Italy, Bhutan, Maldives"
                                {...register('destinations')}
                            />
                        </div>

                        {/* Tentative Travel Dates */}
                        <div className="form-group">
                            <label htmlFor="travelDates">Tentative Travel Dates</label>
                            <input
                                type="text"
                                id="travelDates"
                                placeholder="e.g., March 2026"
                                {...register('travelDates')}
                            />
                        </div>

                        {/* Number of Travellers */}
                        <div className="form-group">
                            <label htmlFor="travelers">Number of Travellers</label>
                            <input
                                type="number"
                                id="travelers"
                                min="1"
                                {...register('travelers')}
                            />
                        </div>

                        {/* Budget */}
                        <div className="form-group full-width">
                            <label htmlFor="budget">Approximate Budget Per Person (INR)</label>
                            <select id="budget" {...register('budget')}>
                                <option value="">Please select</option>
                                <option value="1-2L">₹1-2 Lakhs</option>
                                <option value="2-5L">₹2-5 Lakhs</option>
                                <option value="5-10L">₹5-10 Lakhs</option>
                                <option value="10L+">₹10 Lakhs+</option>
                            </select>
                        </div>

                        {/* Occasion */}
                        <div className="form-group">
                            <label htmlFor="occasion">Occasion (Optional)</label>
                            <input
                                type="text"
                                id="occasion"
                                placeholder="e.g., Anniversary, Family trip"
                                {...register('occasion')}
                            />
                        </div>

                        {/* Experience Seeking */}
                        <div className="form-group full-width">
                            <label htmlFor="experience">What kind of experience are you seeking?</label>
                            <textarea
                                id="experience"
                                rows="5"
                                {...register('experience')}
                            />
                        </div>

                        {/* Submit Button */}
                        <div className="form-submit">
                            <button
                                type="submit"
                                className="btn btn-primary"
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? 'Sending...' : 'Request Consultation'}
                            </button>
                        </div>

                        {/* Success Message */}
                        {submitted && (
                            <div className="success-message">
                                <p><strong>Thank you for your request.</strong></p>
                                <p>A BelVoyage consultant will review your details and contact you shortly.</p>
                            </div>
                        )}

                        {/* Error Message */}
                        {submitError && (
                            <div className="error-message-box">
                                <p><strong>Oops! Something went wrong.</strong></p>
                                <p>Please try again later or contact us directly.</p>
                            </div>
                        )}
                    </form>
                </div>
            </section>
        </div>
    );
};

export default Consultation;

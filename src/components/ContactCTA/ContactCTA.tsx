import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './ContactCTA.module.css';

export const ContactCTA = () => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [location, setLocation] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const message = `Hey, I am ${name}. I need a waterproofing consultation in ${location}. My phone number is ${phone}.`;
        const encoded = encodeURIComponent(message);
        window.open(`https://wa.me/919008481809?text=${encoded}`, '_blank');
    };

    return (
        <section className={styles.section} id="contact">
            <div className={`container ${styles.container}`}>
                <div className={styles.info}>
                    <span className="section-tag">Get Started</span>
                    <h2 className={styles.title}>Stop Guessing.<br />Start Fixing.</h2>
                    <p className={styles.subtitle}>
                        Water leaks don't fix themselves. They spread. Book a thermal scan today
                        to locate hidden moisture and get a permanent, professional waterproofing solution.
                    </p>
                    <div className={styles.details}>
                        <div className={styles.detail}>
                            <strong>Call Us</strong>
                            <span>+91 9008481809</span>
                        </div>
                        <div className={styles.detail}>
                            <strong>Email</strong>
                            <span>townywatersolutions@gmail.com</span>
                        </div>
                        <div className={styles.detail}>
                            <strong>Service Area</strong>
                            <span>All of Bengaluru & Surroundings</span>
                        </div>
                    </div>
                </div>

                <div className={styles.formContainer}>
                    <form className={styles.form} onSubmit={handleSubmit}>
                        <div className={styles.row}>
                            <input type="text" placeholder="Your Name" required className={styles.input} value={name} onChange={(e) => setName(e.target.value)} />
                            <input type="tel" placeholder="Phone Number" required className={styles.input} value={phone} onChange={(e) => setPhone(e.target.value)} />
                        </div>
                        <input type="text" placeholder="Your Location (e.g. Koramangala, Whitefield)" required className={styles.input} value={location} onChange={(e) => setLocation(e.target.value)} />
                        <button type="submit" className={styles.submitBtn}>Request Thermal Scan</button>
                    </form>

                    <div className={styles.blogLinks}>
                        <p>Learn more about waterproofing:</p>
                        <Link to="/blog/monsoon-waterproofing">The Hidden Cost of Monsoon Leaks</Link>
                        <Link to="/blog/early-detection-thermal-scanning">Why Thermal Scanning Saves Walls</Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

import { Facebook, Instagram, MessageCircle } from 'lucide-react';
import styles from './Footer.module.css';

export const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={`container ${styles.top}`}>
                <div className={styles.brand}>
                    <img src="/logo.svg" alt="Towny Water Solutions" className={styles.logo} />
                    <p className={styles.tagline}>
                        Bengaluru's premier scientific waterproofing experts. Thermal imaging
                        and industrial-grade materials to protect your home for decades.
                    </p>
                </div>

                <div className={styles.columns}>
                    <div className={styles.col}>
                        <h4>Company</h4>
                        <a href="#services">Services</a>
                        <a href="#process">Our Process</a>
                        <a href="#before-after">Our Work</a>
                        <a href="#reviews">Reviews</a>
                    </div>
                    <div className={styles.col}>
                        <h4>Contact</h4>
                        <a href="tel:+919008481809">+91 9008481809</a>
                        <a href="mailto:townywatersolutions@gmail.com">townywatersolutions@gmail.com</a>
                        <a href="https://wa.me/919008481809?text=Hi%2C%20I%20need%20a%20waterproofing%20consultation" target="_blank" rel="noopener noreferrer">WhatsApp Us</a>
                        <span>Bengaluru, Karnataka</span>
                    </div>
                </div>
            </div>

            <div className={styles.bottom}>
                <div className={`container ${styles.bottomInner}`}>
                    <p>&copy; {new Date().getFullYear()} Towny Water Solutions. All Rights Reserved.</p>
                    <div className={styles.socials}>
                        <a href="https://facebook.com/townywatersolutions" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><Facebook size={18} /></a>
                        <a href="https://instagram.com/townywatersolutions" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><Instagram size={18} /></a>
                        <a href="https://wa.me/919008481809" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"><MessageCircle size={18} /></a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

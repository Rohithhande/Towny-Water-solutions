import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import styles from './Header.module.css';

export const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    useEffect(() => {
        if (menuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => { document.body.style.overflow = ''; };
    }, [menuOpen]);

    const close = () => setMenuOpen(false);

    return (
        <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
            <div className={`container ${styles.inner}`}>
                <Link to="/" className={styles.logo} aria-label="Towny Water Solutions Home" onClick={close}>
                    <img src="/logo.svg" alt="Towny Water Solutions" />
                </Link>

                <nav className={`${styles.nav} ${menuOpen ? styles.navOpen : ''}`}>
                    <a href="#services" className={styles.link} onClick={close}>Services</a>
                    <a href="#process" className={styles.link} onClick={close}>Our Process</a>
                    <a href="#reviews" className={styles.link} onClick={close}>Reviews</a>
                    <a href="#contact" className={styles.link} onClick={close}>Contact</a>
                    <a href="https://wa.me/919008481809?text=Hi%2C%20I%20need%20a%20waterproofing%20consultation" target="_blank" rel="noopener noreferrer" className={styles.whatsappLink} onClick={close}>WhatsApp</a>
                    <a href="#contact" className={styles.cta} onClick={close}>Get a Quote</a>
                </nav>

                <button
                    className={styles.burger}
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle navigation"
                >
                    {menuOpen ? <X size={26} /> : <Menu size={26} />}
                </button>
            </div>

            {menuOpen && <div className={styles.backdrop} onClick={close} />}
        </header>
    );
};

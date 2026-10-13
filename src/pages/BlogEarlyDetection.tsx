import { Header } from '../components/Header/Header';
import { Footer } from '../components/Footer/Footer';
import { Link } from 'react-router-dom';
import styles from './Blog.module.css';

export const BlogEarlyDetection = () => {
    return (
        <>
            <Header />
            <main className={styles.blogMain}>
                <article className={`container ${styles.article}`}>
                    <div className={styles.breadcrumb}>
                        <Link to="/">Home</Link> / Thermal Scanning
                    </div>

                    <h1 className={styles.h1}>Early Detection: How Thermal Scanning Saves Your Walls from Needless Demolition</h1>
                    <div className={styles.meta}>Published on May 28 | 5 min read</div>

                    <img src="/step-engineer.webp" alt="Engineer performing thermal scan" className={styles.heroImg} />

                    <div className={styles.content}>
                        <p>Historically, finding the exact source of a water leak meant making educated guesses, breaking tiles, and tearing down walls until the dripping pipe was found. It was invasive, messy, and extremely expensive. Today, science has given us a better way.</p>

                        <h2>What is Thermal Infrared Scanning?</h2>
                        <p>Thermal scanning uses FLIR (Forward Looking Infrared) cameras to detect minute temperature differences on the surface of your walls. Because damp patches are cooler than dry concrete, water leaks show up as distinct blue or dark patches on the thermal heat map.</p>

                        <h2>Precision Over Guesswork</h2>
                        <p>Water travels. The wet patch on your ceiling might actually originate from a pipe joint 10 feet away. Without a thermal camera, a plumber will break the ceiling where the water drops. With a thermal camera, we track the moisture trail to its true origin and fix it precisely there.</p>

                        <h2>Why It Matters</h2>
                        <ul>
                            <li><strong>Zero Demolition:</strong> We find the leak without breaking a single tile.</li>
                            <li><strong>Targeted Injection:</strong> Once found, we use PU injection grouting to seal the leak from within.</li>
                            <li><strong>Total Confidence:</strong> You see exactly what we see on the screen, taking the guesswork out of the repair.</li>
                        </ul>

                        <div className={styles.ctaBox}>
                            <h3>Stop breaking walls. Start scanning them.</h3>
                            <p>Get a highly accurate, non-invasive thermal scan report for your home today.</p>
                            <Link to="/#contact" className="btn-primary">Schedule a Scan</Link>
                        </div>
                    </div>
                </article>
            </main>
            <Footer />
        </>
    );
};

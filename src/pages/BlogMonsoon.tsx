import { Header } from '../components/Header/Header';
import { Footer } from '../components/Footer/Footer';
import { Link } from 'react-router-dom';
import styles from './Blog.module.css';

export const BlogMonsoon = () => {
    return (
        <>
            <Header />
            <main className={styles.blogMain}>
                <article className={`container ${styles.article}`}>
                    <div className={styles.breadcrumb}>
                        <Link to="/">Home</Link> / Monsoon Waterproofing
                    </div>

                    <h1 className={styles.h1}>The Hidden Cost of Monsoon Leaks: Why Waterproofing is Essential Before the Rains</h1>
                    <div className={styles.meta}>Published on June 12 | 4 min read</div>

                    <img src="/card-bangalore.webp" alt="Bangalore Monsoon Cityscape" className={styles.heroImg} />

                    <div className={styles.content}>
                        <p>When the monsoon hits Bengaluru, it brings relief from the heat—but it also stress-tests your home's structural integrity. Many homeowners ignore minor dampness on their walls until a heavy downpour turns a small water patch into a costly disaster.</p>

                        <h2>1. Structural Degradation</h2>
                        <p>Water constantly seeping through concrete doesn't just damage your paint. Over time, it reaches the internal steel rebar, causing it to rust, expand, and crack the concrete around it. This process, known as concrete spalling, can severely weaken your building.</p>

                        <h2>2. Health Hazards (Mold & Mildew)</h2>
                        <p>Damp, dark spaces inside your wall cavities are the perfect breeding ground for toxic black mold. Breathing in mold spores daily can lead to severe asthma, allergies, and chronic respiratory issues for your family.</p>

                        <h2>3. The Cost of Delay</h2>
                        <p>Fixing a minor leak with targeted injection grouting costs a fraction of what you'll pay for complete wall demolition, structural reinforcement, repainting, and re-tiling off the damaged areas.</p>

                        <div className={styles.ctaBox}>
                            <h3>Don't wait for the rain to expose the leaks.</h3>
                            <p>Our advanced FLIR thermal scanning can detect moisture hidden deep inside your walls long before it becomes visible to the naked eye.</p>
                            <Link to="/#contact" className="btn-primary">Book a Preventative Thermal Scan</Link>
                        </div>
                    </div>
                </article>
            </main>
            <Footer />
        </>
    );
};

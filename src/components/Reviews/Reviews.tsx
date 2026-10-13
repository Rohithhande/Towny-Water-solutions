import { Star } from 'lucide-react';
import { ScrollReveal } from '../ScrollReveal';
import styles from './Reviews.module.css';

const reviews = [
    {
        name: 'Rohith H.',
        location: 'Girinagar',
        text: 'We had been struggling with a leaking wall for 2 months. They scanned it in 20 minutes, found the exact source, and fixed it in a day. No leaks since.',
        stars: 5,
    },
    {
        name: 'Pavan D K.',
        location: 'Vijaynagar',
        text: 'The thermal scanning report was incredibly detailed. I could literally see where the moisture was hiding inside our wall. Professional, punctual, and thorough.',
        stars: 5,
    },
    {
        name: 'Janagar.',
        location: 'Whitefield',
        text: 'good and scientific approach and they explain everything clearly.',
        stars: 5,
    },
];

export const Reviews = () => {
    return (
        <section className={styles.section} id="reviews">
            <div className="container">
                <div className={styles.header}>
                    <span className="section-tag">Testimonials</span>
                    <h2 className={styles.title}>Trusted by Bangalore Homeowners</h2>
                </div>
                <div className={styles.grid}>
                    {reviews.map((r, i) => (
                        <ScrollReveal key={r.name} delay={i * 120}>
                            <div className={styles.card}>
                                <div className={styles.stars}>
                                    {Array.from({ length: r.stars }).map((_, j) => (
                                        <Star key={j} size={16} fill="var(--accent-orange)" stroke="var(--accent-orange)" />
                                    ))}
                                </div>
                                <p className={styles.quote}>{r.text}</p>
                                <div className={styles.author}>
                                    <strong>{r.name}</strong>
                                    <span>{r.location}</span>
                                </div>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
};

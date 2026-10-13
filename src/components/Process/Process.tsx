import { ScrollReveal } from '../ScrollReveal';
import styles from './Process.module.css';

const steps = [
    { num: '01', title: 'Book a Scan', desc: 'Schedule a visit online or call us. We arrive within 24 hours across Bengaluru.', image: '/step-book.webp' },
    { num: '02', title: 'Engineer Visit & Analysis', desc: 'Our certified engineer performs a complete thermal scan of affected areas using FLIR cameras.', image: '/step-engineer.webp' },
    { num: '03', title: 'Scientific Report', desc: 'You receive a detailed diagnostic report with thermal images, moisture levels, and a clear action plan.', image: '/step-report.webp' },
    { num: '04', title: 'Targeted Repair', desc: 'We fix only what needs fixing', image: '/step-repair.webp' },
];

export const Process = () => {
    return (
        <section className={styles.section} id="process">
            <div className="container">
                <div className={styles.header}>
                    <span className="section-tag">How It Works</span>
                    <h2 className={styles.title}>Our Scientific 4-Step Process</h2>
                    <p className={styles.subtitle}>
                        From diagnosis to permanent repair -- every step is data-driven and precise.
                    </p>
                </div>
                <div className={styles.timeline}>
                    {steps.map((s, i) => (
                        <ScrollReveal key={s.num} delay={i * 120}>
                            <div className={styles.step}>
                                <div className={styles.stepImage}>
                                    <img src={s.image} alt={s.title} />
                                    <div className={styles.numBadge}>{s.num}</div>
                                </div>
                                <div className={styles.body}>
                                    <h3>{s.title}</h3>
                                    <p>{s.desc}</p>
                                </div>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
};

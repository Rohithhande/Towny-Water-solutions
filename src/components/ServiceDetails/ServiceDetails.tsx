import { Scan, MapPin } from 'lucide-react';
import { ScrollReveal } from '../ScrollReveal';
import styles from './ServiceDetails.module.css';

const features = [
    {
        icon: Scan,
        title: 'Thermal Scanning',
        desc: 'Non-invasive infrared imaging detects moisture hidden deep inside walls, ceilings, and floors -- without any demolition.',
        image: '/card-thermal.webp',
    },
    {
        icon: MapPin,
        title: 'All of Bangalore',
        desc: 'From Indiranagar to Whitefield, Jayanagar to Electronic City -- we serve the entire Bengaluru metro area.',
        image: '/card-bangalore.webp',
    },
];

export const ServiceDetails = () => {
    return (
        <section className={styles.section} id="services">
            <div className="container">
                <div className={styles.header}>
                    <span className="section-tag">Our Expertise</span>
                    <h2 className={styles.title}>One Service. Done Right.</h2>
                    <p className={styles.subtitle}>
                        We specialize exclusively in thermal scanning and structural waterproofing.
                        No distractions. No half-measures. Just science-backed leak detection and permanent repairs.
                    </p>
                </div>
                <div className={styles.grid}>
                    {features.map((f, i) => (
                        <ScrollReveal key={f.title} delay={i * 150}>
                            <div className={styles.card}>
                                <div className={styles.cardImage}>
                                    <img src={f.image} alt={f.title} />
                                </div>
                                <div className={styles.cardBody}>
                                    <div className={styles.iconWrap}>
                                        <f.icon size={24} />
                                    </div>
                                    <h3>{f.title}</h3>
                                    <p>{f.desc}</p>
                                </div>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
};

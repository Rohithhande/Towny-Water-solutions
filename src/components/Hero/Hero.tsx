import { useRef, useEffect } from 'react';
import styles from './Hero.module.css';

export const Hero = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const thermalRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const thermal = thermalRef.current;
        const container = containerRef.current;
        if (!thermal || !container) return;

        let frameId: number;
        let cx = 50, cy = 50, tx = 50, ty = 50;
        let lastSwitch = 0;

        // Animation loop: updates CSS custom properties directly on the DOM element
        const animate = (ts: number) => {
            // Pick a new random target every 2 seconds
            if (ts - lastSwitch > 2000) {
                tx = 10 + Math.random() * 80;
                ty = 10 + Math.random() * 80;
                lastSwitch = ts;
            }

            // Smooth interpolation toward target
            cx += (tx - cx) * 0.035;
            cy += (ty - cy) * 0.035;

            // Direct DOM style update -- bypasses React rendering entirely
            thermal.style.setProperty('--mx', `${cx}%`);
            thermal.style.setProperty('--my', `${cy}%`);

            frameId = requestAnimationFrame(animate);
        };

        // Always start the animation (works on mobile AND as idle desktop animation)
        frameId = requestAnimationFrame(animate);

        // Desktop: mouse overrides the random animation position
        const onMove = (e: MouseEvent) => {
            const r = container.getBoundingClientRect();
            tx = ((e.clientX - r.left) / r.width) * 100;
            ty = ((e.clientY - r.top) / r.height) * 100;
            // Reset the timer so mouse control feels immediate
            lastSwitch = performance.now();
        };

        container.addEventListener('mousemove', onMove);

        return () => {
            cancelAnimationFrame(frameId);
            container.removeEventListener('mousemove', onMove);
        };
    }, []);

    return (
        <section className={styles.hero} id="hero" ref={containerRef}>
            <div className={styles.bgLayer}>
                <div className={styles.bgNormal} />
                <div className={styles.bgThermal} ref={thermalRef} />
                <div className={styles.scanGrid} />
                <div className={styles.overlay} />
            </div>

            <div className={`container ${styles.content}`}>
                <div className={styles.badge}>Early Detection, Maximum Protection</div>
                <h1 className={styles.title}>
                    <span className="text-gradient">Scan.</span> Detect. Protect.
                </h1>
                <p className={styles.subtitle}>
                    We use advanced thermal scanning to pinpoint hidden water leaks
                    inside your walls before they cause structural damage -- and fix them permanently.
                </p>
                <div className={styles.actions}>
                    <a href="#contact" className={styles.primaryBtn}>Book a Thermal Scan</a>
                    <a href="https://wa.me/919008481809?text=Hi%2C%20I%20need%20a%20waterproofing%20consultation" target="_blank" rel="noopener noreferrer" className={styles.whatsappBtn}>
                        WhatsApp Us
                    </a>
                </div>
            </div>
        </section>
    );
};

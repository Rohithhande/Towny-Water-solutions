import { useState } from 'react';
import styles from './BeforeAfter.module.css';

export const BeforeAfter = () => {
    const [pos, setPos] = useState(50);

    return (
        <section className={styles.section} id="before-after">
            <div className="container">
                <div className={styles.header}>
                    <span className="section-tag">Real Results</span>
                    <h2 className={styles.title}>See the Difference</h2>
                    <p className={styles.subtitle}>
                        Drag the slider to reveal how our waterproofing transforms damaged walls.
                    </p>
                </div>
                <div className={styles.slider}>
                    <div className={styles.imgWrap}>
                        {/* After image (background, full width) */}
                        <img src="/after.webp" alt="Wall after waterproofing repair" className={styles.afterImg} />
                        {/* Before image (clipped by slider position) */}
                        <div className={styles.beforeClip} style={{ width: `${pos}%` }}>
                            <img src="/before.webp" alt="Wall with water damage before repair" className={styles.beforeImg} />
                        </div>
                        {/* Slider handle */}
                        <input
                            type="range"
                            min={0}
                            max={100}
                            value={pos}
                            onChange={(e) => setPos(Number(e.target.value))}
                            className={styles.range}
                            aria-label="Before and after comparison slider"
                        />
                        <div className={styles.handle} style={{ left: `${pos}%` }}>
                            <div className={styles.handleLine} />
                        </div>
                        <span className={styles.labelBefore}>BEFORE</span>
                        <span className={styles.labelAfter}>AFTER</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

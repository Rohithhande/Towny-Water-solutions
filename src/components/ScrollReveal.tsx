import { useEffect, useRef, ReactNode } from 'react';

interface Props {
    children: ReactNode;
    className?: string;
    delay?: number;
}

export const ScrollReveal = ({ children, className = '', delay = 0 }: Props) => {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        if (delay > 0) {
            el.style.transitionDelay = `${delay}ms`;
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    el.classList.add('visible');
                    observer.unobserve(el);
                }
            },
            { threshold: 0.1, rootMargin: '0px 0px -30px 0px' }
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, [delay]);

    return (
        <div ref={ref} className={`scroll-reveal ${className}`}>
            {children}
        </div>
    );
};

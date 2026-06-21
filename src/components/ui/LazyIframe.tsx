"use client";

import { useEffect, useRef, useState } from 'react';

interface Props {
    src: string;
    title: string;
    className?: string;
    style?: React.CSSProperties;
}

const LazyIframe = ({ src, title, className, style }: Props) => {
    const ref = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { rootMargin: '200px' }
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    return (
        <div ref={ref} className={className} style={style}>
            {isVisible ? (
                <iframe
                    src={src}
                    className="w-full h-full border-0"
                    title={title}
                    loading="lazy"
                />
            ) : (
                <div className="w-full h-full bg-muted animate-pulse" />
            )}
        </div>
    );
};

export default LazyIframe;

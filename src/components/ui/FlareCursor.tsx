'use client';

import React, { useState, useEffect, useCallback, useRef } from 'react';

const FlareCursor = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isPointer, setIsPointer] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const rafRef = useRef<number>(0);
    const posRef = useRef({ x: 0, y: 0 });

    const handleMouseMove = useCallback((e: MouseEvent) => {
        posRef.current = { x: e.clientX, y: e.clientY };

        if (!rafRef.current) {
            rafRef.current = requestAnimationFrame(() => {
                setPosition(posRef.current);
                const target = e.target as HTMLElement;
                if (target) {
                    setIsPointer(window.getComputedStyle(target).getPropertyValue('cursor') === 'pointer');
                }
                rafRef.current = 0;
            });
        }
    }, []);

    useEffect(() => {
        const isTouchDevice = window.matchMedia('(pointer: coarse)').matches;
        if (isTouchDevice) return;

        setIsVisible(true);
        window.addEventListener('mousemove', handleMouseMove, { passive: true });
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            if (rafRef.current) cancelAnimationFrame(rafRef.current);
        };
    }, [handleMouseMove]);

    if (!isVisible) return null;

    const flareSize = isPointer ? 0 : 30;
    const cursorStyle = isPointer ? { left: '-100px', top: '-100px' } : {};

    return (
        <div
            className={`flare ${isPointer ? 'pointer' : ''}`}
            style={{
                ...cursorStyle,
                left: `${position.x}px`,
                top: `${position.y}px`,
                width: `${flareSize}px`,
                height: `${flareSize}px`,
            }}
        ></div>
    );
}

export default FlareCursor;

"use client";

import { cn } from "@/lib/utils";
import { AnimatePresence, motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import { BsArrowUpShort } from "react-icons/bs";
import Glass from '../ui/Glass';

const TopButton = () => {

    const controls = useAnimation();

    const [isVisible, setIsVisible] = useState<boolean>(false);

    const handleScroll = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    useEffect(() => {
        const handleScrollVisibility = () => {
            setIsVisible(window.scrollY > 20);
        };

        const handleAnimation = () => {
            controls.start({ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 });
        };

        window.addEventListener('scroll', handleScrollVisibility);
        handleScrollVisibility(); // Check visibility on mount
        handleAnimation(); // Set initial animation state

        return () => {
            window.removeEventListener('scroll', handleScrollVisibility);
        };
    }, [isVisible, controls]);

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={controls}
                transition={{ duration: 0.3 }}
                className={cn(
                    "flex items-center justify-center fixed z-[9999] bottom-5 right-5",
                    isVisible ? "visible" : "hidden",
                )}
            >
                <Glass
                    as="button"
                    onClick={handleScroll}
                    aria-label="Scroll to top"
                    backdropBlur={5}
                    displacementScale={40}
                    className="flex items-center justify-center w-10 h-10 rounded-full shadow-lg shadow-black/10 transition-transform active:scale-90 dark:shadow-black/50"
                >
                    <BsArrowUpShort className="w-6 h-6 text-foreground" />
                </Glass>
            </motion.div>
        </AnimatePresence>
    )
};

export default TopButton

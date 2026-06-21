"use client";

import { links } from '@/lib/data';
import { cn } from '@/lib/utils';
import { motion } from "framer-motion";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import MobileNav from './MobileNav';
import Glass from './ui/Glass';
import ThemeToggle from './ui/ThemeToggle';

const Header = () => {

    const pathname = usePathname();

    const [activeLink, setActiveLink] = useState("Home");

    const isBlogActive = pathname?.startsWith('/blog');

    return (
        <header className="z-[99999] relative">

            {/* Navbar Background — Liquid Glass */}
            <motion.div
                initial={{ y: -100, opacity: 0, x: "-50%" }}
                animate={{ y: 0, opacity: 1, x: "-50%" }}
                transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                    duration: 0.7,
                }}
                className="fixed top-0 -translate-x-1/2 w-full left-1/2 sm:top-6 sm:w-[32rem] mx-auto hidden lg:block z-[9990]"
            >
                <Glass
                    backdropBlur={4}
                    displacementScale={50}
                    className="w-full h-16 rounded-none shadow-lg shadow-black/10 sm:h-12 sm:rounded-full dark:shadow-black/50"
                />
            </motion.div>

            {/* Desktop Navbar */}
            <nav className="fixed hidden lg:flex z-[9999] top-[0.5rem] left-1/2 -translate-x-1/2 py-2 overflow-x-scroll max-w-full sm:top-[1.5rem] sm:h-12 sm:py-0 h-12 scrollbar-hide">
                <ul className="flex items-center justify-center gap-x-3 w-[32rem] h-full">
                    {links?.map((link, index) => (
                        <motion.li
                            key={index}
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{
                                type: "spring",
                                bounce: 0.3,
                                duration: 0.5,
                                delay: 0.1 + index * 0.1,
                            }}
                            className="relative text-sm text-muted-foreground"
                        >
                            <Link
                                href={link.hash}
                                onClick={() => setActiveLink(link.name)}
                                className={cn(
                                    "flex items-center justify-center px-4 py-2 transition hover:text-foreground",
                                    (activeLink === link.name) && "text-foreground"
                                )}
                            >
                                {link.name}

                                {(activeLink === link.name) && (
                                    <motion.span
                                        layoutId='activeLink'
                                        transition={{
                                            type: "spring",
                                            bounce: 0.3,
                                        }}
                                        className="absolute inset-0 border-t rounded-full shadow-md backdrop-blur-lg border-border bg-gradient-to-b shadow-black/10 from-background/80 to-background -z-10 dark:shadow-black/50"
                                    ></motion.span>
                                )}

                            </Link>
                        </motion.li>
                    ))}
                    <motion.li
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            type: "spring",
                            bounce: 0.3,
                            duration: 0.5,
                            delay: 0.1 + links.length * 0.1,
                        }}
                        className="flex items-center"
                    >
                        <ThemeToggle />
                    </motion.li>
                </ul>
            </nav>

            {/* Mobile & Tablet Navbar */}
            <MobileNav />

        </header>
    )
}

export default Header
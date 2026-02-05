"use client";

import { AnimatePresence, Variants, motion } from 'framer-motion';
import { IoCheckmarkCircle } from 'react-icons/io5';
import { IoIosPaperPlane } from 'react-icons/io';
import { cn } from '@/lib/utils';
import { Button } from './Button';
import { LuLoader } from "react-icons/lu";

interface Props {
    isSent: boolean;
    isLoading: boolean;
    disabled: boolean;
    setIsSent: (isSent: boolean) => void;
}

const SendButton = ({ isSent, isLoading, setIsSent, disabled }: Props) => {

    const iconVariants: Variants = {
        open: {
            opacity: 1, x: 0, y: 0, scale: 1, transition: {
                duration: 0.5,
                bounce: 0.5,
                type: 'spring',
            },
        },
        close: {
            opacity: 0, x: 50, y: -50, scale: 0, transition: {
                duration: 0.5,
                bounce: 0.5,
                type: 'spring',
            }
        },
    };

    const checkMarkVariants: Variants = {
        open: {
            opacity: 1, x: -23, y: 0, scale: 1, transition: {
                duration: 0.5,
                type: 'spring',
                bounce: 0.5,
            }
        },
        close: {
            opacity: 0, x: -50, y: 50, scale: 0, transition: {
                duration: 0.5,
                type: 'spring',
                bounce: 0.5,
            }
        },
    };

    const MotionButton = motion(Button);

    return (
        <AnimatePresence>
            <MotionButton
                type="submit"
                variant="default"
                disabled={disabled || isLoading}
                className="w-full md:w-60 px-6 md:px-8 py-2 text-center overflow-hidden font-semibold rounded-md z-20 space-x-1.5"
            >
                <span className={cn(
                    "text-primary-foreground",
                    isLoading ? "ml-0" : "ml-5"
                )}>
                    {isLoading ? "Sending..." : isSent ? "Sent" : "Send Message"}
                </span>

                {isLoading ? (
                    <motion.span
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, type: 'spring', bounce: 0.5 }}
                    >
                        <LuLoader className="w-5 h-5 animate-spin text-primary-foreground/70" />
                    </motion.span>
                ) : (
                    <>
                        <motion.span
                            animate={isSent ? 'close' : 'open'}
                            initial="open"
                            variants={iconVariants}
                            className=""
                        >
                            <IoIosPaperPlane className="w-5 h-5 text-primary-foreground" />
                        </motion.span>
                        <motion.span
                            animate={isSent ? 'open' : 'close'}
                            initial="close"
                            variants={checkMarkVariants}
                            className=""
                        >
                            <IoCheckmarkCircle className="w-5 h-5 text-primary-foreground" />
                        </motion.span>
                    </>
                )}
            </MotionButton>
        </AnimatePresence>
    );
};
// else show conditionally the checkmark icon

export default SendButton;

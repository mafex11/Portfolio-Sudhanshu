"use client";

import { Project } from '@/types';
import { motion, AnimatePresence } from 'framer-motion';
import { IoClose } from 'react-icons/io5';
import { TbExternalLink } from 'react-icons/tb';
import { SiGithub } from 'react-icons/si';
import { Button } from './Button';
import Glass from './Glass';
import Link from 'next/link';

interface Props {
    project: Project | null;
    isOpen: boolean;
    onClose: () => void;
}

const ProjectPreviewModal = ({ project, isOpen, onClose }: Props) => {
    if (!project) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm p-4"
                    onClick={onClose}
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        transition={{ duration: 0.2 }}
                        className="relative w-full max-w-5xl h-[80vh] bg-card border border-border rounded-xl overflow-hidden shadow-2xl"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <Glass
                            backdropBlur={6}
                            displacementScale={30}
                            glassBorder={false}
                            className="absolute top-0 left-0 right-0 z-10 flex items-center justify-between p-4 border-b border-border/50"
                        >
                            <div className="flex items-center gap-4">
                                <h3 className="text-lg font-medium text-foreground">
                                    {project.title}
                                </h3>
                                <div className="flex items-center gap-2">
                                    <Link href={project.view} target="_blank">
                                        <Button variant="outline" size="sm">
                                            <TbExternalLink className="w-4 h-4" />
                                            <span className="ml-2">Open in new tab</span>
                                        </Button>
                                    </Link>
                                    <Link href={project.github} target="_blank">
                                        <Button variant="outline" size="sm">
                                            <SiGithub className="w-4 h-4" />
                                            <span className="ml-2">Github</span>
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                            <button
                                onClick={onClose}
                                className="p-2 rounded-lg hover:bg-muted/60 transition-colors"
                            >
                                <IoClose className="w-5 h-5 text-muted-foreground" />
                            </button>
                        </Glass>
                        <div className="w-full h-full bg-muted">
                            <iframe
                                src={project.view}
                                className="w-full h-full border-0"
                                title={`Preview of ${project.title}`}
                                loading="lazy"
                            />
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default ProjectPreviewModal;

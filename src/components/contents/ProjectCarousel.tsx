"use client";

import { Project } from '@/types';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { SiGithub } from 'react-icons/si';
import { TbExternalLink } from 'react-icons/tb';
import { Button } from '../ui/Button';
import LazyIframe from '../ui/LazyIframe';
import ProjectPreviewModal from '../ui/ProjectPreviewModal';
import Link from 'next/link';

interface Props {
    projects: Project[];
}

const ProjectCarousel = ({ projects }: Props) => {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isPaused, setIsPaused] = useState(false);

    const openPreview = (project: Project) => {
        setSelectedProject(project);
        setIsModalOpen(true);
    };

    const closePreview = () => {
        setIsModalOpen(false);
        setSelectedProject(null);
    };

    // Duplicate projects for seamless loop
    const duplicatedProjects = [...projects, ...projects];

    return (
        <>
            <div
                className={`relative ${isPaused ? 'overflow-x-auto scrollbar-hide' : 'overflow-hidden'}`}
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
            >
                <div
                    className="flex gap-6 pb-4 animate-scroll"
                    style={{
                        width: 'max-content',
                        animationPlayState: isPaused || isModalOpen ? 'paused' : 'running',
                    }}
                >
                    {duplicatedProjects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            className="flex-shrink-0 w-[400px] lg:w-[500px] snap-start"
                        >
                            <div
                                onClick={() => openPreview(project)}
                                className="bg-card border border-border rounded-xl overflow-hidden cursor-pointer hover:border-border/80 hover:shadow-lg transition-all group/card"
                            >
                                <div className="relative w-full h-[280px] lg:h-[320px] bg-muted overflow-hidden">
                                    <LazyIframe
                                        src={project.view}
                                        title={`Preview of ${project.title}`}
                                        className="w-full h-full pointer-events-none scale-[0.5] origin-top-left"
                                        style={{ width: '200%', height: '200%' }}
                                    />
                                    <div className="absolute inset-0 bg-transparent group-hover/card:bg-background/10 transition-colors flex items-center justify-center">
                                        <span className="opacity-0 group-hover/card:opacity-100 transition-opacity text-sm font-medium text-foreground bg-card/90 px-4 py-2 rounded-lg border border-border">
                                            Click to preview
                                        </span>
                                    </div>
                                </div>
                                <div className="p-4">
                                    <h4 className="text-lg font-medium text-foreground">
                                        {project.title}
                                    </h4>
                                    <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
                                        {project.description}
                                    </p>
                                    <div className="flex items-center gap-3 mt-4" onClick={(e) => e.stopPropagation()}>
                                        <Link href={project.github} target="_blank">
                                            <Button variant="outline" size="sm">
                                                <SiGithub className="w-4 h-4" />
                                                <span className="ml-2">Github</span>
                                            </Button>
                                        </Link>
                                        <Link href={project.view} target="_blank">
                                            <Button variant="outline" size="sm">
                                                <TbExternalLink className="w-4 h-4" />
                                                <span className="ml-2">View</span>
                                            </Button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            <ProjectPreviewModal
                project={selectedProject}
                isOpen={isModalOpen}
                onClose={closePreview}
            />
        </>
    );
};

export default ProjectCarousel;

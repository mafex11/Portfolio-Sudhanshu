"use client";

import { Project } from '@/types';
import { motion } from 'framer-motion';
import { useState, useRef } from 'react';
import { IoChevronBack, IoChevronForward } from 'react-icons/io5';
import { SiGithub } from 'react-icons/si';
import { TbExternalLink } from 'react-icons/tb';
import { Button } from '../ui/Button';
import ProjectPreviewModal from '../ui/ProjectPreviewModal';
import Link from 'next/link';

interface Props {
    projects: Project[];
}

const ProjectCarousel = ({ projects }: Props) => {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const scrollRef = useRef<HTMLDivElement>(null);

    const openPreview = (project: Project) => {
        setSelectedProject(project);
        setIsModalOpen(true);
    };

    const closePreview = () => {
        setIsModalOpen(false);
        setSelectedProject(null);
    };

    const scroll = (direction: 'left' | 'right') => {
        if (scrollRef.current) {
            const scrollAmount = 400;
            scrollRef.current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    return (
        <>
            <div className="relative group">
                <button
                    onClick={() => scroll('left')}
                    className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-card border border-border shadow-lg opacity-0 group-hover:opacity-100 transition-opacity hover:bg-muted -translate-x-1/2"
                >
                    <IoChevronBack className="w-5 h-5 text-foreground" />
                </button>

                <div
                    ref={scrollRef}
                    className="flex gap-6 overflow-x-auto scrollbar-hide pb-4 snap-x snap-mandatory"
                >
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            className="flex-shrink-0 w-[350px] lg:w-[400px] snap-start"
                        >
                            <div
                                onClick={() => openPreview(project)}
                                className="bg-card border border-border rounded-xl overflow-hidden cursor-pointer hover:border-border/80 hover:shadow-lg transition-all group/card"
                            >
                                <div className="relative w-full h-[220px] lg:h-[250px] bg-muted overflow-hidden">
                                    <iframe
                                        src={project.view}
                                        className="w-full h-full border-0 pointer-events-none scale-[0.5] origin-top-left"
                                        style={{ width: '200%', height: '200%' }}
                                        title={`Preview of ${project.title}`}
                                        loading="lazy"
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

                <button
                    onClick={() => scroll('right')}
                    className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-card border border-border shadow-lg opacity-0 group-hover:opacity-100 transition-opacity hover:bg-muted translate-x-1/2"
                >
                    <IoChevronForward className="w-5 h-5 text-foreground" />
                </button>
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

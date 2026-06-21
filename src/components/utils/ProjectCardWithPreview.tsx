"use client";

import { Project as ProjectProps } from '@/types';
import { useState } from 'react';
import Link from 'next/link';
import { SiGithub } from "react-icons/si";
import { TbExternalLink } from "react-icons/tb";
import { Button } from '../ui/Button';
import LazyIframe from '../ui/LazyIframe';
import AnimationContainer from './AnimationContainer';
import ProjectPreviewModal from '../ui/ProjectPreviewModal';

interface Props {
    project: ProjectProps;
}

const ProjectCardWithPreview = ({ project }: Props) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <AnimationContainer customClassName="bg-card border border-border w-full hover:border-border/80 rounded-xl overflow-hidden">
                <div
                    className="relative w-full h-[300px] lg:h-[400px] bg-muted overflow-hidden cursor-pointer group"
                    onClick={() => setIsModalOpen(true)}
                >
                    <LazyIframe
                        src={project?.view}
                        title={`Preview of ${project?.title}`}
                        className="w-full h-full pointer-events-none scale-[0.5] origin-top-left"
                        style={{ width: '200%', height: '200%' }}
                    />
                    <div className="absolute inset-0 bg-transparent group-hover:bg-background/10 transition-colors flex items-center justify-center">
                        <span className="opacity-0 group-hover:opacity-100 transition-opacity text-sm font-medium text-foreground bg-card/90 px-4 py-2 rounded-lg border border-border">
                            Click to preview
                        </span>
                    </div>
                </div>
                <div className="flex-col items-start p-4 lg:p-5">
                    <div className="flex flex-col items-start space-y-4">
                        <h4 className="text-lg font-medium text-foreground">
                            {project?.title}
                        </h4>
                        <p className="text-sm text-muted-foreground">
                            {project?.description}
                        </p>
                        <div className="flex items-end gap-4">
                            <Link href={project.github} target="_blank">
                                <Button variant="outline" size="sm">
                                    <SiGithub className="w-5 h-5" />
                                    <span className="ml-2">
                                        Github
                                    </span>
                                </Button>
                            </Link>
                            <Link href={project.view} target="_blank">
                                <Button variant="outline" size="sm">
                                    <TbExternalLink className="w-5 h-5" />
                                    <span className="ml-2">
                                        View
                                    </span>
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </AnimationContainer>

            <ProjectPreviewModal
                project={project}
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
        </>
    )
};

export default ProjectCardWithPreview

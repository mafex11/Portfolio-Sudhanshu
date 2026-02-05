"use client";

import { Badge } from '@mantine/core';

interface Props {
    stacks: string[];
}

const ShowSkills = ({ stacks }: Props) => {
    return (
        <>
            {stacks.map((stack) => (
                <Badge
                    key={stack}
                    size="lg"
                    radius="sm"
                    variant="outline"
                    color="gray"
                    className="bg-muted text-foreground border-border hover:bg-muted/80 transition-colors duration-300 ease-in-out"
                >
                    <span className="font-medium text-foreground">
                        {stack}
                    </span>
                </Badge>
            ))}
        </>
    )
};

export default ShowSkills

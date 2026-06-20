import ProjectCards from '../contents/ProjectCards';
import AnimationContainer from '../utils/AnimationContainer';
import Heading from '../utils/Heading';
import SectionContainer from '../utils/SectionContainer';

const ProjectSection = () => {
    return (
        <SectionContainer>
            <div className="flex flex-col items-start w-full mt-0 lg:mt-8">

              <Heading title="Projects" />

                <AnimationContainer customClassName="w-full flex flex-col gap-5 mb-8">
                    <p className="text-base text-justify lg:text-start lg:leading-8 text-muted-foreground">
                        things i built because i needed them or because someone paid me to. click to preview, scroll to explore.
                    </p>
                </AnimationContainer>

              <ProjectCards />

            </div>
        </SectionContainer>
    )
};

export default ProjectSection

import React from 'react';
import { TimeLine, TimeLineItem } from '../utils/ExpTimeLine';

const Experience = () => {
    return (
        <TimeLine>
            <TimeLineItem active>

                <TimeLineItem.Title>
                    <span className="font-medium transition-all hover:text-foreground hover:underline hover:underline-offset-2 text-blue-600">
                       Founding AI Engineer at Layerpath
                    </span>
                    {" "}•{" "}
                    <span className="text-muted-foreground">
                        Nov 2025 - Now
                    </span>
                </TimeLineItem.Title>
                <TimeLineItem.Description>
                built path ai from scratch. voice agent with a 7-stage state machine for sales qualification. livekit for realtime audio, pipecat for orchestration. 1,500+ calls/month in prod, 85% accuracy, 75% cheaper than humans.
                </TimeLineItem.Description>
                <TimeLineItem.Description>
                shipped magic editor solo. multi-model pipeline (gemini + openai) that edits product demos through a propose → confirm → apply flow. vision-grounded rewrites, ai voiceover, zod-validated actions so the llm can&apos;t break the ui.
                </TimeLineItem.Description>
                <TimeLineItem.Description>
                architected brandmemory end to end. scrapes your site with firecrawl, pulls brand data from brandfetch, runs it through gemini to extract voice and tone. async jobs, confidence scoring, cache invalidation. feeds context into magic editor.
                </TimeLineItem.Description>
            </TimeLineItem>
            <TimeLineItem>

                <TimeLineItem.Title>
                    <span className="font-medium transition-all hover:text-foreground hover:underline hover:underline-offset-2 text-blue-600">
                       Software Engineer at BusinessRoom
                    </span>
                    {" "}•{" "}
                    <span className="text-muted-foreground">
                        July 2025 - Oct 2025
                    </span>
                </TimeLineItem.Title>
                <TimeLineItem.Description>
                Improved website performance by reducing page load times by 80% (from 7s to
                1.5s) through backend query optimization, caching strategies, and frontend code
                splitting, directly increasing user engagement and retention.
                </TimeLineItem.Description>
                <TimeLineItem.Description>
                Architected and deployed scalable microservices using Docker, AWS ECS, and
                CI/CD pipelines, reducing release cycles by 30% while improving reliability.
                </TimeLineItem.Description>
                <TimeLineItem.Description>
                Implemented AWS monitoring (CloudWatch) and logging (S3/ELK) for
                performance tracking and analytics, enabling data-driven improvements that increased
                feature adoption by 15%
                </TimeLineItem.Description>
                <TimeLineItem.Description>
                Built an AI assistant for founders and investors leveraging AWS Lambda + API
                Gateway to provide tailored recommendations, enhancing decision-making efficiency
                and adoption rates.
                </TimeLineItem.Description>
            </TimeLineItem>
            <TimeLineItem>

                <TimeLineItem.Title>
                    <span className="font-medium transition-all hover:text-foreground hover:underline hover:underline-offset-2 text-blue-600">
                       Software Developer Engineer Intern at PuntPartners
                    </span>
                    {" "}•{" "}
                    <span className="text-muted-foreground">
                        April 2025 - June 2025
                    </span>
                </TimeLineItem.Title>
                <TimeLineItem.Description>
                Reverse Engineered the API’s of Q-Commerce platforms to create a Crawler system for scraping API’s from
                Q-Commerce platforms for both Desktop and Mobile platforms which brought in 1000+ new users to the platform.
                </TimeLineItem.Description>
                <TimeLineItem.Description>
                Developed features for TolMol App that allows users to search for products and compare prices across different platforms.
                </TimeLineItem.Description>

            </TimeLineItem>
            <TimeLineItem last>
                <TimeLineItem.Title>
                    <span className="font-medium transition-all hover:text-foreground hover:underline hover:underline-offset-2 text-blue-600">
                    FullStack Engineer Intern at OneRoot
                    </span>
                    {" "}•{" "}
                    <span className="text-muted-foreground">
                    August 2024 - November 2024
                    </span>
                </TimeLineItem.Title>
                
                <TimeLineItem.Description>
                 •   Developed and implemented front-end and back-end solutions for various projects
                 within OneRoot&apos;s Agri-Tech team, including developing POCs for new features, demonstrating proficiency in full-stack development.
                </TimeLineItem.Description>
                <TimeLineItem.Description>
                •   Contributed to the development of user-friendly dashboards and successfully
                integrated third-party tools into existing products, enhancing user experience and system functionality.
                </TimeLineItem.Description>
                <TimeLineItem.Description>
                •   Proactively participated in team meetings and discussions, actively sought feedback,
                and demonstrated a strong work ethic and a willingness to learn and adapt to new challenges.
                </TimeLineItem.Description>
            </TimeLineItem>
        </TimeLine>
    );
};

export default Experience;

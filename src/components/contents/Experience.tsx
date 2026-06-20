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
                built path ai. a voice agent that cold calls, qualifies leads, and doesn&apos;t need coffee breaks. 1,500+ calls/month, 85% accuracy, 75% cheaper than hiring someone to get hung up on.
                </TimeLineItem.Description>
                <TimeLineItem.Description>
                shipped magic editor solo. ai that edits your product demos. you click something, it suggests changes, you approve or don&apos;t. no prompt typing, no copy-paste, just point and fix.
                </TimeLineItem.Description>
                <TimeLineItem.Description>
                made brandmemory. scrapes your site, figures out how your brand talks, and feeds that into magic editor so the ai sounds like you instead of a linkedin influencer.
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
                site loaded in 7 seconds. made it load in 1.5. fixed the queries, added caching, split the bundles. users stopped leaving before the page showed up.
                </TimeLineItem.Description>
                <TimeLineItem.Description>
                set up the infra so deploys stopped being scary. containerized everything, automated the pipeline. releases went from "clear your evening" to "push and forget".
                </TimeLineItem.Description>
                <TimeLineItem.Description>
                built an ai assistant for founders. asks what you need, gives you recommendations. no more digging through dashboards or waiting for someone to reply.
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
                reverse engineered how blinkit, zepto, and friends talk to their apps. built a crawler that scrapes their prices without them noticing. brought in 1000+ users who wanted to stop overpaying for groceries.
                </TimeLineItem.Description>
                <TimeLineItem.Description>
                built the search and compare features for tolmol. you type what you want, it tells you where it&apos;s cheapest. simple, but people really wanted it.
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

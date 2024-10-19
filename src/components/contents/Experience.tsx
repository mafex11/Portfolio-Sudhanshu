import React from 'react';
import { TimeLine, TimeLineItem } from '../utils/ExpTimeLine';

const Experience = () => {
    return (
        <TimeLine>
            <TimeLineItem active>
                <TimeLineItem.Title>
                    <span className="font-medium transition-all hover:text-white hover:underline hover:underline-offset-2">
                       FullStack Engineer Intern at OneRoot
                    </span>
                    {" "}•{" "}
                    <span className="text-neutral-200">
                        August 2024 - Now
                    </span>
                </TimeLineItem.Title>
                <TimeLineItem.Description>
                    Working with tech team, helping farmers find harvesters and gain good profit margin by contributing to innovative apps to automate tasks and connect farmer with harvesters and vendors.
                </TimeLineItem.Description>
            </TimeLineItem>

            <TimeLineItem last>
                <TimeLineItem.Title>
                    <span className="font-medium transition-all hover:text-white hover:underline hover:underline-offset-2">
                    Software Engineer Intern at Rapyd
                    </span>
                    {" "}•{" "}
                    <span className="text-neutral-200">
                        Sept 2023 - Nov 2023
                    </span>
                </TimeLineItem.Title>
                <TimeLineItem.Description>
                •	Built and designed products to enhance the search optimization by 60% using Google SEO algorithms.
                </TimeLineItem.Description>
                <TimeLineItem.Description>
                •   Improved Rapyd’s  search algorithm efficiency and accuracy through usage of MongoDB, MySQL and Oracle
                </TimeLineItem.Description>
            </TimeLineItem>
        </TimeLine>
    );
};

export default Experience;

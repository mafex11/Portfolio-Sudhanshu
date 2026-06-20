import React from 'react'
import AnimationContainer from '../utils/AnimationContainer'

const AbuotMe = () => {
    return (
        <AnimationContainer customClassName='w-full py-12 lg:py-16'>

            <h2 className='mb-8 text-2xl font-bold tracking-tight text-center text-foreground lg:text-start'>
                About me
            </h2>

            <p className='w-full text-base font-normal leading-7 text-justify text-muted-foreground'>
                I&apos;m the <strong>Founding AI Engineer at Layerpath</strong>, where I build voice-first agentic systems and AI editing tools that ship to real users. Most of my time goes into <strong>LLM pipelines, agent design, and full-stack work</strong> with Next.js, TypeScript, and Python. I&apos;m also finishing my <strong>Computer Science</strong> degree, and on the side I write small tools I actually wanted myself, like a macOS agent and a couple of Homebrew apps. I care about software that feels considered: fast, clear, and built to last. If you&apos;re working on something interesting, I&apos;d like to hear about it.
            </p>

        </AnimationContainer>
    )
}

export default AbuotMe

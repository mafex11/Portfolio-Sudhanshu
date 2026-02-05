import React from 'react'
import AnimationContainer from '../utils/AnimationContainer'

const AbuotMe = () => {
    return (
        <AnimationContainer customClassName='w-full py-12 lg:py-16'>

            <h2 className='mb-8 text-2xl font-bold tracking-tight text-center text-foreground lg:text-start'>
                About me
            </h2>

            <p className='w-full text-base font-normal leading-7 text-justify text-muted-foreground'>
                I am currently 4th year student studying <strong>Computer Science</strong>. Beyond leetcode and dsa, I craft engaging and responsive web applications using <strong>React</strong> and delve into mobile app development with <strong>React Native and expo</strong>. Apart from coding, I express my creative side by designing sleek interfaces using <strong>Figma</strong>. Let&apos;s build something amazing together! ✨
            </p>

        </AnimationContainer>
    )
}

export default AbuotMe

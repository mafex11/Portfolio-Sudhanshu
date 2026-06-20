import React from 'react'
import AnimationContainer from '../utils/AnimationContainer'

const AbuotMe = () => {
    return (
        <AnimationContainer customClassName='w-full py-12 lg:py-16'>

            <h2 className='mb-8 text-2xl font-bold tracking-tight text-center text-foreground lg:text-start'>
                About me
            </h2>

            <p className='w-full text-base font-normal leading-7 text-justify text-muted-foreground'>
                i make voice agents talk and ship homebrew apps at 2am. currently the <strong>founding ai engineer at layerpath</strong>, mass applying to jobs on the side. i like software that works and code that doesn&apos;t make me think. if you&apos;re building something cool, i&apos;m easy to reach.
            </p>

        </AnimationContainer>
    )
}

export default AbuotMe

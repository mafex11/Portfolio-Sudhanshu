import React from 'react'
import AnimationContainer from '../utils/AnimationContainer'

const AbuotMe = () => {
    return (
        <AnimationContainer customClassName='w-full py-12 lg:py-16'>

            <h2 className='mb-8 text-2xl font-bold tracking-tight text-center text-foreground lg:text-start'>
                About me
            </h2>

            <p className='w-full text-base font-normal leading-7 text-justify text-muted-foreground'>
                i write code and mass apply because rent and visa wait for no one. currently the <strong>founding ai engineer at layerpath</strong>. good software should feel obvious. bad meetings should not exist. if your codebase is interesting and your team ships fast, let&apos;s talk.
            </p>

        </AnimationContainer>
    )
}

export default AbuotMe

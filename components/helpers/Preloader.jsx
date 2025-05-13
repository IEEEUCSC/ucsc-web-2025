"use client";

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import Image from 'next/image';
import { useState } from 'react';

import TextReveal from './TextReveal';
import miniLogo from '@/public/logo-mini-white.svg';

const PreLoader = () => {
    const [load, setLoad] = useState(true);

    useGSAP(() => {
        const timeline = gsap.timeline();
        
        timeline.from(".preloader-logo", {

            rotate: -90,
            duration: 0.5,
            x: "-50%",
            onStart: () => {
                setLoad(true);
                document.body.classList.add('no-scroll'); //disable scrolling
            },
        });

        timeline.to(".preloader", {
            opacity: 0,
            delay: 1.2,
            duration: 0.5,
            onComplete: () => {
                setLoad(false);
                document.body.classList.remove('no-scroll'); //enable scrolling
            },
        });

    }, []);

    return (
        <>
            {load && (
                <div className="h-screen w-full bg-primary-blue flex absolute origin z-50 pointer-events-none preloader">
                    <div className='flex gap-2 items-center justify-center w-full text-primary-white'>
                        <div>
                            <Image 
                                src={miniLogo}
                                width={250}
                                height={1000}
                                alt='Logo'
                                className='aspect-square object-contain preloader-logo'
                            />
                        </div>

                        <div className='flex flex-col text-6xl font-semibold'>
                            <TextReveal 
                                delay={0.5}
                                selector="preloader-text-1">UCSC</TextReveal>
                            <TextReveal 
                                className="mr-2"
                                delay={0.5}
                                selector="preloader-text-2">IEEE Student Branch</TextReveal>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default PreLoader;

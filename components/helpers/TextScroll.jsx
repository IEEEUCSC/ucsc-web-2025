"use client";

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

import React from 'react';

gsap.registerPlugin(ScrollTrigger);

const TextScroll = ({children, selector, className}) => {
    const words = children.split(" ");

    useGSAP(()=>{
        gsap.fromTo(`.${selector}`, {
            opacity: 0.5
          }, 
          {
            ease: 'none', // Animation easing.
            opacity: 1,
            stagger: 0.03,
            scrollTrigger: {
            trigger: `.${selector}`,
            start: 'top bottom-=35%', 
            end: 'bottom center+=5%',
            scrub: true, 
            },
          });
      
    }, [])
  return (
    <p className=''>

        {words.map((word, index) =>(
            <span 
                key={index} 
                className={`inline-block overflow-hidden mr-2 leading-none ${className} ${selector}`}
            >
                {word}
            </span>
        ))}
    </p>
  )
}

export default TextScroll
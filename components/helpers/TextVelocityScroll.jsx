"use client";

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);

const TextVelocityScroll = ({children, className, selector, container, fromX, toX}) => {
    useGSAP(()=>{
        gsap.fromTo(`.${selector}`,{
            x: fromX
        },{
            x: toX,
            scrollTrigger: {
                trigger: `.${container}`,
                scrub: true,
                start: "top bottom",
                end : "bottom top"
            }
        })
    }, [])
  return (
    <p 
        className={`${className} ${selector}`}
    >
        {children}
    </p>
  )
}

export default TextVelocityScroll
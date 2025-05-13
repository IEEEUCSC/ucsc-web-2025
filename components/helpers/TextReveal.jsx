"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const TextReveal = ({children, className, selector, delay}) => {
    const words = children.split(" ");

    useGSAP( ()=>{
        gsap.from(`.${selector}`, {
            delay: delay,
            y: "100%",
            stagger: 0.02,
            zIndex: 0,
        })
    }, [])
  return (
    <span className="overflow-hidden">
        {words.map((word, index) =>(
            <span className={`${className}`} key={index}>
                {word.split("").map((char, i) =>(
                    <span className={`${selector} inline-block`} key={i}>{char}</span>
                ))}
            </span>
        ))}
    </span>
  )
}

export default TextReveal
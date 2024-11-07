'use client'
import hoverEffect from "hover-effect"
import { useEffect } from "react"
export const useHoverEffect=(el,img1,img2)=>{
    useEffect(()=>{
        new hoverEffect({
            parent:el.current,
            image1:img1,
            image2:img2,
            displacementImage: "/assets/images/cloud.png",
            intensity:0.5,
        })
    },[el,img1,img2])
}
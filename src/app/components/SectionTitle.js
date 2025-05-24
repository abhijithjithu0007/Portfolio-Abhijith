'use client'


import React, { useRef } from 'react'
import { useSectionTitleReveal } from '../Hooks/anime'
const SectionTitle = ({title}) => {
  const sectionTitleRef=useRef(null)
  useSectionTitleReveal(sectionTitleRef)
  return (
    <div className="overflow-hidden">
        <h2 className="section-title text-5xl p-2 sm:p-0 lg:p-0 xl:p-0  md:text-6xl lg:text-7xl xl:text-[10rem]" ref={sectionTitleRef}>{title}</h2>
      </div>
  )
}

export default SectionTitle
import React, { useRef, useState } from 'react'
import Card from './Card'

function Foreground() {
    // const data=[
    //     icon,desc, filesize, closeOrDownload, tagDetails
    // ]
    const ref=useRef(null)
    const data=[
  {
    desc: "Debugging Tailwind hover states at 2 AM while sipping chai like a true CSS ninja.",
    filesize: "1.2mb",
    close: false,
    tag: { isOpen: true, tagTitle: "Upload", tagcolor: "purple" }
  },
  {
    desc: "Mapped strings to React Icons with such finesse, even your keyboard gave a standing ovation.",
    filesize: ".8mb",
    close: true,
    tag: { isOpen: false, tagTitle: "Download now", tagcolor: "green" }
  },
  {
    desc: "Learned Docker basics while planning CI/CD pipeline automation—because you're all about that deployment life.",
    filesize: "1.0mb",
    close: true,
    tag: { isOpen: true, tagTitle: "Download now", tagcolor: "green" }
  },
  {
    desc: "Refined UI layouts using asymmetrical ratios and clip-path sorcery, making responsive design feel like art.",
    filesize: ".9mb",
    close: true,
    tag: { isOpen: true, tagTitle: "Download now", tagcolor: "green" }
  },
  {
    desc: "Tamed Framer Motion transitions so smoothly, the animations started thanking you for your compassion.",
    filesize: "1.1mb",
    close: true,
    tag: { isOpen: true, tagTitle: "Download now", tagcolor: "green" }
  }
]

  return (
    <div ref={ref} className="foreground fixed flex gap-5 flex-wrap p-5 top-0 left-0 z-[3] w-full h-full bg-sky-800/0">
        {data.map((item, index)=>(
            <Card key={index} data={item} reference={ref}/>
            ))}
    </div>
  )
}

export default Foreground
"use client"

import { Accordion, AccordionItem } from "@nextui-org/react";
import Link from "next/link";

export default function FAQ() {
  return (
    <Accordion className="flex flex-col justify-center">
      <AccordionItem key="1" title="What services do you offer?" className="leading-7 max-w-[300px]">
        <p>I offer anything front-end related: from designing basic wireframes to developing custom web applications. If you need something else, just let me know.</p>
      </AccordionItem>
      <AccordionItem key="2" title="What is your pricing?" className="leading-7 max-w-[300px]">
        <p>As of now, it is completely free of charge, because I need to build a portfolio. Once I have built a solid portfolio, I plan on increasing my pricing to €1.500 for medium-sized projects. Of course, this will not be a fixed price: the price can be higher or lower, depending on the complexity of the website.</p>
      </AccordionItem>
      <AccordionItem key="3" title="What do I need to get started?" className="leading-7 max-w-[300px]">
        <p>To start a project, I need content for your site like text, images, logo, color scheme, and an idea of the style or examples of sites you like. If you do not have these yet, I can assist with content creation and design guidance.</p>
      </AccordionItem>
      <AccordionItem key="4" title="How did you make LJHC.nl?" className="leading-7 max-w-[300px]">
        <p>I made this website using the Next.js framework. This allows for an integrated routing solution, SSR and Tailwind CSS all in one framework while using React at its core. I also used some components from the NextUI library. It took me 2 weeks to finish this project.</p>
      </AccordionItem>
      <AccordionItem key="5" title="Do you accept donations?" className="leading-7 max-w-[300px]">
        <p>Yes, donations are greatly appreciated. Visit <Link href="/pay" className="text-blue-700 hover:underline">this page</Link> to donate.</p>
      </AccordionItem>
    </Accordion>
  )
}

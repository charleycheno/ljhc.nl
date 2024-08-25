import { Chip } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";

export default function Project({ image, year, url, title, source, technologies, description }) {
  return (
    <div className="flex flex-wrap justify-center gap-10">
      <a target="_blank" href={url} rel="noopener noreferrer" className="font-bold text-3xl rounded-xl hover:underline">
        <Image src={image} width={480} height={270} className="self-center aspect-video rounded-xl" />
      </a>
      <div className="flex flex-col gap-4 max-w-[512px]">
        <h3 className="font-semibold text-xl text-neutral-500">{year}</h3>
        <div className="flex justify-between items-center">
          <a target="_blank" href={url} rel="noopener noreferrer" className="font-bold text-3xl hover:underline">{title}</a>
          <a target="_blank" href={source} rel="noopener noreferrer" className="flex items-center gap-2 font-semibold border border-black dark:border-white py-2 px-4 rounded-xl hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" className="w-6 h-6"><path fill="currentColor" d="M399.1 1.1c-12.7-3.9-26.1 3.1-30 15.8l-144 464c-3.9 12.7 3.1 26.1 15.8 30s26.1-3.1 30-15.8l144-464c3.9-12.7-3.1-26.1-15.8-30zm71.4 118.5c-9.1 9.7-8.6 24.9 1.1 33.9L580.9 256 471.6 358.5c-9.7 9.1-10.2 24.3-1.1 33.9s24.3 10.2 33.9 1.1l128-120c4.8-4.5 7.6-10.9 7.6-17.5s-2.7-13-7.6-17.5l-128-120c-9.7-9.1-24.9-8.6-33.9 1.1zm-301 0c-9.1-9.7-24.3-10.2-33.9-1.1l-128 120C2.7 243 0 249.4 0 256s2.7 13 7.6 17.5l128 120c9.7 9.1 24.9 8.6 33.9-1.1s8.6-24.9-1.1-33.9L59.1 256 168.4 153.5c9.7-9.1 10.2-24.3 1.1-33.9z"/></svg>Source code</a>
        </div>
        <div className="flex flex-wrap gap-2">
          {
            technologies.map((technology) => (
              <Chip key={technology}>{technology}</Chip>
            ))
          }
        </div>
        <p>{description}</p>
      </div>
    </div>
  )
}

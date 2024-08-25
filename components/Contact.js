import { Code } from "@nextui-org/react";
import Image from "next/image";
import FAQ from "./FAQ";

export default function Contact() {
  return (
    <div className="flex flex-col items-center p-2 pt-16 sm:p-16 bg-neutral-100 dark:bg-neutral-900">
      <h1 className="font-bold text-3xl mb-10">Contact</h1>
      <div className="flex flex-col gap-2 sm:gap-4">
        <div className="flex gap-2 sm:gap-4 justify-between">
          <div className="bg-white dark:bg-black rounded-xl p-4">
            <h2 className="font-semibold mb-2">Business inquiries</h2>
            <Code>business@ljhc.nl</Code>
          </div>
          <div className="bg-white dark:bg-black rounded-xl p-4">
            <h2 className="font-semibold mb-2">General purpose</h2>
            <Code>contact@ljhc.nl</Code>
          </div>
        </div>
        <a target="_blank" href="https://github.com/charleycheno" rel="noopener noreferrer" className="rounded-xl">
          <div className="flex items-center gap-6 p-6 bg-white dark:bg-black rounded-xl">
              <Image src="/assets/github-light.png" width={80} height={80} className="hidden dark:block row-span-2" />
              <Image src="/assets/github-dark.png" width={80} height={80} className="dark:hidden row-span-2" />
              <div>
                <h2 className="font-semibold text-3xl self-end">GitHub</h2>
                <p>@charleycheno</p>
              </div>
          </div>
        </a>
        <div className="bg-white dark:bg-black rounded-xl p-4">
          <h2 className="font-semibold mb-4">Social media</h2>
          <div className="flex justify-between">
            <a target="_blank" href="https://instagram.com/charleychen18" rel="noopener noreferrer" className="rounded-2xl">
              <Image src="/assets/instagram.png" width={64} height={64} className="rounded-2xl w-16 h-16" />
            </a>
            <a target="_blank" href="https://snapchat.com/t/0zYoCPg5" rel="noopener noreferrer" className="rounded-2xl">
              <Image src="/assets/snapchat.png" width={64} height={64} className="rounded-2xl w-16 h-16" />
            </a>
            <a target="_blank" href="https://tiktok.com/@charleychen" rel="noopener noreferrer" className="rounded-2xl">
              <Image src="/assets/tiktok.png" width={64} height={64} className="rounded-2xl w-16 h-16" />
            </a>
            <a target="_blank" href="https://twitter.com/charleycheno" rel="noopener noreferrer" className="rounded-2xl">
              <Image src="/assets/twitter.png" width={64} height={64} className="rounded-2xl w-16 h-16" />
            </a>
          </div>
        </div>
        <div className="bg-white dark:bg-black rounded-xl p-4">
          <h2 className="font-semibold mb-2">FAQ</h2>
          <FAQ />
        </div>
      </div>
    </div>
  )
}

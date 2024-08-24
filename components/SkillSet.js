import { Tooltip } from "@nextui-org/react";
import Image from "next/image";
import Welcome from "./Welcome";
import Frameworks from "./Frameworks";

export default function() {
  return (
    <div className="flex flex-col items-center p-16 dark:bg-neutral-900">
      <h2 className="font-bold text-3xl mb-10">Skill set</h2>
      <div className="flex flex-col gap-20">
        <div className="flex flex-col sm:items-center md:flex-row gap-16">
          <div className="flex flex-col gap-10">
            <div>
              <h3 className="font-semibold text-xl mb-4">Specialised in</h3>
              <ul className="flex gap-4">
                <li>
                  <Tooltip showArrow closeDelay={0} content="SvelteKit">
                    <Image src="/assets/sveltekit.png" width={64} height={64} className="rounded-xl" />
                  </Tooltip>
                </li>
                <li>
                  <Tooltip showArrow closeDelay={0} content="Next.js">
                    <Image src="/assets/nextjs.png" width={64} height={64} className="rounded-xl" />
                  </Tooltip>
                </li>
                <li>
                  <Tooltip showArrow closeDelay={0} content="Expo">
                    <Image src="/assets/expo.png" width={64} height={64} className="rounded-xl" />
                  </Tooltip>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Familiar with</h3>
              <ul className="flex gap-4">
                <li>
                  <Tooltip showArrow closeDelay={0} content="Supabase">
                    <Image src="/assets/supabase.png" width={40} height={40} className="rounded-lg" />
                  </Tooltip>
                </li>
                <li>
                  <Tooltip showArrow closeDelay={0} content="Docker">
                    <Image src="/assets/docker.png" width={40} height={40} className="rounded-lg" />
                  </Tooltip>
                </li>
                <li>
                  <Tooltip showArrow closeDelay={0} content="Node.js">
                    <Image src="/assets/nodejs.png" width={40} height={40} className="rounded-lg" />
                  </Tooltip>
                </li>
                <li>
                  <Tooltip showArrow closeDelay={0} content="Java">
                    <Image src="/assets/java.png" width={40} height={40} className="rounded-lg" />
                  </Tooltip>
                </li>
              </ul>
            </div>
          </div>
          <div className="hidden sm:flex items-center w-96">
            <Frameworks />
          </div>
        </div>
        <div className="flex flex-col-reverse sm:flex-row gap-16">
          <div className="flex w-64">
            <Welcome />
          </div>
          <div className="flex flex-col gap-10">
            <div>
              <h3 className="font-semibold text-xl mb-4">Native in</h3>
              <ul className="flex gap-4">
                <li>
                  <Tooltip showArrow closeDelay={0} content="Dutch 4F">
                    <Image src="/assets/dutch.png" width={96} height={64} className="rounded-lg" />
                  </Tooltip>
                </li>
                <li>
                  <Tooltip showArrow closeDelay={0} content="Chinese HSK 3">
                    <Image src="/assets/chinese.png" width={96} height={64} className="rounded-lg" />
                  </Tooltip>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Fluent in</h3>
              <ul className="grid grid-cols-4 gap-4">
                <li>
                  <Tooltip showArrow closeDelay={0} content="English C1">
                    <Image src="/assets/english.png" width={54} height={36} className="rounded" />
                  </Tooltip>
                </li>
                <li>
                  <Tooltip showArrow closeDelay={0} content="French B2">
                    <Image src="/assets/french.png" width={54} height={36} className="rounded" />
                  </Tooltip>
                </li>
                <li>
                  <Tooltip showArrow closeDelay={0} content="German B2">
                    <Image src="/assets/german.png" width={54} height={36} className="rounded" />
                  </Tooltip>
                </li>
                <li>
                  <Tooltip showArrow closeDelay={0} content="Spanish B1">
                    <Image src="/assets/spanish.png" width={54} height={36} className="rounded" />
                  </Tooltip>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

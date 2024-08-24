"use client"

import { Code, Snippet, Tab, Tabs } from "@nextui-org/react"

export default function Frameworks() {
  return (
    <div className="w-full h-full">
      <Tabs variant="underlined">
        <Tab key="sveltekit" title="SvelteKit" className="flex flex-col gap-4">
          <Snippet>npm create svelte@latest</Snippet>
          <Code className="w-full">
            <p>{"<script>"}</p>
            <p>&ensp;{'let txt = "Hello World"'}</p>
            <p>{"</script>"}</p>
            <br />
            <p>{"<h1>{txt}</h1>"}</p>
          </Code>
        </Tab>
        <Tab key="nextjs" title="Next.js" className="flex flex-col gap-4">
          <Snippet>npx create-next-app@latest</Snippet>
          <Code className="w-full">
            <p>{'"use client"'}</p>
            <br />
            <p>{'import { useState } from "react"'}</p>
            <br />
            <p>{"export default function Page() {"}</p>
            <p>&ensp;{'const [txt, setTxt] = useState("Hello World")'}</p>
            <br />
            <p>&ensp;{"return ("}</p>
            <p>&ensp;&ensp;{"<h1>{txt}</h1>"}</p>
            <p>&ensp;{")"}</p>
            <p>{"}"}</p>
          </Code>
        </Tab>
        <Tab key="expo" title="Expo" className="flex flex-col gap-4">
          <Snippet>npx create-expo-app@latest</Snippet>
          <Code className="w-full" size="sm">
            <p>{'import { useState } from "react"'}</p>
            <br />
            <p>{"export default function Screen() {"}</p>
            <p>&ensp;const [txt, setTxt] = useState("Hello World")</p>
            <br />
            <p>&ensp;{"return ("}</p>
            <p>&ensp;&ensp;{"<Text>{txt}</Text>"}</p>
            <p>&ensp;{")"}</p>
            <p>{"}"}</p>
          </Code>
        </Tab>
      </Tabs>
    </div>
  )
}

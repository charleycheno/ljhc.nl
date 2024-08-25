import Project from "./Project";

export default function Inventory() {
  return (
    <div className="flex flex-col items-center p-2 py-16 sm:p-16 bg-neutral-100 dark:bg-neutral-900">
      <h1 className="font-bold text-3xl mb-10">Inventory</h1>
      <div className="flex flex-col gap-20">
        <Project image="/assets/ljhc.nl.png" year="2024" url="https://ljhc.nl" title="LJHC.nl" source="https://github.com/charleycheno/ljhc.nl" technologies={["Next.js", "Tailwind CSS", "Framer Motion", "NextUI"]} description="This is a Next.js portfolio website for myself!" />
      </div>
    </div>
  )
}

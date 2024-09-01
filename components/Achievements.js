import Achievement from "./Achievement";

export default function Achievements() {
  return (
    <div className="flex flex-col items-start md:items-center p-4 pt-16 sm:p-16 bg-neutral-100 dark:bg-neutral-900">
      <h1 className="self-center text-center font-bold text-3xl mb-10">Achievements</h1>
      <Achievement date="28-05-2024" title="Central examen French VWO" description="On this day I did my central examen for French on VWO. My score was a 9,4! I was allowed to do this exam one year earlier, since my knowledge of the French language exceeded the expected level on VWO." />
    </div>
  )
}

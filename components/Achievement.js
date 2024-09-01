export default function Achievement({ date, title, description, image }) {
  return (
    <div className="flex flex-col">
      <div className="flex items-center">
        <div className="relative self-stretch ml-2 md:m-0">
          <div className="absolute left-1/2 -translate-x-1/2 w-2 h-full bg-blue-600"></div>
          <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-6 h-6 bg-white rounded-full border-4 border-blue-600"></div>
        </div>
        <div className="w-full md:w-[512px] lg:w-[768px] my-10 pl-10">
          <h2 className="font-semibold text-neutral-500 mb-1">{date}</h2>
          <h1 className="font-semibold text-xl mb-4">{title}</h1>
          <div className="flex flex-wrap lg:flex-nowrap gap-6 lg:gap-10">
            <p className="w-full md:w-[768px]">{description}</p>
            {image && <div className="w-full aspect-video bg-neutral-500 rounded-xl">src: {image}</div>}
          </div>
        </div>
      </div>
    </div>
  )
}

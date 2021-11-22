import Image from 'next/image'

export function CarouselItem(props) {
  const { bgSrc, title, description } = props

  return (
    <div className="relative w-full h-full px-8">
      <Image
        src={bgSrc}
        layout="fill"
        objectFit="cover"
        className="absolute inset-x-0 inset-y-0"
      />
      <div className="absolute inset-x-0 inset-y-0 text-white flex flex-col items-center justify-center max-w-xl w-full text-center transform left-1/2 -translate-x-1/2">
        <p className="font-extrabold text-4xl mb-4">{title}</p>
        <p className="text-lg font-light tracking-wide">{description}</p>
      </div>
    </div>
  )
}

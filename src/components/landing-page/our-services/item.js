import Image from 'next/image'

export function OurServicesItem(props) {
  const { imgSrc, title, description } = props

  return (
    <div className="flex flex-col items-center justify-start space-y-4">
      <div className="w-24 h-24 border-6 border-secondary relative rounded-full">
        <Image
          src={imgSrc}
          alt={imgSrc}
          layout="fill"
          objectFit="cover"
          className="rounded-full"
        />
      </div>
      <p className="text-2xl tracking-widest">{title}</p>
      <p className="max-w-xs text-center">{description}</p>
    </div>
  )
}

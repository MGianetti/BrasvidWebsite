import Image from 'next/image'

const srcs = [
  '/audi.png',
  '/bmw.png',
  '/chevrolet.png',
  '/fiat.png',
  '/ford.png',
  '/honda.png',
  '/hyundai.png',
  '/jac.png',
  '/mercedes.png',
  '/mitsubishi.png',
  '/nissan.png',
  '/renault.png',
  null,
  '/toyota.png',
  '/volks.png',
]

export function Brands() {
  return (
    <div className="flex flex-col pb-16 sm:m-8">
      <p className="text-4xl font-extrabold tracking-wider mb-8 text-primary text-center">
        Marcas
      </p>
      <div className="grid grid-cols-4 gap-8">
        {srcs.map((src, index) =>
          src ? (
            <Image
              key={`brand-${index}`}
              src={src}
              alt={src}
              width="100%"
              height="25%"
              layout="responsive"
              objectFit="contain"
            />
          ) : (
            <div key={`brand-${index}`} />
          ),
        )}
      </div>
    </div>
  )
}

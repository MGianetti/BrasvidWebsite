import Image from 'next/image'

export function HeroSection() {
  return (
    <div className="flex flex-col items-center sm:items-start relative w-full pt-24 pb-64 sm:pb-72 md:pb-80 sm:mx-8">
      <p className="text-4xl font-extrabold tracking-wider mb-2 text-white flex justify-center sm:inline">
        Brasvid
      </p>
      <p className="w-auto sm:max-w-sm mb-4 text-primary-dimmed tracking-wider flex sm:inline text-center sm:text-left">
        Vestibulum sollicitudin ipsum id mi tempus, sed semper tortor eleifend.
        Donec mollis id arcu quis euismod.
      </p>
      <button className="rounded-xl items-center justify-center px-6 py-1 text-center transition duration-150 focus:outline-none text-lg disabled:cursor-not-allowed uppercase font-bold text-white border-2 border-white hover:bg-white hover:bg-opacity-10">
        fale conosco
      </button>
      <div className="absolute flex w-full z-40 -left-24 justify-center top-72">
        <Image
          aria-hidden="true"
          src="/glass.png"
          alt=""
          width="477px"
          height="286px"
          className="scale-35 sm:scale-50 md:scale-65 lg:scale-75"
        />
      </div>
      <div className="justify-center absolute flex w-full top-52 -right-28 lg:top-32 lg:left-60">
        <Image
          aria-hidden="true"
          src="/glass.png"
          alt=""
          width="477px"
          height="286px"
          className="scale-35 sm:scale-50 md:scale-65 lg:scale-75"
        />
      </div>
      <div className="justify-center absolute flex w-full top-56 -right-16 lg:top-40 lg:left-40">
        <Image
          aria-hidden="true"
          src="/glass.png"
          alt=""
          width="477px"
          height="286px"
          className="scale-35 sm:scale-50 md:scale-65 lg:scale-75"
        />
      </div>
      <div className="justify-center absolute flex w-full top-60 lg:top-48 lg:left-20">
        <Image
          aria-hidden="true"
          src="/glass.png"
          alt=""
          width="477px"
          height="286px"
          className="scale-35 sm:scale-50 md:scale-65 lg:scale-75"
        />
      </div>
    </div>
  )
}

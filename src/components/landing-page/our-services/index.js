import Image from 'next/image'
import withAutoplay from 'react-awesome-slider/dist/autoplay'
import AwesomeSlider from 'react-awesome-slider'
import 'react-awesome-slider/dist/styles.css'

const AutoplaySlider = withAutoplay(AwesomeSlider)

export function OurServices() {
  return (
    <div className="flex flex-col items-center w-full">
      <div className="flex flex-col items-center">
        <p className="text-4xl font-extrabold tracking-wider mb-12 text-primary">
          Nossos serviços
        </p>

        <button className="rounded-xl flex items-center justify-center px-6 py-1 text-center transition duration-150 focus:outline-none text-lg disabled:cursor-not-allowed uppercase font-bold text-primary border-2 border-primary">
          orçamento
        </button>
      </div>
    </div>
  )
}

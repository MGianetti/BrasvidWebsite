import Image from 'next/image'

import {
  HDWW_BG_PATH,
  HDWW_DESCRIPTON,
  HDWW_HEADING,
  HDWW_LEADING,
} from '../../../resources/strings'
import { hdwwContent } from './constants'
import { OurServicesItem } from './item'

export function OurServices() {
  return (
    <div className="flex flex-col items-center w-full relative px-4">
      <Image
        src={HDWW_BG_PATH}
        layout="fill"
        className="absolute block inset-x-0 inset-y-0 object-cover -z-1"
      />
      <div className="flex flex-col items-center w-full py-20 z-30 text-white">
        <p className="mb-4">{HDWW_HEADING}</p>
        <p className="text-center text-4xl mb-4">{HDWW_LEADING}</p>
        <p className="max-w-2xl text-center mb-8">{HDWW_DESCRIPTON}</p>
        <div className="w-full max-w-4xl flex flex-col space-y-8 space-x-0 md:flex-row md:space-x-8 md:space-y-0 justify-between">
          {hdwwContent.map(hdww => (
            <OurServicesItem
              key={`hdww-${hdww.title}`}
              imgSrc={hdww.imgSource}
              title={hdww.title}
              description={hdww.description}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

import { AutoPlay } from '@egjs/flicking-plugins'
import Flicking from '@egjs/react-flicking'

import { heroContent } from './constants'
import { CarouselItem } from './item'

export function HeroSection() {
  const _plugins = [new AutoPlay()]

  return (
    <Flicking
      plugins={_plugins}
      useFindDOMNode={true}
      hideBeforeInit={true}
      firstpanelsize="600px"
      duration={2000}
      circular={true}
      className="w-full h-[600px]"
    >
      <CarouselItem
        bgSrc={heroContent[0].imgSource}
        heroContent
        title={heroContent[0].title}
        description={heroContent[0].description}
      />
      <CarouselItem
        bgSrc={heroContent[1].imgSource}
        title={heroContent[1].title}
        description={heroContent[1].description}
      />
      <CarouselItem
        bgSrc={heroContent[2].imgSource}
        title={heroContent[2].title}
        description={heroContent[2].description}
      />
    </Flicking>
  )
}

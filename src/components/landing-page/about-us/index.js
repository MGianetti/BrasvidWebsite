import Image from 'next/image'

import { aboutUsTitle, crewMembers } from './contants.js'

export function AboutUs() {
  return (
    <div className="container w-full mx-auto">
      <h1 className="text-4xl mx-8 sm:mx-0 text-center text-primary pt-5">
        {aboutUsTitle}
      </h1>
      <div className="w-full flex flex-col col-span-2 flex-wrap content-center">
        {crewMembers.map(crewMember => {
          const memberKey = `${crewMember.memberName}-key`
          return (
            <div
              key={memberKey}
              className="flex my-9 xl:justify-center flex-col sm:flex-row"
            >
              <div className="w-full sm:w-36 h-40 mt-2 col-span-3 flex rounded-lg drop-shadow-3xl relative items-center">
                <Image
                  src={crewMember.avatarPath}
                  layout="fill"
                  objectFit="contain"
                  className="rounded-lg"
                />
              </div>
              <div className="my-9 sm:my-0 flex flex-col mx-9 w-22">
                <h2 className="text-primary text-2xl">
                  {crewMember.memberName}
                </h2>
                <h3 className="text-secondary text-lg mt-1 mb-3">
                  {crewMember.memberRole}
                </h3>
                <p className="w-64 break-words">
                  {crewMember.memberDescription}
                </p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

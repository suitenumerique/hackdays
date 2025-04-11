import { NavBar } from '@/components/NavBar'

import { Hero } from '@/sections/Hero'
// import { Europe } from '@/sections/Europe'
import { Mission } from '@/sections/Mission'
import { AVosMarques } from '@/sections/AVosMarques'
import { Prets } from '@/sections/Prets'
import { Partez } from '@/sections/Partez'
import { Histoire } from '@/sections/Histoire'
import { Informations } from '@/sections/Informations'

export default function Index() {
  return (
    <div>
      <NavBar />
      <div className="w-full">
        <Hero />
        <div className="bg-beige-100">
          <Mission />
          <AVosMarques />
          <Prets />
          <Partez />
          <Histoire />
          <Informations />
        </div>
      </div>
    </div>
  )
}


import React from 'react'
import Banner from './component/Banner'
import Trips from './component/Trips'
import Newsletter from './component/Newsletter'
import Triumph from './component/Triumph'

const page = () => {
  return (
    <div>
      <Banner/>
      <Trips/>
      <Newsletter/>
      <Triumph/>
    </div>
  )
}

export default page
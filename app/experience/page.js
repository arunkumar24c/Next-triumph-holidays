import React from 'react'
import Banner from './component/Banner'
import Tour from './component/Tour'
import Package from './component/Package'
import Newletter from './component/Newletter'
import Triumph from './component/Triumph'

const page = () => {
  return (
    <div>
      <Banner/>
      <Tour/>
      <Package/>
      <Newletter/>
      <Triumph/>
    </div>
  )
}

export default page
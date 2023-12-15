import React from 'react'
import Banner from './component/Banner'
import Tour from './component/Tour'
import Newletter from './component/Newletter'
import Triumph from './component/Triumph'
import Package from './component/Package'

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
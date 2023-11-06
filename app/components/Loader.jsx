import React from 'react'
import loader from '../public/Loader.gif'
import Image from 'next/image'

const Loader = () => {
  return (
    <div className="">
      <Image src={loader} alt='loading..'/>
    </div>
  )
}

export default Loader
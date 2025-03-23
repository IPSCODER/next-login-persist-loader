import Image from 'next/image'
import React from 'react'

const HeroSection = () => {
  return (
    <section className='w-full h-screen py-10' >
<Image
          src={'https://media.istockphoto.com/id/1160789077/photo/nutritionist-giving-consultation-to-patient-with-healthy-fruit-and-vegetable-right-nutrition.jpg?s=612x612&w=0&k=20&c=t5LNRmwc-BKcV-jmOGiCZXo5DWjBZKMe0OumH4WdW7I='}
          placeholder="blur"
          blurDataURL={'https://media.istockphoto.com/id/1160789077/photo/nutritionist-giving-consultation-to-patient-with-healthy-fruit-and-vegetable-right-nutrition.jpg?s=612x612&w=0&k=20&c=t5LNRmwc-BKcV-jmOGiCZXo5DWjBZKMe0OumH4WdW7I='}
          alt={'demo'}
          width={100}
          height={200}
          className="aspect-square w-full h-full object-contain object-center"
          priority
          sizes="100vw"
        />
    </section>
  )
}

export default HeroSection
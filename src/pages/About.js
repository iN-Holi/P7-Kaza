import React from 'react'
import Banner from '../components/Banner'
import BannerImg from '../assets/bannerAbout.svg'

const About = () => {
  return (
    <div className="about">
      <Banner image={BannerImg} alt={'bannière image de montagne'} />
    </div>
  )
}

export default About

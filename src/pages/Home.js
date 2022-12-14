import React from 'react'
import Banner from '../components/Banner'
import BannerImg from '../assets/bannerHome.png'
import { NavLink } from 'react-router-dom' //
import Card from '../components/Card'
import annonces from '../annonces.json'

function Home() {
  return (
    <div className="home">
      <Banner
        image={BannerImg}
        alt={'bannière image cote de mer'}
        text={'Chez vous, partout et ailleurs'}
      />
      <section className="card-gallery">
        {annonces.map((annonce) => {
          // map() permet de créer une liste de composants React
          return (
            <NavLink key={annonce.id} to={`/annonces/${annonce.id}`}>
              <Card picture={annonce.cover} title={annonce.title} />
            </NavLink>
          )
        })}
      </section>
    </div>
  )
}

export default Home

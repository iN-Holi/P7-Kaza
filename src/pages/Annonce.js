import { useParams, Navigate } from 'react-router-dom'
import Collapse from '../components/Collapse'
import annonces from '../annonces.json'
import Rating from '../components/Rating'
import Slideshow from '../components/Slideshow'
import Tag from '../components/Tag'

function Annonce() {
  const { annonceId } = useParams()
  const annonce = annonces.find((annonce) => annonce.id === annonceId)

  const { title, location, host, description, rating, pictures } = annonce

  return annonce ? (
    <>
      <div className="page-container">
        <div className="content-wrap">
          <main>
            <Slideshow pictures={pictures} />
            <div className="annonce-container">
              <section className="annonce-container-section1">
                <header>
                  <h1>{title}</h1>
                  <h3>{location}</h3>
                </header>

                <article>
                  {annonce.tags.map((tag, index) => (
                    <Tag key={index} name={tag} />
                  ))}
                </article>
              </section>

              <section className="annonce-container-2">
                <article>
                  <Rating rating={rating} />
                </article>
                <div className="annonce-container-section2-profil">
                  <h3>{host.name}</h3>
                  <img className="annonce-host-pic" src={host.picture} alt="" />
                </div>
              </section>
            </div>

            <section className="collapse-annonce">
              <Collapse title="Description" content={description} />
              <Collapse
                title="Equipements"
                content={annonce.equipments.map((equipment, index) => (
                  <li key={`Equipment-${index}`}>{equipment}</li>
                ))}
              />
            </section>
          </main>
        </div>
      </div>
    </>
  ) : (
    Navigate('/404')
  )
}

export default Annonce

function Card({ title, picture }) {
  return (
    <div className="card-container">
      <img src={picture} alt="" />
      <h2> {title}</h2>
    </div>
  )
}

export default Card

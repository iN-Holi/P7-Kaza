import PropTypes from 'prop-types'

function Card({ title, picture }) {
  return (
    <div className="card-container">
      <img src={picture} alt="" />
      <h2> {title}</h2>
    </div>
  )
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
}

export default Card

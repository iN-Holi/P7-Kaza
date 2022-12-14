import emptyStar from '../assets/emptyStar.svg'
import fullStar from '../assets/fullStar.svg'

function Rating({ rating }) {
  const numbers = [1, 2, 3, 4, 5]

  return (
    <>
      {numbers.map((data, index) =>
        rating >= data ? (
          <img key={index} src={fullStar} alt="" />
        ) : (
          <img key={index} src={emptyStar} alt="" />
        )
      )}
    </>
  )
}

export default Rating

function Banner({ image, alt, text }) {
    return (
        <div className="banner">
            <img src={image} alt={alt} />
            <h1 className="banner-text">{text}</h1>
        </div>
    )
}

export default Banner
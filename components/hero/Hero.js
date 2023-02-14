
const Hero = ({ titleUnderConstruction }) => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero__content">
          <h1 className="hero__title">{titleUnderConstruction ? titleUnderConstruction : "More than just shorter links"}</h1>
          <p className="hero__description">Build your brand's recognition and get detailed insights on how your links are perfoming.</p>
          <button className="button hero__button">Get Started</button>
        </div>
      </div>
    </section>
  )
}


export default Hero;

const ShortLinkSrvice = () => {
  return (
    <section className="short-link-service">
      <div className="container">
          <form className="form">
            <input className="form__input" type="text" placeholder="Shorted a link here..."/>
            <button className="button form__button"> Shorten it!</button>
          </form>
          <ul className="short-link-service__list">
            <li className="short-link-service__item">
              <span className="short-link-service__longlink">https:/www.frontendmentor.io</span>
              <span className="short-link-service__shortlink">https://rel.link/k4iKyk</span>
              <button className="button short-link-service__button">Copy</button>
            </li>
          </ul>
      </div>
    </section>
  )
}


export default ShortLinkSrvice;
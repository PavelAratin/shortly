import Link from "next/link";
const MobileMenu = ({ overlayFormToggleDisplay }) => {
  const signUpHandler = () => {
    overlayFormToggleDisplay('Sign Up')
  }
  const loginHandler = () => {
    overlayFormToggleDisplay('Login')
  }
  return (
      <div className='mobile-menu'>
      <nav className="nav">
        <ul className="nav__list">
          <li className="nav__item">
            <Link className="nav__link" href="/features">Features</Link>
          </li>
          <li className="nav__item">
            <Link className="nav__link" href="/pricing">Pricing</Link>
          </li>
          <li className="nav__item">
            <Link className="nav__link" href="/resources">Resources</Link>
          </li>
        </ul>
      </nav>
      <ul className="header-actions-list">
        <li className="header-actions-list__item">
          <button
            className="header-actions-list__button button"
            onClick={loginHandler}
          >Login</button>
        </li>
        <li className="header-actions-list__item">
          <button
            className="header-actions-list__button button"
            onClick={signUpHandler}
          >Sign Up</button>
        </li>
      </ul>
    </div>
  )
}


export default MobileMenu;
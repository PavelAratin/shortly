import { useState } from "react";
const ShortLinkSrvice = () => {
  const [inputValue, setInputValue] = useState('')
  const [inputValidate, setInputvalidate] = useState(false)
  const [buttonDisabled, setButtonDisabled] = useState(true)
  const inputChangeHandler = (e) => {
    setInputValue(e.target.value)
    if (inputValue !== '') {
      setButtonDisabled(false)
    }
  }
  const submitFormHandler = (e) => {
    e.preventDefault()
    if (inputValue !== '' && inputValue.includes('https:/')) {
      console.log("форма отправлена", inputValue);
      setInputvalidate(false)
    } else {
      // setInputvalidate(previousState => !previousState)
      console.log("форма не отправлена");
      setInputvalidate(true)
    }
  }
  return (
    <section className="short-link-service">
      <div className="container">
        <form
          className="form"
          onSubmit={submitFormHandler}
        >
          <input
            className={`form__input ${inputValidate ? "error" : ''}`}
            onChange={inputChangeHandler}
            value={inputValue}
            type="text"
            placeholder="Shorted a link here..."
          />
          {inputValidate && <span className="form__error-text">Please add a link</span>}
          <button
            className="button form__button"
            disabled={buttonDisabled}
          > Shorten it!</button>
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
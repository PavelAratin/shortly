import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { addShortLinkActions, deleteShortLinkActions } from "../../pages/store/store";
import { useDispatch } from "react-redux";
import { useClipboard } from 'use-clipboard-copy';
const ShortLinkSrvice = () => {
  const userRegisterState = useSelector((state) => state.userRegistered)
  const shortLinkState = useSelector((state) => state.shortLinks);
  const [inputValue, setInputValue] = useState('');
  const [inputValidate, setInputvalidate] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [submitForm, setSubmitForm] = useState(false)
  const addShortLinkDispatch = useDispatch();
  const deleteShortLinkDispatch = useDispatch();
  const clipboard = useClipboard();

  const inputChangeHandler = (e) => {
    setInputValue(e.target.value)
  }

  function getShortLink(url) {
    fetch(`https://api.shrtco.de/v2/shorten?url=${url}`)
      .then(data => data.json())
      .then((res) => {
        return addShortLinkDispatch(addShortLinkActions(res.result))
      })
  }

  useEffect(() => {
    if (inputValue !== '') {
      setButtonDisabled(false)
    } else {
      setButtonDisabled(true)
    }
  }, [inputValue, buttonDisabled])

  useEffect(() => {
    if (submitForm) {
      getShortLink(inputValue)
      setSubmitForm(false)
    }
  }, [submitForm])

  const deleteShortLinkHandler = (shortLinkId) => {
    deleteShortLinkDispatch(deleteShortLinkActions(shortLinkId))
  }

  const submitFormHandler = (e) => {
    e.preventDefault()
    if (inputValue.includes('https:/')) {
      setInputvalidate(false)
      setSubmitForm(true)
    } else {
      setInputvalidate(true)
      setSubmitForm(false)
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
            className={`form__input`}
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
          {userRegisterState ? '' : <div className="form-inaccessible">
            <p className="form-inaccessible__text">Need Login</p>
          </div>}
        </form>
        <ul className="short-link-service__list">
          {shortLinkState.map((shortLink, index) => {
            return <li className="short-link-service__item" key={shortLink.code + index}>
              <span className="short-link-service__longlink">{shortLink.original_link}</span>
              <input
                type='text'
                value={shortLink.full_short_link2}
                ref={clipboard.target}
                readOnly
                className="short-link-service__shortlink"
              >
              </input>
              <button
                onClick={clipboard.copy}
                className="button short-link-service__button"
              >Copy</button>
              <button onClick={() => deleteShortLinkHandler(shortLink.code)}
                className="button short-link-service__button"
              >Delete</button>
            </li>
          })}
        </ul>
      </div>
    </section >
  )
}


export default ShortLinkSrvice;
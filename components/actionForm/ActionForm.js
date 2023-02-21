import { useState } from "react";
import { useDispatch } from "react-redux";
import { userRegisteredActions } from "../../store/store";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
const ActionForm = ({ overlayFormToggleDisplay, buttonLoginText, setOverlayFormDisplayIs }) => {
  const [inputEmailValue, setInputEmailValue] = useState('');
  const [inputPasswordValue, setInputPasswordValue] = useState('');
  const [userNotFound, setUserNotFound] = useState(false);
  const [successfulRegistration, setSuccessfulRegistration] = useState(false);
  const userRegisteredDispatch = useDispatch();
  
  const formCloseHandler = () => {
    overlayFormToggleDisplay()
  }
  const inputEmailChangeHanlder = (e) => {
    setInputEmailValue(e.target.value)
  }
  const inputPasswordChangeHanlder = (e) => {
    setInputPasswordValue(e.target.value)
  }

  const formSubmitHandler = (e) => {
    e.preventDefault();
    if (e.target.dataset.form === 'Sign Up') {
      const auth = getAuth();
      createUserWithEmailAndPassword(auth, inputEmailValue, inputPasswordValue)
        .then((user) => {
          console.log(user)
          setSuccessfulRegistration(true)
        })
        .catch((error) => {
          console.log(error.message)
        });
    }
    if (e.target.dataset.form === 'Login') {
      const auth = getAuth();
      signInWithEmailAndPassword(auth, inputEmailValue, inputPasswordValue)
        .then((data) => {
          setOverlayFormDisplayIs((previousState) => !previousState)
          setUserNotFound((previousState) => !previousState)
          userRegisteredDispatch(userRegisteredActions(true))
        })
        .catch((error) => {
          setUserNotFound((previousState) => !previousState)
          console.log(error.message)
        });
    }
  }
  return (
    <form className="action-form" onSubmit={formSubmitHandler} data-form={buttonLoginText}>
      <input
        className="action-form__input"
        type="text" placeholder="Email"
        value={inputEmailValue}
        onChange={inputEmailChangeHanlder}
      ></input>
      <input
        className="action-form__input"
        type="text"
        placeholder="Password"
        value={inputPasswordValue}
        onChange={inputPasswordChangeHanlder}
      ></input>
      <button className="button action-form__button">{buttonLoginText}</button>
      <span
        className="action-form__close"
        onClick={formCloseHandler}
      >
        <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M19.207 6.207a1 1 0 0 0-1.414-1.414L12 10.586 6.207 4.793a1 1 0 0 0-1.414 1.414L10.586 12l-5.793 5.793a1 1 0 1 0 1.414 1.414L12 13.414l5.793 5.793a1 1 0 0 0 1.414-1.414L13.414 12l5.793-5.793z" fill="#000000" /></svg>
      </span>
      {userNotFound ? <div className="form-inaccessible">
        <p className="form-inaccessible__text">User is not found</p>
      </div> : ''}
      {successfulRegistration ? <div className="form-inaccessible">
        <p className="form-inaccessible__text">Successful Registration</p>
      </div> : ''}
    </form>
  )
}


export default ActionForm;
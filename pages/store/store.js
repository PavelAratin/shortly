import { createStore} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

const reducer = (state = { userRegistered: false }, action) => {
  console.log('state',state);
  console.log('action',action);
  if (action.type === "USER_REGISTERED") {
    return {
      userRegistered: action.userRegistered
    }
  }
  return state;
}

export const store = createStore(reducer,composeWithDevTools());

export const userRegisteredActions = (userRegistered) => {
  return {
    type: 'USER_REGISTERED',
    userRegistered
  }
}


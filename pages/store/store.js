import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

const reducer = (state = { userRegistered: false, shortLinks: [] }, action) => {
  if (action.type === "USER_REGISTERED") {
    return {
      ...state,
      userRegistered: action.userRegistered,
    }
  }
  if (action.type === "ADD_SHORT_LINK") {
    return {
      ...state,
      shortLinks: [...state.shortLinks, action.shortLink]
    }
  }
  if (action.type === "DELETE_SHORT_LINK") {
    return {
      ...state,
      shortLinks: state.shortLinks.filter((shortLink) => shortLink.code !== action.shortLinkId)
    }
  }
  return state;
}

export const store = createStore(reducer, composeWithDevTools());

export const userRegisteredActions = (userRegistered) => {
  return {
    type: 'USER_REGISTERED',
    userRegistered
  }
}

export const addShortLinkActions = (shortLink) => {
  return {
    type: 'ADD_SHORT_LINK',
    shortLink
  }
}

export const deleteShortLinkActions = (shortLinkId) => {
  return {
    type: 'DELETE_SHORT_LINK',
    shortLinkId
  }
}


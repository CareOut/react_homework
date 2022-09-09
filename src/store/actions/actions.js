const EXAMPLE_ACTION = "EXAMPLE_ACTION";
export const exampleAction = {
  type: EXAMPLE_ACTION,
};

const ADD_CHAT = "ADD_CHAT";
export const chatsAction = (name) => ({
  type: ADD_CHAT,
  name,
});

const ADD_MESSAGE = "ADD_MESSAGE";
export const messageAction = (chatId, msg) => ({
  type: ADD_MESSAGE,
  chatId,
  msg,
});

export const GET_DUNE_REQUEST = "GET_DUNE_REQUEST";
export const GET_DUNE_SUCCESS = "GET_DUNE_SUCCESS";
export const GET_DUNE_FAILURE = "GET_DUNE_FAILURE";

export const getDuneRequest = () => ({
  type: GET_DUNE_REQUEST,
});
export const getDuneSuccess = (data) => ({
  type: GET_DUNE_SUCCESS,
  payload: data,
});
export const getDuneFailure = (err) => ({
  type: GET_DUNE_FAILURE,
  payload: err,
});

const API_URL_PUBLIC = "https://the-dune-api.herokuapp.com/books/8";

export const getAllBooks = () => async (dispatch) => {
  dispatch(getDuneRequest());
  try {
    const res = await fetch(API_URL_PUBLIC);
    if (!res.ok) {
      throw new Error(`Request failed with status ${res.status}`);
    }
    const result = await res.json();
    dispatch(getDuneSuccess(result));
  } catch (err) {
    dispatch(getDuneFailure(err.message));
  }
};

const STORE_RESET = "STORE_RESET";
export const resetStore = () => ({
  type: STORE_RESET,
});

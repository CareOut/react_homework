const EXAMPLE_ACTION = "EXAMPLE_ACTION";
export const exampleAction = {
  type: EXAMPLE_ACTION,
};

const ADD_CHAT = "ADD_CHAT";
export const chatsAction = (name) => ({
  type: ADD_CHAT,
  chat: {
    name,
    id: Date.now(),
  },
});

const ADD_MESSAGE = "ADD_MESSAGE";
export const messageAction = (msg) => ({
  type: ADD_MESSAGE,
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

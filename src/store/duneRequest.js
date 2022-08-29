import {
  getDuneRequest,
  getDuneSuccess,
  getDuneFailure,
} from "./actions/actions";

const API_URL_PUBLIC = "https://the-dune-api.herokuapp.com/books/3";

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

import {
  GET_DUNE_REQUEST,
  GET_DUNE_SUCCESS,
  GET_DUNE_FAILURE,
} from "../actions/actions";

export const STATUSES = {
  IDLE: 0,
  REQUEST: 1,
  SUCCESS: 2,
  FAILURE: 3,
};

const initialState = {
  books: [],
  request: STATUSES.IDLE,
  error: null,
};
export const duneReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DUNE_REQUEST:
      return {
        ...state,
        request: STATUSES.REQUEST,
      };
    case GET_DUNE_SUCCESS:
      return {
        ...state,
        books: action.payload,
        request: STATUSES.SUCCESS,
      };
    case GET_DUNE_FAILURE:
      return {
        ...state,
        request: STATUSES.FAILURE,
        error: action.payload,
      };

    default:
      return state;
  }
};

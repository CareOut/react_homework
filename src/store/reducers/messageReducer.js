const ADD_MESSAGE = "ADD_MESSAGE";

const initialMessages = [];

export const messageReducer = (state = initialMessages, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      return [...state, action.msg];
    default:
      return state;
  }
};

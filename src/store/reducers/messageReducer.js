const ADD_MESSAGE = "ADD_MESSAGE";
const STORE_RESET = "STORE_RESET";
const initialState = {
  messageList: {},
};

export const messageReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE: {
      const currentList = state.messageList[action.chatId] || [];
      console.log(action.chatId);
      return {
        ...state,
        messageList: {
          ...state.messageList,
          [action.chatId]: [...currentList, action.msg],
        },
      };
    }
    case STORE_RESET:
      return initialState;
    default:
      return state;
  }
};

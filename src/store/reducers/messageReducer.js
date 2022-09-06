const ADD_MESSAGE = "ADD_MESSAGE";
const STORE_RESET = "STORE_RESET";
const ADD_CHAT = "ADD_CHAT";

let chatNumber = 1;

const initialState = {
  messageList: {
    [chatNumber]: [],
  },
};

export const messageReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE: {
      const currentList = state.messageList[action.chatId] || [];

      return {
        ...state,
        messageList: {
          ...state.messageList,
          [action.chatId]: [...currentList, action.msg],
        },
      };
    }
    case ADD_CHAT: {
      return {
        ...state,
        messageList: {
          ...state.messageList,
          [++chatNumber]: [],
        },
      };
    }
    case STORE_RESET:
      return initialState;
    default:
      return state;
  }
};

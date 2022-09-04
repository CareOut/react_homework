const ADD_CHAT = "ADD_CHAT";
const STORE_RESET = "STORE_RESET";

const initialState = {
  chatList: [
    {
      name: "Chat",
      id: "1",
    },
  ],
};

export const chatsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CHAT:
      return {
        ...state,
        chatList: [
          ...state.chatList,
          {
            name: action.name,
            id: `${state.chatList.length + 1}`,
          },
        ],
      };
    case STORE_RESET:
      return initialState;
    default:
      return state;
  }
};

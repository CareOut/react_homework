const ADD_CHAT = "ADD_CHAT";

const initialChats = [
  {
    name: "Chat1",
    id: "1",
  },
  {
    name: "Chat2",
    id: "2",
  },
];

export const chatsReducer = (state = initialChats, action) => {
  switch (action.type) {
    case ADD_CHAT:
      return [...state, action.chat];
    default:
      return state;
  }
};

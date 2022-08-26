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

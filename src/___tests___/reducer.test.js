test("returns correct state after ADD_CHAT action", () => {
  const userStore = userReducer(initialState, chatsAction("chat"));
  expect(userStore).toMatchSnapshot();
});

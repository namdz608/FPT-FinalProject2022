const initState = {
  user: [
    { id: 1, name: "Eric" },
    { id: 2, name: "Nam dz" },
  ],
};
const rootReducer = (state = initState, action) => {
  switch (action.type) {
    case "DELETE_USER":
      console.log("run into a");
      return state;

    default:
      return state;
  }
};

export default rootReducer;

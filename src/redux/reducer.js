const initialState = {
  user: [],
  weather: [],
  city: "Dubai",
};

function Reducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_USER":
      return { ...state, user: action.payload };
    case "WEATHER":
      return { ...state, weather: [...state.weather, action.payload] };
    case "CITY":
      return { ...state, city: action.payload };
    default:
      return state;
  }
}

export default Reducer;

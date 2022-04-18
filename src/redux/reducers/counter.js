

export const counter = (state = {count: 0}, {type}) => {
  switch(type) {
    // case INCREMENT_COUNT: return {...state, count: state.count + 1};
    // case DECREMENT_COUNT: return {...state, count: state.count - 1};
    default: return state;
  }
}

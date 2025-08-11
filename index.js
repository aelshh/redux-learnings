import { createStore } from "redux";

const initialState = {
  firstName: "Anurag",
  lastName: "Pandey",
  age: 0,
};

const INCREAMENT = "age/increament";
const DECREAMENT = "age/decreament";
const INCREASE_BY = "age/increaseBy";
const DECREASE_BY = "age/decreaseBy";

const ageCountElement = document.querySelector(".age-count");

function reducer(state = initialState, action) {
  switch (action.type) {
    case INCREAMENT:
      return { ...state, age: state.age + 1 };
    case DECREAMENT:
      return { ...state, age: state.age - 1 };
    case INCREASE_BY:
      return { ...state, age: state.age + action.payload };
    case DECREASE_BY:
      return { ...state, age: state.age - action.payload };

    default:
      return state;
  }
}

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__?.());

store.subscribe(() => {
  ageCountElement.innerHTML = store.getState().age;
});

ageCountElement.innerHTML = store.getState().age;

store.dispatch({ type: INCREAMENT });
store.dispatch({ type: DECREAMENT, payload: 20 });
store.dispatch({ type: INCREASE_BY, payload: 20 });

ageCountElement.addEventListener("click", () => {
  store.dispatch({ type: INCREAMENT });
});

import { createStore } from "redux";
import myCreateStore from "./my-redux";

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
const myStore = myCreateStore(reducer);
console.log(myStore);

myStore.subscribe(() => {
  ageCountElement.innerHTML = myStore.getState().age;
});

const unsubscribe = myStore.subscribe(() => {
  console.log("hey there");
});

ageCountElement.innerHTML = myStore.getState().age;

myStore.dispatch({ type: INCREAMENT });
unsubscribe();
console.log(myStore.getState());
myStore.dispatch({ type: DECREAMENT });
console.log(myStore.getState());
myStore.dispatch({ type: INCREASE_BY, payload: 20 });
console.log(myStore.getState());

ageCountElement.addEventListener("click", () => {
  myStore.dispatch({ type: INCREAMENT });
});

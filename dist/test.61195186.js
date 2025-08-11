let reduxState = {
    firstName: "Anurag",
    lastName: "Pandey",
    age: 0
};
function reducer(state, action) {
    if (action.type === "age/increament") return {
        ...state,
        age: state.age + 1
    };
    else if (action.type === "age/decreament") return {
        ...state,
        age: state.age - 1
    };
    else if (action.type === "age/increamentBy") return {
        ...state,
        age: state.age + action.payload
    };
    return state;
}
reduxState = reducer(reduxState, {
    type: "age/increament"
});
console.log(reduxState);
reduxState = reducer(reduxState, {
    type: "age/decreament"
});
console.log(reduxState);
reduxState = reducer(reduxState, {
    type: "age/increamentBy",
    payload: 20
});
console.log(reduxState);

//# sourceMappingURL=test.61195186.js.map

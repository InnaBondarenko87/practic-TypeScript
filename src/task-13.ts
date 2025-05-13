type Action = { type: "increment" } | { type: "decrement" };

type State = number;

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    default:
      return state;
  }
}

console.log(reducer);

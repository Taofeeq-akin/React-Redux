const redux = require("redux");

// reducer function
const counterReducer = (state = { counter: 0 }, action) => {
  return {
    counter: state.counter + 1,
  };
};

const store = redux.createStore(counterReducer);

//will give state after initialization
// console.log(store.getState());

const counterSubscriber = () => {
  // This will retuen the latest snapshot
  const latestState = store.getState();
  console.log(latestState);
};

// making redux aware of how subscriber to it will run it when ever data in the store changes
store.subscribe(counterSubscriber);

store.dispatch({ type: "increment" });

// To run my code with node.js (node (the file name))

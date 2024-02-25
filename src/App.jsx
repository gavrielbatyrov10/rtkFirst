import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import Players from "./Players";
import AddPlayerForm from "./AddPlayerForm";

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <AddPlayerForm />
        <Players />
      </div>
    </Provider>
  );
};

export default App;

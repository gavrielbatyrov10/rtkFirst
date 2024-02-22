import { Provider } from "react-redux";
import store from "./store";
import Players from "./Players";

export default function App() {
  return (
    <Provider store={store}>
      <Players />
    </Provider>
  );
}

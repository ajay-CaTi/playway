import { Provider } from "react-redux";
import Body from "./component/Body";
import Head from "./component/Head";
import store from "./component/utils/store";

function App() {
  return (
    <Provider store={store}>
      <div className="">
        <Head />
        <Body />
      </div>
    </Provider>
  );
}

export default App;

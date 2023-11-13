import { Provider } from "react-redux";
import Main from "./Main";
import store from "./Redux/store";



export default function App() {

  return (
    <Provider store={store}>
      <Main/>
    </Provider>
    
  );
}


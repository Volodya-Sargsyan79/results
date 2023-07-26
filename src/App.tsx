import { store } from "./store";
import { Provider } from "react-redux";
import { Date } from "./components/date";
import './App.css';

export const App =()=> {
  return (
    <Provider store={store}>    
    
      <div className="App">
        <Date />
      </div>
    </Provider>
  );
}
import logo from "./logo.svg";
import "./App.css";

import { useDispatch, useSelector } from "react-redux";
import { getQuote } from "./module/quoteStore";

function App() {
  const dispatch = useDispatch();
  const quote = useSelector((state) => state.quote);
  console.log(quote);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button onClick={() => dispatch(getQuote())}>Get Quote</button>
        <h1>Quote: {quote.text}</h1>
        <h2>Author: {quote.author}</h2>
      </header>
    </div>
  );
}

export default App;

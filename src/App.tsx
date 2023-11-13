import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { HashMethods, hash, encodeBase64, decodeBase64 } from "./utils/Crypto";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div>
        <a href="https://reactjs.org" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
      </div>
      <h1>React + Vite</h1>
      <h2>On CodeSandbox!</h2>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR.
        </p>

        <p>
          Tip: you can use the inspector button next to address bar to click on
          components in the preview and open the code in the editor!
        </p>
        <p>{}</p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more{" "}
        {(console.log(encodeBase64("Hello world")), hash("Hi", HashMethods.MD5) + " " + decodeBase64(encodeBase64("hello, world")))}
      </p>
    </div>
  );
}

export default App;

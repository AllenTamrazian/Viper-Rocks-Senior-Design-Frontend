/*Import other files here at the top*/
import { useEffect, useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import config from './config';

const App = () => {
  const [count, setCount] = useState(0);
  const [exampleJson, setExampleJson] = useState(null);

  /*Use effect runs on component start up*/
  useEffect(() => {
    /*Get api url from config file*/
    const exampleEndpoint = config.exampleApi;

    /*Get json from external API using javascript fetch*/
    fetch(exampleEndpoint)
      .then((response) => response.json())
      .then((data) => {
        console.log('API data', data);/*Note in dev mode react will run this twice.*/
        setExampleJson(data)/*Add json response to state. This way react can render below*/
      });
  }, []);/*This empty array parameter means that this function will only run once when this component is finished rendering for the first time.*/
  

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

      {/*If example json exists then show the contents*/}
      {exampleJson?
        <div>
          <h3>API Response Contents</h3>
          <p><b>text-result: {exampleJson.testResult}</b></p>
          <img src={exampleJson.testResult}/>
         </div>
        :
        <></>
      }
    </>
  )
}

export default App

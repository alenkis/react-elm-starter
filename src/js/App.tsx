import React from 'react'

import Elm from 'react-elm-components'
import { Elm as AppElm } from './Main'

const setupPorts = (ports: AppElm.Main.App['ports']) => {
  ports.requestToValidate.send(null)

  ports.validationResult.subscribe((data: any) => {
    alert(data)
  })
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <Elm src={AppElm.Main} flags={{ foo: 'bar' }} ports={setupPorts} />
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  )
}

export default App

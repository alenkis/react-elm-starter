import React from 'react'

import Elm from 'react-elm-components'
import { Elm as AppElm } from '../Main.elm'

const setupPorts = () => {}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
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
        <Elm
          src={AppElm.Main}
          flags={{ apiKey: 'foobarbaz' }}
          ports={setupPorts}
        />
      </header>
    </div>
  )
}

export default App

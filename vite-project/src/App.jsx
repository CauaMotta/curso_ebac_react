import { useState } from "react"

import Calculator from "./components/Calculator"
import Header from "./components/Header"
import Table from "./components/Table"
import Info from "./components/Info"

function App() {
  const [imc, setImc] = useState('');

  function eventFromChild(event) {
    setImc(event);
  }

  return (
    <div className="container">
      <Header />
      <Calculator onEvent={eventFromChild} />
      <Table imc={imc} />
      <Info />
    </div>
  )
}

export default App

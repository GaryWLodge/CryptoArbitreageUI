import React, { useEffect, useState} from "react"
import ArbitrageModel from "./ArbitreageModel"

const home = () => {

  componentWillMount(); {
    startEventSource
  }

var startEventSource = () => {
    let eventSource = new EventSource("http://localhost:8080/api/Arbitrage/prices")
    eventSource.onmessage = e => updateArbitrageModel(JSON.parse(e.data))
  },

   updateArbitrageModel = () => {
    setData([...ArbitrageModel])
  }

  return (
    <table className="table table-hover">
      <thead className="thead-dark">
        <tr>
          <th>Id</th>
          <th>Title</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {data.map((p) => (
          <tr key={p.symbol}>
            <td>{p.differencePercent}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export { home }

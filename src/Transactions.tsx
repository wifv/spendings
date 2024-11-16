import { useEffect, useState } from "react"

const Transactions = () => {
  const [transactions, setTransactions] = useState([])

  useEffect(() => {
    fetch(`http://localhost:3000/getTransactions?&offset=0`, {
      method: 'GET'
    })
    .then((response: any) => {
      return response.json()
    })
    .then((data: any) => {
      setTransactions(data)
      console.log(data)
    })
  }, [])

  function deleteThis(id: Number) {
    fetch(`http://localhost:3000/deleteTransaction/${id}`, {
      method: 'DELETE'
    })
    .then((response: any) => {
      return response.json()
    })
    .then((data: any) => {
      console.log(data)
    })
  }

  return (
    <div>
      {
        transactions.map((element: any) => (
          <div key={element.id}>
            time: {element.time} <br />
            amount: {element.amount} <br /><br />
            <button onClick={() => {
              deleteThis(element.id)
              
            }}>negr button</button>
          </div>
        ))
      }
    </div>
  )
}

export default Transactions

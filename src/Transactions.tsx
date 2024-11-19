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
        let transaction = document.getElementById(`transaction-${id}`)
        console.log(transaction)
        if (transaction) {
          transaction.style.display = "none"
        }
        console.log(data)
      })
  }

  return (
    <div>
      {
        transactions.length
          ?
          transactions.map((element: any) => (
            <div key={element.id} id={`transaction-${element.id}`}>
              time: {element.time} <br />
              amount: {element.amount} <br /><br />
              <button onClick={() => {
                deleteThis(element.id)

              }}>negr button</button>
            </div>
          ))  
          : 'no transactions'
      }
    </div>
  )
}

export default Transactions

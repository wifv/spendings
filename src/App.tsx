import { useEffect } from "react"
import Form from "./Form"

const App = () => {

  useEffect(() => {
    fetch(`http://localhost:3000/getTransactions?&offset=0`, {
      method: 'GET'
    })
    .then((response: any) => {
      return response.json()
    })
    .then((data: any) => {
      console.log(data)
    })
  }, [])

  useEffect(() => {
    fetch(`http://localhost:3000/deleteTransaction/9`, {
      method: 'DELETE'
    })
    .then((response: any) => {
      return response.json()
    })
    .then((data: any) => {
      console.log(data)
    })
  }, [])

  return (
    <div>
      <Form />
    </div>
  )
}

export default App

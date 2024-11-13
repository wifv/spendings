import { ChangeEvent, useState } from "react";

export interface Transaction {
  time: string;
  amount: number;
}

const Form = () => {
  const [transaction, setTransaction] = useState<Transaction>({
    time: '',
    amount: 0
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setTransaction({
      ...transaction,
      [name]: name === 'amount' ? Number(value) : value
    });
  };

  
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    try {
      e.preventDefault();
      
      let a = {
        time: transaction.time,
        amount: transaction.amount
      }
      console.log(JSON.stringify(a))
      
      fetch(`http://localhost:3000/addTransaction`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json', // Specify JSON content type
        },
        body: JSON.stringify(a)
      })
        .then(response => {
        if (response.ok) {
          console.log('response: ok')
        } else {
          console.log("not ok");
        }
      })
    } catch (error) {
      console.log(error);
    }
  }


  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="time"
        placeholder="time"
        value={transaction.time}
        onChange={handleChange}
      />
      <input
        type="number"
        name="amount"
        placeholder="amount"
        value={transaction.amount}
        onChange={handleChange}
      />
      <button type="submit" className="submit-btn">Transaction</button>
    </form>
  );
};

export default Form;

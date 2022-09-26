import React, { useState } from 'react'
import './App.css';
import Table from './components/Table';
import Form from './components/Form';


const App = () => {
  const [user, setUser] = useState({ fname: "", phone: "",password: "" });
  const [data, setData] = useState([]);
  const { fname, phone,password } = user;
  


  const handleInput = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
      const myId = { id: new Date().getTime(), fname, phone,password };
      console.log(myId);
      setData([...data, myId]);
      setUser({ fname: "", phone: "",password: "" })
    }

  return (
    <div className='App'>
      <h1>Registration Form</h1>
      <Form fname={fname} phone={phone}password={password} handleInput={handleInput} handleSubmit={handleSubmit} /><br /><br />
      <h1>Form Records</h1>
      <div>
        {
          data.length === 0 ? <h1 style={{ color: "red" }}>NO DATA TO DISPLAY !!!!</h1> :
            <div>
              <Table data={data} />
            </div>
        }

      </div>
    </div>
  )
}

export default App
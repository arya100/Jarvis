import React ,{useState } from 'react'
import Input from './input'
import Table from './Table'
import './App.css';
import axios from 'axios'



function App() {
  const [userData, setUserData] = useState(null)

  const giveRecomadations = (value) => {
    const ajxObj = {
      url: 'http://demo9638213.mockable.io/jarvis',
      method: "post",
      data:value,
      headers: {
        "content-type": "application/JSON",
      }
    };
    return axios(ajxObj)
      .then(response => {
        console.log(`post`, response.data);
        const changedData = response.data.recommended_products.map((v) => ({
          proName:v
        }))
        setUserData(changedData)
        //Perform action based on response
       
      })
      .catch(error => {
        console.log(error.response);
  
        return console.log(`Field Should not be empty`);
        //Perform action based on error
      });
  };
 
  return (
    <div  className="App">
      <header className="App-header">
        <p
          className="App-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          Jarvis
        </p>
        <Input giveRecomadations={giveRecomadations}/>
      {userData && <Table data={userData}/>}
      </header>
      
    </div>
  );
}

export default App;

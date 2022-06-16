import React, {useState} from 'react';
import ToDoList from './ToDoList';
import './App.css';

function App() {
  const [inputList, setInputList] =useState();
  const [Items, setItems]=useState([]);
  const listOfItems = () =>{
    
      setItems((oldItems)=>{
        return [...oldItems, inputList];

      });
    
setInputList("");
  };
  const deleteItems = (id)=>{
    setItems((oldItems)=>{
      return oldItems.filter((arrElm, index) =>{
        return index !== id;

      });
      

    });
  };
  
  return (
    <>
    <div className='main_div'>
      <div className='center_div'>
        <br/>
        <h1>TODO LIST</h1>
        <br/>
        <input type="text" placeholder='Add a Items' 
        value={inputList}
        onChange={(e)=>setInputList(e.target.value)} 
        
        ></input>
        <button onClick={listOfItems}>+</button>

        <ol>
          {
          Items.map((itemval, index)=>{
            return <ToDoList
            key={index}
            id={index}
              text={itemval}
              onSelect={deleteItems}
            />;
          })}
        </ol>
      </div>

    </div>
    </>
  );
}

export default App;

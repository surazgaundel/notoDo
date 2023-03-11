import { useState } from 'react'
import './App.css'

function App() {
  const [item, setItem] = useState([]);
  const [listItem, setListItem] = useState("");

  console.log(item);
  function handleChange(e){
    setListItem(e.target.value)
  }

  function handleItem(e){
    const task={
      id:item.length===0?1:item[item.length-1].id+1,
      itemName:listItem
    } 
    setItem([...item,task]);
  }

  function deleteItem(id){
    setItem(item.filter(el=>el.id!==id));
  }
  return (
    <div className="App"><hr/>
    <h1>NOT TO DO</h1><hr/>
    <input onChange={handleChange} type="text" name="item" id="itemid" placeholder="Add boring things"/>
    <button type="submit" onClick={handleItem}>Not Interested</button>
    <div className="itemList">
      {item.length>0?
      item.map(el=>{
        return(<ul><li onClick={()=>deleteItem(el.id)} style={{cursor:'pointer'}}>{el.itemName}</li></ul>)
      }) :<h3>Clear Your Mind</h3>
  }
    </div>
    </div>
  )
}

export default App

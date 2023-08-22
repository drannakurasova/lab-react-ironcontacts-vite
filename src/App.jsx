import "./App.css";
import allContacts from "./contacts.json";
import { useState } from "react";

function App() {
  const [contacts, setContacts] = useState(allContacts.slice(0, 5));
  console.log (contacts)

  const handleAddContact = () => {
    console.log("adding a contact")
    // let randomContact = allContacts[Math.floor(Math.random()*allContacts.length)]
    // console.log (randomContact)

    // let clonedContacts = JSON.parse(JSON.stringify(contacts));
    // clonedContacts.unshift (randomContact) 

    let clonedContacts = JSON.parse(JSON.stringify(contacts));
    clonedContacts.unshift (allContacts[Math.floor(Math.random()*allContacts.length)]) 

    setContacts(clonedContacts)
  }

  const handleSortByName = () => {
    console.log ("sorting by name")
    let clonedContacts = JSON.parse(JSON.stringify(contacts))

    // clonedContacts.sort ( (contact1, contact2) => {
    //   return contact1.name > contact2.name ? 1 : -1
    // }  )

    // for (let i=0; i<clonedContacts.length; i++) { 
    //  clonedContacts[0].localCompare(clonedContacts[i])
    // console.log("i0", clonedContacts[0],"ii", clonedContacts[i])
    // console.log (clonedContacts[0].name.localeCompare(clonedContacts[i].name))
    // return clonedContacts[0].name.localeCompare(clonedContacts[i].name) > 0 ? 1 : -1

    clonedContacts.sort ( (contact1, contact2) => { 
     return contact1.name.localeCompare(contact2.name) > 0 ? 1 : -1
    })
  setContacts (clonedContacts)
}

  
  

  const handleSortByPopularity = () => {
    console.log ("sorting by popularity")
    let clonedContacts = JSON.parse(JSON.stringify(contacts))

    clonedContacts.sort ( (contact1, contact2) => {
      return contact1.popularity > contact2.popularity ? -1 : 1
    }  )

    
    setContacts (clonedContacts)
  }

  const handleDelete = (i) => {
    console.log("deleting", i)

    let clonedContacts = JSON.parse(JSON.stringify(contacts))
    clonedContacts.splice(i, 1)
    setContacts(clonedContacts)
      }

  return (
    <div className="App">
      <h1>LAB | React IronContacts</h1>

      <button onClick={handleAddContact} >Add a Random Contact</button>
      <button onClick={handleSortByName} >Sort by name</button>
      <button onClick={handleSortByPopularity} >Sort by popularity</button>
      <table className="table">
        <thead className="header">
         <tr className="tr"> 
          <th>Picture</th>
  
          <th>Name</th>
        
          <th>Popularity</th>

          <th>Won Oscar</th>
        
        <th>Won Emmy</th>

        <th>Actions</th>
        </tr>
</thead>
        {contacts.map((eachContact, i) => {
          return (
          <tbody>
            <tr className="tr">
            <th><img src={eachContact.pictureUrl} alt="" width="100px"/></th>
          
            <th>{eachContact.name}</th>
       
            <th>{eachContact.popularity.toFixed(2)}</th>

            <th>{eachContact.wonOscar === true ? "🏆" : null} </th>

            <th>{eachContact.wonOscar === true ? " 🌟" : null} </th>

            <th><button onClick={()=> handleDelete(i)}>Delete</button> </th>
         </tr> 
         </tbody>
           )
        })}
      </table>
    </div>
  );
}

export default App;

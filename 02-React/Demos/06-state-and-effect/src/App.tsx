import React, { ChangeEvent } from 'react';
import List from "./component/List"
import Form from "./component/Form"

const people = [
  "Tom",
  "Peter",
  "Helen",
  "Dave",
  "Tina",
  "Krisztina",
  "Kevin",
];

const locations = ["Bristol", "Cardiff", "Dundrum", "Trowbridge"];


function App() {
  const [filteredPeople, setFilteredPeople] = React.useState(people)
  const [name, setName] = React.useState("")

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setName(e.target.value)
    setFilteredPeople(people.filter(item =>
      item.toLowerCase().includes(e.target.value.toLowerCase())))
  }

  return (
    <div>
      <Form />
      <h1>Here are the {filteredPeople.length} people in the room</h1>
      <label htmlFor="name"><input id="name" value={name} onChange={(e) => handleChange(e)} /></label>
      <List data={filteredPeople}>
        <h2>Hello! I'm here too!</h2>
      </List>
      <h1>Here are the places we are</h1>
      <List data={locations} />
    </div>
  );
}

export default App;

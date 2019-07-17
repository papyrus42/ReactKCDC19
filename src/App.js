import React, { useState, useEffect } from "react";
import { getSession } from "./API/sessionApi";
import TextInput from "./TextInput";

const blankSession = {
  id: null,
  title: ""
};

function App() {
  //this will hold the form data
  const [session, setSession] = useState({ blankSession });
  //use state returns an array and also returns a function to reset the data
  const [sessions, setSessions] = useState([]);

  useEffect(() => {
    getSession().then(sessions => {
      setSessions(sessions);
    });
  }, []); //run effect only once

  function deleteSession(id) {
    const newSessions = sessions.filter(session => session.id !== id);
    setSessions(newSessions); //this triggers a rerender, because state changed
  }

  function renderSession(session) {
    return (
      <li key={session.id}>
        <button onClick={() => deleteSession(session.id)}>Delete</button>
        {session.title}
      </li>
    );
  }

  function saveSession(event) {
    event.preventDefault(); //dont post back to the server
    const newSession = { ...session, id: Math.random() }; // <.<
    setSessions([...sessions, newSession]); //the ... sets it to a copy of the array, then add the new session
    setSession(blankSession);
  }

  function onChange(event) {
    const newSession = { ...session, title: event.target.value }; //copy session, can change the title on the same line
    //newSession.title = event.target.value;
    setSession(newSession);
  }

  return (
    <>
      <h1>KCDC Sessions</h1>
      <form onSubmit={saveSession}>
        <h2>Add Session</h2>
        <TextInput
          id="title"
          onChange={onChange}
          label="Title"
          value={session.title}
        />
        <input type="submit" value="Add Session" />
      </form>
      <ul>{sessions.map(renderSession)}</ul>
    </>
  );
}

export default App;

import React, { useState } from "react";

function App() {
  let sessions = ["React", "C#", "Python"];

  function renderSession(session) {
    return <li key={session}>{session}</li>;
  }

  return (
    <>
      <h1>KCDC Sessions</h1>
      <ul>{sessions.map(renderSession)}</ul>
    </>
  );
}

export default App;

import React from 'react';

function App(){
  let sessions = [
    "React",
    "C#",
    "Python"
  ];

  return ( 
  <React.Fragment>
    <h1>KCDC Sessions</h1>
      {sessions.map(session => <li>{session}</li>)}
  </React.Fragment>
    );
}

export default App;
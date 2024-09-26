import React from 'react';
import Greeting from './Greeting';         // Example for Question 1
import ProfileCard from './ProfileCard';   // Example for Question 2

function App() {
  return (
    <div>
      <Greeting name="John" />
      <ProfileCard name="John Doe" age={30} location="New York" />
    </div>
  );
}

export default App;

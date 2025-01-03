// src/App.jsx
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import NavBar from './components/NavBar/NavBar';
import MailboxList from './components/MailboxList/MailboxList';
import MailboxForm from './components/MailboxForm/MailboxForm';
import MailboxDetails from './components/MailboxDetails/MailboxDetails';
import LetterForm from './components/LetterForm/LetterForm';

const App = () => {
  const [mailboxes, setMailboxes] = useState([]);
  const [letters, setLetters] = useState([]);

  const addBox = (box) => {
    const newBox = {
      ...box,
      _id: mailboxes.length + 1,
    };
    setMailboxes([...mailboxes, newBox]);
  };

  const addLetter = (letter) => {
    setLetters([...letters, letter]);
  };

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<main><h1>Post Office</h1></main>} />
        <Route path="/mailboxes" element={<MailboxList mailboxes={mailboxes} />} />
        <Route path="/new-mailbox" element={<MailboxForm addBox={addBox} />} />
        <Route path="/mailboxes/:mailboxId" element={<MailboxDetails mailboxes={mailboxes} letters={letters} />} />
        <Route path="/new-letter" element={<LetterForm mailboxes={mailboxes} addLetter={addLetter} />} />
      </Routes>
    </Router>
  );
};

export default App;



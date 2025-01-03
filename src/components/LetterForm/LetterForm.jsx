// src/components/LetterForm/LetterForm.jsx
import { useState } from 'react';

const LetterForm = ({ mailboxes, addLetter }) => {
  const [mailboxId, setMailboxId] = useState('');
  const [recipient, setRecipient] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addLetter({ mailboxId: Number(mailboxId), recipient, message });
    setMailboxId('');
    setRecipient('');
    setMessage('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <select value={mailboxId} onChange={(e) => setMailboxId(e.target.value)}>
        <option value="" disabled>Select Mailbox</option>
        {mailboxes.map(mailbox => (
          <option key={mailbox._id} value={mailbox._id}>
            {mailbox._id}
          </option>
        ))}
      </select>
      <input
        type="text"
        value={recipient}
        onChange={(e) => setRecipient(e.target.value)}
        placeholder="Recipient"
      />
      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Message"
      ></textarea>
      <button type="submit">Send Letter</button>
    </form>
  );
};

export default LetterForm;

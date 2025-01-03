// src/components/MailboxDetails/MailboxDetails.jsx
import { useParams } from 'react-router-dom';

const MailboxDetails = ({ mailboxes, letters }) => {
  const { mailboxId } = useParams();
  const selectedBox = mailboxes.find(mailbox => mailbox._id === Number(mailboxId));

  if (!selectedBox) {
    return <p>Mailbox Not Found!</p>;
  }

  const selectedLetters = letters.filter(letter => letter.mailboxId === Number(mailboxId));

  return (
    <div>
      <h2>Mailbox Details</h2>
      <p>Box Number: {selectedBox._id}</p>
      <p>Box Owner: {selectedBox.boxOwner}</p>
      <p>Box Size: {selectedBox.boxSize}</p>
      <h3>Letters:</h3>
      {selectedLetters.length === 0 ? (
        <p>No letters</p>
      ) : (
        <ul>
          {selectedLetters.map((letter, index) => (
            <li key={index}>
              <p>Recipient: {letter.recipient}</p>
              <p>Message: {letter.message}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MailboxDetails;


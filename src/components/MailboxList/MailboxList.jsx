import { Link } from 'react-router-dom';

const MailboxList = ({ mailboxes }) => (
  <div>
    {mailboxes.map(mailbox => (
      <Link to={`/mailboxes/${mailbox._id}`} key={mailbox._id} className="mail-box">
        <div>{mailbox._id}</div>
      </Link>
    ))}
  </div>
);

export default MailboxList;

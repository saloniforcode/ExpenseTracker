
import '../styles/styles.css';

const DeleteTransaction = ({ onDelete }: { onDelete: () => void }) => {
  return (
    <div className="container">
      <h1>Delete Transaction</h1>
      <button onClick={onDelete}>Delete</button>
    </div>
  );
};

export default DeleteTransaction;

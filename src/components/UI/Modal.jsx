import Button from "./Button";

export const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <Button className="close-button" onClick={onClose}>
          Close
        </Button>
        <div className="modal-content">{children}</div>
      </div>
    </div>
  );
};

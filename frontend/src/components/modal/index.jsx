import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

function Dialog({
  title,
  children,
  show = false,
  handleClose = () => {},
  handleSubmit = () => {},
  closeButtonLabel = "Close",
  submitButtonLabel = "Confirm",
  centered = true,
}) {
  return (
    <Modal show={show} onHide={handleClose} centered={centered}>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{children}</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          {closeButtonLabel}
        </Button>
        <Button variant="primary" onClick={handleSubmit}>
          {submitButtonLabel}
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default Dialog;

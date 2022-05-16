import React from "react";
import { Modal, ModalBody, ModalHeader } from "shards-react";

const CustomModal = ({ toggle, open }) => {
  return (
    <div>
      <Modal open={open} toggle={toggle} centered={true} size="md">
        <ModalHeader>Header</ModalHeader>
        <ModalBody>👋 Hello there!</ModalBody>
      </Modal>
    </div>
  );
};

export default CustomModal;

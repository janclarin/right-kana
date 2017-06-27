import React, { Component } from 'react';
import { Modal, Image } from 'react-bootstrap';

class KanaInfoModal extends Component {
  render() {
    const { kana, romaji, gifUrl, ...other } = this.props;
    return (
      <Modal {...other}>
        <Modal.Header closeButton>
          <Modal.Title>{kana} ({romaji})</Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center">
          <Image src={gifUrl} />
        </Modal.Body>
      </Modal>
    );
  }
}

export default KanaInfoModal;

import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import QRCode from 'qrcode';

// var QrReader = require('qrreader');

const Generatecode = () => {
  // generate qr
  const [text, setText] = useState('');
  const [image, setImage] = useState('');
  const Generateqr = async () => {
    try {
      const Scan = await QRCode.toDataURL(text);
      setImage(Scan);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Navbar bg="primary">
        <Container>
          <Navbar.Brand href="#home">QRCode Generator</Navbar.Brand>
        </Container>
      </Navbar>
      <div className="container">
        <div className="justify-content-md-center my-5">
          <input type="text" onChange={(e) => setText(e.target.value)}></input>
          <button className="btn-primary" onClick={() => Generateqr()}>
            Click to Generate
          </button>
          <br />
          <div className="col-12">
            {image ? (
              <a href={image} download>
                <img src={image} alt="img/" />
              </a>
            ) : null}
          </div>
        </div>
      </div>
      <div>
        <p>click image to download</p>
      </div>
    </>
  );
};

export default Generatecode;

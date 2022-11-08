import React, { useState } from 'react';
import { QrReader } from 'react-qr-reader';

const Scanner = (props) => {
  const [data, setData] = useState('No result');

  return (
    <>
      <div className="row">
        <div className="col-6">
          <QrReader
            delay={300}
            onResult={(result, error) => {
              if (result) {
                setData(result?.text);
              }

              if (error) {
                console.log(error);
              }
            }}
            style={{ width: '100%' }}
          />
        </div>
        <div className="col-6">
          <div style={{ fontSize: 18, width: 320, height: 100, marginTop: 100 }} rowsMax={4} defaultValue={data} value={data}>
            {data}
          </div>
        </div>
      </div>
    </>
  );
};

export default Scanner;

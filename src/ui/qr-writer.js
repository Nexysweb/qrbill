import React from 'react';

import QR from '../lib/qr';
import { example, dataLabels } from '../lib/data-examples';

// swiss qr code should be 46 x 46 mm and the cross 7 x 7 mmm in the middle

// this is a quick wrapper around the qrcode generator for the generation f qqr code with JSON cntent
function SwissQr(props) {
  const { value } = props;

  return <div className="row">
    <div className="col-md-6">
      <h3> Generated Swiss QR</h3>
      <QR value={value}/>
    </div>
    <div className="col-md-6">
      <h3>QR Content (as an array)</h3>
      <pre>{JSON.stringify(value, null, 2)}</pre>
    </div>
  </div>;
}

export default SwissQr;
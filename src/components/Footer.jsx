import React from 'react'
import ReactTooltip from 'react-tooltip'

import qrImg from '../img/bc1qrgc80lur9tnhtt9yz8kcm2upzy05kq87j9kd3t.png'

const btcAddress = 'bc1qrgc80lur9tnhtt9yz8kcm2upzy05kq87j9kd3t'

const Footer = () => {
  return (
    <footer>
      <p className="footer">
        Tips and contributions towards running costs appreciated. <a data-tip='' data-for='test' href={`bitcoin:` + btcAddress}>{btcAddress}</a>
      </p>
      <ReactTooltip id='test' place="top" type="light" effect="solid" delayHide={300}>
        <img alt={btcAddress} src={qrImg} />
      </ReactTooltip>
    </footer>
  )
}

export default Footer

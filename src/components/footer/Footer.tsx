import React from 'react';
import { Container } from 'components';
import { Button } from '@material-ui/core';
import Config from 'config';

const Footer: React.FC = () => {
  return (
    <Container>
      <div className='footer'>
        <Button className='footer-item btn-text' href={`${Config.etherscan}${Config.Pool1.address}`} target='_blank' >Contract</Button>
        <Button className='footer-item btn-text' href='https://uniswap.info/pair/0xab2d2f5bc36620a57ec4bb60d6a7df2a847deab5' target='_blank' >Uniswap</Button>
        <Button className='footer-item btn-text' href='https://twitter.com/UnificationUND' target='_blank' >Twitter</Button>
        <Button className='footer-item btn-text' href='https://t.me/UnificationOfficial' target='_blank' >Telegram</Button>
      </div>
    </Container>
  )
}

export default Footer;

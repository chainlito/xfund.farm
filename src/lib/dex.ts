import Config from 'config';
import web3client from './web3client';
import coingecko from './coingecko';

const getLpTokenPrice = async () => {
  const totalSupply = await web3client.getTotalSupply(web3client.uniLpTokenContract);
  const wethBalance = await web3client.getBalance(web3client.wethTokenContract, Config.UniLpToken.address);
  const ethPrice = await coingecko.getEthPrice();
  return 2 * ethPrice * wethBalance / totalSupply;
}

export default {
  getLpTokenPrice,
};

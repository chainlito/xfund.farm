import { put, takeLatest, fork } from 'redux-saga/effects';
import {
  ActionType,
} from 'types';

import { web3client } from 'lib';
import { setTotalSupply } from './tokenActions';

function* setTotalSupplySaga() {
  try {
    const totalSupply = yield web3client.getTotalSupply(web3client.tokenContract);
    yield put(setTotalSupply(totalSupply));
  } catch(err) {
    yield put(setTotalSupply(0));
  }
}


function* tokenSagaWatcher() {
  yield takeLatest(ActionType.TOKEN_SET_TOTAL_SUPPLY as any, setTotalSupplySaga);
  yield takeLatest(ActionType.SET_ACCOUNT as any, setTotalSupplySaga);
}

export default [
  fork(tokenSagaWatcher),
];

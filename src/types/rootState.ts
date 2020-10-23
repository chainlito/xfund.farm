import { BasicReducerType } from 'store/app/basicReducer';
import { AccountReducerType } from 'store/account/accountReducer';
import { TokenReducerType } from 'store/token/tokenReducer';
import { PoolReducerType } from 'store/pool/poolReducer';

export interface RootState {
    basic: BasicReducerType;
    account: AccountReducerType;
    token: TokenReducerType;
    pool: PoolReducerType;
}

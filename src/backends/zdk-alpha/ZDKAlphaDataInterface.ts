import {
  MarketDetailsFragment,
  MarketInfoFragment,
  TokenDetailsFragment,
  TokenInfoFragment,
} from '@zoralabs/zdk-alpha/dist/src/queries/queries-sdk';
import { NFTInterface } from '../../types/NFTInterface';

import { TokenMarketResponseItem } from '@zoralabs/zdk-alpha/dist/src/types';

export type FullTokenMarketResponse = {
  markets: MarketInfoFragment & MarketDetailsFragment;
  token: TokenInfoFragment & TokenDetailsFragment;
};
export interface ZDKAlphaDataInterface extends NFTInterface<TokenMarketResponseItem> {}

export { TokenMarketResponseItem };
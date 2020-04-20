import {
  checkPropTypes,
  number,
  objectOf,
  string,
} from 'prop-types';
import ExchangeModel from './ExchangeModel';

export const arbitrageModelPropTypes = {
  symbol: string.isRequired,
  differencePercent: number.isRequired,
  exchangeModel: objectOf(ExchangeModel).isRequired,
};

class ArbitrageModel {
  constructor({ symbol, differencePercent, exchangeModel }) {
    const props = { symbol, differencePercent, exchangeModel };
    checkPropTypes(arbitrageModelPropTypes, props, 'param');
    this.symbol = symbol;
    this.differencePercent = differencePercent;
    this.exchangeModel = exchangeModel;
  }
}

export default ArbitrageModel;
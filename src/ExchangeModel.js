import {
    checkPropTypes,
    number,
    objectOf,
    string,
  } from 'prop-types';
  
  export const ExchangeModelPropTypes = {
    exchangeSell: objectOf(PriceModel).isRequired,
    exchangeBuy:  objectOf(PriceModel).isRequired
  };

  export const PriceModelPropTypes = {
    symbol: String.isRequired,
    price:  Number.isRequired,
    exchange: String.isRequired
  };
  
  class ExchangeModel {
    constructor({ exchangeSell, exchangeBuy }) {
      const props = { exchangeSell, exchangeBuy };
      checkPropTypes(ExchangeModelPropTypes, props, 'param');
      this.exchangeSell = exchangeSell;
      this.exchangeBuy = exchangeBuy;
    }
  }

  class PriceModel {
    constructor({ symbol, price, exchange }) {
      const props = { symbol, price, exchange };
      checkPropTypes(PriceModelPropTypes, props, 'param');
      this.symbol = symbol;
      this.price = price;
      this.exchange = exchange;
    }
  }
  
  export default ExchangeModel;
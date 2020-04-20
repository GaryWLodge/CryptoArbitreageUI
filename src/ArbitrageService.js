import { checkPropTypes, number, string } from 'prop-types';

function arbitrageService() {
  const propTypes = {
    
  };
  const props = {  };
  checkPropTypes(propTypes, props, 'param');

  return dispatch => {
    return fetch('/api/Arbitrage/prices', {
      method: 'post',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify(props)
    })
      .then(response => {
        if (response.ok) return response.json();
        if (response.status === 400)
          return response.json().then(errorObj => {
            throw new Error(errorObj.message);
          });
        throw new Error(response.statusText);
      })
      .then(json => {
        const newPriceSet = new priceSet(json);
        dispatch(home(newPriceSet));
        return newProduct;
      });
  };
}

export default arbitrageService;
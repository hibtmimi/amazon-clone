import React from "react";
import "./Subtatal.css";
import CurrencyFormate from "react-currency-format";
import { useStateValue } from "../StateProvider";
import { getBasketTotal } from "../reducer";
import { useHistory } from "react-router-dom";



function Subtotal() {
  const history = useHistory();
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div className="subtotal">
      <CurrencyFormate 
      renderText=
      {(value) => (
        <>
          <p>
              Subtotal {basket.length} items: <strong>{ value}</strong>
          </p>
          <small className="subtotal__gift">
            <input type="checkbox" />
            This order contains a gift
          </small>
        </>
          )}
          decimalScale={2}
          value = {getBasketTotal(basket)}
          displayType={'text'}
          thousandSeparator={true}
              prefix={'$'}
          />
          <button onClick = {e => history.push('/payment')}> Procced to Checkout </button>
   {/* to move to the net page and keep the button style */}
    </div>

  );
}

export default Subtotal;

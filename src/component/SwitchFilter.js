import React, { useContext } from "react";
import { recordsContext } from "../context/records/RecordsContext";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";

const SwitchFilter = (props) => {
  const {
    moneyOrderChecked,
    setMoneyOrderChecked,
    payPalChecked,
    setPayPalChecked,
    checkChecked,
    setCheckChecked,
    creditCardChecked,
    setCreditCardChecked,
  } = useContext(recordsContext);

  return (
    <FormGroup className="switch">
      <FormControlLabel
        control={
          <Switch
            checked={moneyOrderChecked}
            onChange={setMoneyOrderChecked}
            color="primary"
          />
        }
        label="Money Order"
        labelPlacement="start"
      />
      <FormControlLabel
        control={
          <Switch
            checked={payPalChecked}
            onChange={setPayPalChecked}
            color="primary"
          />
        }
        label="PayPal"
        labelPlacement="start"
      />
      <FormControlLabel
        control={
          <Switch
            checked={checkChecked}
            onChange={setCheckChecked}
            color="primary"
          />
        }
        label="Check"
        labelPlacement="start"
      />
      <FormControlLabel
        control={
          <Switch
            checked={creditCardChecked}
            onChange={setCreditCardChecked}
            color="primary"
          />
        }
        label="CC"
        labelPlacement="start"
      />
    </FormGroup>
  );
};

export default SwitchFilter;

import React, { useReducer } from "react";
import { recordsContext } from "./RecordsContext";
import recordsReducer from "./RecordsReducer";
import axios from "axios";
import {
  GET_RECORDS,
  SHOW_RECORDS_ERROR,
  SET_SELECTED_GENDER,
  SET_MONEY_ORDER_CHECKED,
  SET_PAYPAL_CHECKED,
  SET_CREDIT_CARD_CHECKED,
  SET_CHECK_CHECKED,
  SEARCH_RECORDS,
} from "./../types";

const RecordsState = (props) => {
  const initialState = {
    records: [],
    loading: true,
    error: "",
    currentPage: 1,
    recordsPerPage: 10,
    selectedGender: {},
    moneyOrderChecked: false,
    payPalChecked: false,
    creditCardChecked: false,
    checkChecked: false,
  };

  const [state, dispatch] = useReducer(recordsReducer, initialState);

  const getPatientRecords = async () => {
    try {
      const response = await axios.get(
        "http://api.enye.tech/v1/challenge/records"
      );
      dispatch({
        type: GET_RECORDS,
        payload: response.data.records.profiles,
      });
    } catch (error) {
      dispatch({
        type: SHOW_RECORDS_ERROR,
        payload: error.message,
      });
    }
  };

  const setSelectedGender = (gender) => {
    dispatch({
      type: SET_SELECTED_GENDER,
      payload: gender,
    });
  };

  const setMoneyOrderChecked = () =>
    dispatch({ type: SET_MONEY_ORDER_CHECKED });

  const setPayPalChecked = () => dispatch({ type: SET_PAYPAL_CHECKED });

  const setCreditCardChecked = () =>
    dispatch({ type: SET_CREDIT_CARD_CHECKED });

  const setCheckChecked = () => dispatch({ type: SET_CHECK_CHECKED });

  const searchRecords = (query) => {
    dispatch({ type: SEARCH_RECORDS, payload: query });
  };

  const {
    records,
    loading,
    error,
    selectedGender,
    moneyOrderChecked,
    payPalChecked,
    creditCardChecked,
    checkChecked,
  } = state;

  return (
    <recordsContext.Provider
      value={{
        records,
        loading,
        error,
        selectedGender,
        moneyOrderChecked,
        payPalChecked,
        creditCardChecked,
        checkChecked,
        setSelectedGender,
        setMoneyOrderChecked,
        setPayPalChecked,
        setCreditCardChecked,
        setCheckChecked,
        getPatientRecords,
        searchRecords,
      }}
    >
      {props.children}
    </recordsContext.Provider>
  );
};

export default RecordsState;

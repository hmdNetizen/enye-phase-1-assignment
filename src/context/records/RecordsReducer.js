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
const recordsReducer = (state, action) => {
  switch (action.type) {
    case GET_RECORDS:
      return {
        ...state,
        records: action.payload,
        loading: false,
        error: "",
      };
    case SHOW_RECORDS_ERROR:
      return {
        ...state,
        error: action.payload,
        records: [],
        loading: false,
      };
    case SET_SELECTED_GENDER:
      return {
        ...state,
        selectedGender: action.payload,
        loading: false,
        error: "",
      };
    case SET_MONEY_ORDER_CHECKED:
      return {
        ...state,
        moneyOrderChecked: !state.moneyOrderChecked,
      };
    case SET_PAYPAL_CHECKED:
      return {
        ...state,
        payPalChecked: !state.payPalChecked,
      };
    case SET_CREDIT_CARD_CHECKED:
      return {
        ...state,
        creditCardChecked: !state.creditCardChecked,
      };
    case SET_CHECK_CHECKED:
      return {
        ...state,
        checkChecked: !state.checkChecked,
      };
    case SEARCH_RECORDS:
      return {
        ...state,
        textInput: action.payload,
      };
    default:
      return state;
  }
};

export default recordsReducer;

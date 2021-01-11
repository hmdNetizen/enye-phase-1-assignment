import { GET_RECORDS, SHOW_RECORDS_ERROR } from "./../types";
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
    default:
      return state;
  }
};

export default recordsReducer;

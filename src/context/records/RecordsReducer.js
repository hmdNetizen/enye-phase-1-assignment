import {
  GET_RECORDS,
  SHOW_RECORDS_ERROR,
  SET_SELECTED_GENDER,
  FILTER_BY_GENDER,
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
    case FILTER_BY_GENDER:
      return {
        // ...state,
        // filteredGender: state.records.filter(
        //   (record) => record.Gender === "Male"
        // ),
      };
    default:
      return state;
  }
};

export default recordsReducer;

import React, { useReducer } from "react";
import { recordsContext } from "./RecordsContext";
import recordsReducer from "./RecordsReducer";
import axios from "axios";
import { GET_RECORDS, SHOW_RECORDS_ERROR } from "./../types";

const RecordsState = (props) => {
  const initialState = {
    records: [],
    loading: true,
    errors: "",
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

  const { records, loading } = state;

  return (
    <recordsContext.Provider value={{ records, loading, getPatientRecords }}>
      {props.children}
    </recordsContext.Provider>
  );
};

export default RecordsState;

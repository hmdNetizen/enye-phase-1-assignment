import React, { useReducer } from "react";
import { recordsContext } from "./RecordsContext";
import recordsReducer from "./RecordsReducer";
import axios from "axios";
import {
  GET_RECORDS,
  SHOW_RECORDS_ERROR,
  SET_RECORDS_PER_PAGE,
} from "./../types";

const RecordsState = (props) => {
  const initialState = {
    records: [],
    currentRecords: [],
    loading: true,
    error: "",
    currentPage: 1,
    recordsPerPage: 10,
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

  const setRecordsPerPage = () => {
    const indexOfLastRecords = currentPage * recordsPerPage;
    const indexOfFirstRecords = indexOfLastRecords - recordsPerPage;
    const newCurrentRecords = records.slice(
      indexOfFirstRecords,
      indexOfLastRecords
    );

    dispatch({
      type: SET_RECORDS_PER_PAGE,
      payload: newCurrentRecords,
    });
  };

  const {
    records,
    loading,
    error,
    currentPage,
    recordsPerPage,
    currentRecords,
  } = state;

  return (
    <recordsContext.Provider
      value={{
        records,
        loading,
        error,
        currentPage,
        recordsPerPage,
        currentRecords,
        getPatientRecords,
        setRecordsPerPage,
      }}
    >
      {props.children}
    </recordsContext.Provider>
  );
};

export default RecordsState;

import React, { useReducer } from "react";
import { recordsContext } from "./RecordsContext";
import recordsReducer from "./RecordsReducer";
import axios from "axios";
import {
  GET_RECORDS,
  SHOW_RECORDS_ERROR,
  SET_SELECTED_GENDER,
  FILTER_BY_GENDER,
} from "./../types";

const RecordsState = (props) => {
  const initialState = {
    records: [],
    loading: true,
    error: "",
    currentPage: 1,
    recordsPerPage: 10,
    selectedGender: {},
    filteredGender: [],
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

  const filterByGender = () => {
    dispatch({
      type: FILTER_BY_GENDER,
    });
  };

  const { records, loading, error, selectedGender, filteredGender } = state;

  return (
    <recordsContext.Provider
      value={{
        records,
        loading,
        error,
        selectedGender,
        setSelectedGender,
        filteredGender,
        filterByGender,
        getPatientRecords,
      }}
    >
      {props.children}
    </recordsContext.Provider>
  );
};

export default RecordsState;

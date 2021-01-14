import React, { useContext } from "react";
import { recordsContext } from "./../../context/records/RecordsContext";

const genders = [
  { id: 1, type: "All" },
  { id: 2, type: "Male" },
  { id: 3, type: "Female" },
  { id: 4, type: "Prefer to skip" },
];

const ListGroup = ({ setCurrentPage }) => {
  const { selectedGender, setSelectedGender } = useContext(recordsContext);
  return (
    <ul className="list-group">
      <li className="list-group-item">
        <h4 className="list-group-item__title">Gender</h4>
      </li>
      {genders.map((gender) => (
        <li
          key={gender.id}
          className={`${
            selectedGender === gender
              ? "list-group-item active"
              : "list-group-item"
          } ${gender.id === 1 && !selectedGender.id}`}
          onClick={() => {
            setSelectedGender(gender);
            setCurrentPage(1);
          }}
          style={{ cursor: "pointer" }}
        >
          {gender.type}
        </li>
      ))}
    </ul>
  );
};

export default ListGroup;

import React, { useContext } from "react";
import { recordsContext } from "./../../context/records/RecordsContext";

const genders = [
  { id: 1, type: "All" },
  { id: 2, type: "Male" },
  { id: 3, type: "Female" },
  { id: 4, type: "Prefer to skip" },
];

const ListGroup = () => {
  const { selectedGender, setSelectedGender, filteredGender } = useContext(
    recordsContext
  );
  return (
    <ul className="list-group" style={{ width: 250 }}>
      <li className="list-group-item">
        <h4>Gender</h4>
      </li>
      {genders.map((gender) => (
        <li
          key={gender.id}
          className={
            selectedGender === gender
              ? "list-group-item active"
              : "list-group-item"
          }
          onClick={() => setSelectedGender(gender)}
          style={{ cursor: "pointer" }}
        >
          {gender.type}
        </li>
      ))}
    </ul>
  );
};

export default ListGroup;
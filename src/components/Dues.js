import React, { useState } from 'react';
import './styles.css'

const Dues = () => {
  const [selectedDues, setSelectedDues] = useState({});

  const duesData = [
    { id: 1, name: 'Due 1' },
    { id: 2, name: 'Due 2' },
    { id: 3, name: 'Due 3' },
  ];

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setSelectedDues((prevSelectedDues) => ({
      ...prevSelectedDues,
      [name]: checked,
    }));
  };

  const handleSubmit = () => {
    const checkedCount = Object.values(selectedDues).filter(Boolean).length;
    alert(`Number of selected dues: ${checkedCount}`);
  };

  return (
    <div className="student-data-container dues-container">
      <h1>Dues</h1>
      <form>
        {duesData.map((due) => (
          <div key={due.id}>
            <label>
              <input
                type="checkbox"
                name={due.id}
                checked={selectedDues[due.id] || false}
                onChange={handleCheckboxChange}
              />
              {due.name}
            </label>
          </div>
        ))}
        <button type="button" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Dues;
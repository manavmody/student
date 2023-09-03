import React, { useState } from 'react';
import './styles.css'

const Dues = () => {
  const [selectedDues, setSelectedDues] = useState({});

  const duesData = [
    { id: 1, name: 'Due 1', amount: 100 },
    { id: 2, name: 'Due 2', amount: 150 },
    { id: 3, name: 'Due 3', amount: 200 },
  ];

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setSelectedDues((prevSelectedDues) => ({
      ...prevSelectedDues,
      [name]: checked,
    }));
  };

  const handleSubmit = () => {
    // Calculate the sum of selected checkboxes
    let totalAmount = 0;
    for (const [key, value] of Object.entries(selectedDues)) {
      if (value) {
        const due = duesData.find((due) => due.id === parseInt(key));
        if (due) {
          totalAmount += due.amount;
        }
      }
    }
    alert(`Total amount of selected dues: ${totalAmount}`);
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
              {due.name} (${due.amount})
            </label>
          </div>
        ))}
        <button type="button" onClick={handleSubmit}>
          Calculate Total
        </button>
      </form>
    </div>
  );
};

export default Dues;

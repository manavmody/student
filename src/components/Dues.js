// Dues.js
import React, { useState } from 'react';
import './styles.css'

const Dues = () => {
  const [selectedDues, setSelectedDues] = useState({});

  // Updated duesData array with amount and description
  const duesData = [
    { id: 1, amount: 100, description: 'Tuition Fee' },
    { id: 2, amount: 150, description: 'Library Fee' },
    { id: 3, amount: 200, description: 'Lab Fee' },
    // Add more dues as needed
  ];

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setSelectedDues((prevSelectedDues) => ({
      ...prevSelectedDues,
      [name]: checked,
    }));
  };

  const handleSubmit = () => {
    // Calculate the sum of selected dues
    let totalAmount = 0;
    for (const [key, value] of Object.entries(selectedDues)) {
      if (value) {
        const due = duesData.find((due) => due.id === parseInt(key));
        if (due) {
          totalAmount += due.amount;
        }
      }
    }
    alert(`Total amount of selected dues: $${totalAmount}`);
  };

  return (
    <div className="student-data-container dues-container">
      <h1>Dues</h1>
      <table>
        <thead>
          <tr>
            <th>Checkbox</th>
            <th>Amount</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {duesData.map((due) => (
            <tr key={due.id}>
              <td>
                <input
                  type="checkbox"
                  name={due.id}
                  checked={selectedDues[due.id] || false}
                  onChange={handleCheckboxChange}
                />
              </td>
              <td>${due.amount}</td>
              <td>{due.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button type="button" onClick={handleSubmit}>
        Calculate Total
      </button>
    </div>
  );
};

export default Dues;

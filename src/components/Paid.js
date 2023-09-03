import React from 'react';
import './styles.css'

const Paid = () => {
  const paidFees = [
    { id: 1, type: 'Tuition Fee' },
    { id: 2, type: 'Library Fee' },
    { id: 3, type: 'Lab Fee' },
    // Add more fee types as needed
  ];

  const handleDownloadReceipt = (feeId) => {
    // Implement your logic to download the receipt for the selected fee here
    // You can use window.location or a library for file downloads
    alert(`Downloading receipt for fee ID ${feeId}`);
  };

  return (
    <div className="paid-container">
      <h1>Paid Fees</h1>
      <table>
        <thead>
          <tr>
            <th>Fee Type</th>
            <th>Download Receipt</th>
          </tr>
        </thead>
        <tbody>
          {paidFees.map((fee) => (
            <tr key={fee.id}>
              <td>{fee.type}</td>
              <td>
                <button onClick={() => handleDownloadReceipt(fee.id)}>Download</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Paid;

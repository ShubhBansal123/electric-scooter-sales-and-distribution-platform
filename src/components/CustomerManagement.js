// src/components/CustomerManagement.js
import React, { useState } from 'react';

function CustomerManagement() {
  const [customerName, setCustomerName] = useState('');
  const [customerEmail, setCustomerEmail] = useState('');
  const [crmResult, setCrmResult] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Simulate CRM API call
    setCrmResult(`Customer Added: ${customerName}, ${customerEmail}`);
    // Implement your actual fetch call here
  };

  return (
    <section id="crm">
      <h2>Customer Management</h2>
      <form id="crmForm" onSubmit={handleSubmit}>
        <input
          type="text"
          id="customerName"
          placeholder="Customer Name"
          value={customerName}
          onChange={(e) => setCustomerName(e.target.value)}
        />
        <input
          type="email"
          id="customerEmail"
          placeholder="Customer Email"
          value={customerEmail}
          onChange={(e) => setCustomerEmail(e.target.value)}
        />
        <button type="submit">Add Customer</button>
      </form>
      <div id="crmResult">{crmResult}</div>
    </section>
  );
}

export default CustomerManagement;

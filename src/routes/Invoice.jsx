import * as React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { deleteInvoice, getInvoice } from '../data';

export const Invoice = () => {
  let params = useParams();
  const navigate = useNavigate();

  let invoice = getInvoice(parseInt(params.invoiceId, 10));

  return (
    <main style={{ padding: '1rem' }}>
      <h2>Total Due: {invoice.amount}</h2>

      <p>
        {invoice.name}: {invoice.number}
      </p>

      <p>Due Date: {invoice.due}</p>

      <p>
        <button
          onClick={() => {
            deleteInvoice(parseInt(invoice.number, 10));
            navigate('/invoices');
          }}
        >
          Delete
        </button>
      </p>
    </main>
  );
};

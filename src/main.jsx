import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import App from './App';
import './main.css';
import Expenses from './routes/Expenses';
import Invoices from './routes/Invoices';
import Error from './routes/Error';
import { Invoice } from './routes/Invoice';

let rootElement = document.getElementById('app');
ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="expenses" element={<Expenses />} />
        <Route path="invoices" element={<Invoices />}>
          <Route
            index
            element={
              <main style={{ padding: '1rem' }}>
                <h2>Please select an Invoice</h2>
              </main>
            }
          />

          <Route path=":invoiceId" element={<Invoice />} />
        </Route>

        <Route path="*" element={<Error />} />
      </Route>
    </Routes>
  </Router>,
  rootElement
);

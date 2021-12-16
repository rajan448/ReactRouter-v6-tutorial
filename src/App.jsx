import * as React from 'react';
import { Link, Outlet } from 'react-router-dom';

export default function App() {
  return (
    <div
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      <h1>React Router Tutorial!</h1>
      <nav style={{ paddingBlock: '1rem', borderBottom: 'solid 1px' }}>
        <Link to="/invoices">Invoices</Link> |{' '}
        <Link to="/expenses">Expenses</Link>
      </nav>
      <Outlet />
    </div>
  );
}

import * as React from 'react';
import { getInvoice, getInvoices } from '../data';
import { Link, NavLink, Outlet, useSearchParams } from 'react-router-dom';

const Invoices = () => {
  // const [invoices, setInvoices] = React.useState([]);
  let invoices = getInvoices();
  let [searchParams, setSearchParams] = useSearchParams();

  // React.useEffect(() => {
  //   const data = getInvoices();
  //   setInvoices(data);
  // }, [invoices]);

  return (
    <main style={{ padding: '1rem' }}>
      <h2>Invoices</h2>

      <div style={{ display: 'flex' }}>
        <nav
          style={{
            display: 'block',
            borderRight: 'solid 1px',
            padding: '1rem',
          }}
        >
          <input
            value={searchParams.get('filter') || ''}
            onChange={(event) => {
              let filter = event.target.value;
              if (filter) {
                setSearchParams({ filter });
              } else {
                setSearchParams({});
              }
            }}
          />
          {invoices
            .filter((invoice) => {
              let filter = searchParams.get('filter');
              if (!filter) return true;
              let name = invoice.name.toLowerCase();
              return name.startsWith(filter.toLowerCase());
            })
            .map((invoice) => {
              return (
                <NavLink
                  style={({ isActive }) => {
                    return {
                      display: 'block',
                      margin: '1rem 0',
                      color: isActive ? 'red' : 'blue',
                    };
                  }}
                  to={`/invoices/${invoice.number}`}
                  key={invoice.number}
                >
                  {invoice.name}
                </NavLink>
              );
            })}
        </nav>

        <Outlet />
      </div>
    </main>
  );
};

export default Invoices;

import React from 'react';
import { Link } from 'react-router-dom';

import logo from './logo.svg';

function Header() {
  return (
    <div
      className="navbar navbar-expand-lg navbar-light bg-light mb-4"
      style={styles.navbar}
    >
      <Link to='/'>
        <div className="navbar-brand" style={styles.brand}>
          <img src={logo} alt="logo" style={styles.logo} />
          Interventions
        </div>
      </Link>
    </div>
  );
}

const styles = {
  navbar: {
    borderBottomRightRadius: '15px',
    borderBottomLeftRadius: '15px',
  },
  logo: {
    height: '40px',
    marginRight: '0.5rem',
  },
  brand: {
    fontSize: '1.5em',
    fontWeight: 'bold',
  },
};

export default Header;

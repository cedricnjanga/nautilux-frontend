import React, { useEffect, useState } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";

import * as types from '../types';
import { getInterventionsSorted } from '../selectors';
import { formatDateTime } from '../helpers';

import TableDate from '../components/Date';

const SortIcon = ({ direction, toggleSortDate }) => {
  const getURL = () => {
    const fileNameMap = {
      asc: 'sort-up-solid',
      desc: 'sort-down-solid',
      null: 'sort-solid'
    }

    return process.env.PUBLIC_URL + fileNameMap[direction] + '.svg'
  }

  return <img
    alt={direction}
    src={getURL(direction)}
    style={{ maxHeight: '20px', cursor: 'pointer'}}
    onClick={toggleSortDate}
  />
}

function InterventionsList() {
  const [sortDate, setSortDate] = useState(null);
  const dispatch = useDispatch();
  const interventions = useSelector(getInterventionsSorted(sortDate), shallowEqual);

  const toggleSortDate = () => {
    const newValue = (
      sortDate === null ? 'asc' :
      sortDate === 'asc' ? 'desc' :
      'asc'
    );
  
    setSortDate(newValue);
  }

  useEffect(() => {
    dispatch({ type: types.GET_INTERVENTIONS });
  }, [dispatch]);

  return (
    <div>
      <div className='mb-4' style={styles.actionSection}>
        <Link to={'/new'}>
          <button className='btn btn-warning text-white mr-2'>
            Creer une intervention
          </button>
        </Link>
        <p className='text-secondary'>{interventions.length} interventions</p>
      </div>
      <table className='table rounded-top'>
        <thead className='thead-light rounded-top'>
          <tr>
            <th style={{ display: 'flex' }}>DATE <SortIcon direction={sortDate} toggleSortDate={toggleSortDate} /></th>
            <th>NOM</th>
            <th>DESCRIPTION</th>
            <th>DEMANDEUR</th>
            <th>COORDONNEES</th>
          </tr>
        </thead>
        <tbody>
          {interventions.map(intervention => (
            <tr key={intervention.id}>
              <td>
                <TableDate createdAt={intervention.created_at} />
              </td>
              <td>
                <Link to={'/' + intervention.id.toString()} className='font-weight-bold text-dark text-decoration-none'>
                  {intervention.name}
                </Link>
                <p>{formatDateTime(new Date(intervention.created_at))}</p>
              </td>
              <td>{intervention.description}</td>
              <td>{intervention.sender_name}</td>
              <td>{intervention.sender_email} {intervention.sender_phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default InterventionsList;

const styles = {
  actionSection: {
    display: 'flex',
    alignItems: 'baseline'
  },
  table: {
    borderRadius: '15px'
  },
  container: {
    marginTop: '3em',
    padding: '10em',
    width: '100%',
    border: '3px dashed #f1f1f1',
    borderRadius: '15px',
    textAlign: 'center',
  },
  placeholder: {
    fontSize: '1.5em',
    color: '#ccc',
    fontWeight: 'bold'
  }
};

import React from 'react';
import PropTypes from 'prop-types';
import Transaction from './Transaction';
import styles from './TransactionHistory.module.css';

const TransactionHistory = ({ Transactions }) => (
  <>
    <table className={styles.transactionHistory}>
      <thead>
        <tr className={styles.main}>
          <th className={styles.title}>Type</th>
          <th className={styles.title}>Amount</th>
          <th className={styles.title}>Currency</th>
        </tr>
      </thead>
      <tbody>
        {Transactions.map((Transact, index) => (
          <tr className={index % 2 ? styles.even : ''} key={Transact.id}>
            <Transaction
              id={Transact.id}
              type={Transact.type}
              amount={Transact.amount}
              currency={Transact.currency}
            />
          </tr>
        ))}
      </tbody>
    </table>
  </>
);

TransactionHistory.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ),
};
export default TransactionHistory;

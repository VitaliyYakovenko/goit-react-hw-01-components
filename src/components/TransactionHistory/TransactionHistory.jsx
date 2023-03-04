import PropTypes from 'prop-types';
import css from './TransactionHistory.module.css'


export default function TransactionHistory({transactions}) {
  return (
    <table className={css.transaction__history}>
  <thead>
    <tr>
      <th className={css.transaction__head}>Type</th>
      <th className={css.transaction__head}>Amount</th>
      <th className={css.transaction__head}>Currency</th>
    </tr>
  </thead>

  <tbody  >
    {transactions.map(transaction => (
    <tr className={css.transaction__tr} key={transaction.id}>
    <td className={css.transaction__body}>{transaction.type}</td>
    <td className={css.transaction__body}>{transaction.amount}</td>
    <td className={css.transaction__body}>{transaction.currency}</td>
    </tr>
   ))}
           
  </tbody>
      </table>)
}


TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency : PropTypes.string.isRequired,
    })
  )
}



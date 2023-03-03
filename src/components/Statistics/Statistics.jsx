import PropTypes from 'prop-types';


export default function Statistics({ title, stats }) {
   return (
    <section className="statistics">
    {title && <h2 className='titel'>{title}</h2>}
    <ul className="stat-list">
       {stats.map(elem => (
         <li className="item" key={elem.id}>
         <span className="label">{elem.label}</span>
         <span className="percentage">{elem.percentage}</span>
    </li>
    ))}
    </ul>
    </section>
    ) 
 }


Statistics.propTypes = {
   titel: PropTypes.string,
   stats: PropTypes.arrayOf(PropTypes.shape(
      {
         id: PropTypes.string.isRequired,
         label: PropTypes.string.isRequired,
         percentage: PropTypes.number.isRequired,
      }
   )),
}

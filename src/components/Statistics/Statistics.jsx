import PropTypes from 'prop-types';
import getRandomHexColor from './random-color'
import css from './Statistics.module.css'


export default function Statistics({ titel, stats }) {
   return (
    <section className={css.statistics}>
    {titel && <h2 className={css.titel}>{titel}</h2>}
    <ul className={css.stat}>
            {stats.map(elem => (
               <li style={{ backgroundColor: getRandomHexColor() }}
               className={css.stat__item}
               key={elem.id}>
         <span className={css.stat__label}>{elem.label}</span>
         <span className={css.stat__percentage}>{elem.percentage + "%"}</span>
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
